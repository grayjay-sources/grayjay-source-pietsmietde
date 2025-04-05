import {
	type State,
	type Settings,
	type PietsmietDESource,
	type SearchTypes,
	type ChannelContentsTypeCapabilities,
	type HomeResponse,
	type VideoResponse,
	type StreamResponse,
	type YoutubeResponse,
	type CommentContext,
	type CommentResponse
} from "./types";

//#region defines 
const PLATFORM = "PietsmietDE" as const
const PLATFORM_SHORT = "PSDE" as const

const LIMIT_VIDEOS = 500;
const LIMIT_COMMENTS = 100;
const ORDER_VIDEOS = "latest";
const ORDER_COMMENTS = "latest"; // popular
const STREAM_LANGUAGE = "de";

const URL_BASE = "https://www.pietsmiet.de";
const URL_CHANNEL = `${URL_BASE}/videos/channels/`;
const URL_PROFILE = `${URL_BASE}/profile/`;

const URL_API_CONFIG = `${URL_BASE}/api/v1/config/i`;
const URL_API_CHANNELS = `${URL_BASE}/api/v1/videos/channels?page=`; // &order=videos
const URL_API_HOME = `${URL_BASE}/api/v1/videos?limit=${LIMIT_VIDEOS}&order=${ORDER_VIDEOS}&prioritize_featured=0&page=`; // &playlists[]=
const URL_API_PLAYLIST = `${URL_BASE}/api/v1/videos/playlists/`
const URL_API_PLAYLISTS = `${URL_BASE}/api/v1/videos/playlists?limit=${LIMIT_VIDEOS}&order=${ORDER_VIDEOS}&page=1`
const URL_API_VIDEO_DETAILS = `${URL_BASE}/api/v1/videos/`; // include[]=playlist
const URL_API_VIDEO_PLAYER = `${URL_BASE}/api/v1/utility/player?preset=quality&video=`;
const URL_API_COMMENTS = `${URL_BASE}/api/v1/utility/comments?order=${ORDER_COMMENTS}&type=video&limit=${LIMIT_COMMENTS}&id=`; // &include[]=replies
const URL_API_SEARCH = `${URL_BASE}/api/v1/search?page=`; // &query= &part=videos &part=playlists

const URL_ICON = `${URL_BASE}/assets/pietsmiet/brand/icon.svg`;
const URL_ICON_PNG = "https://i.vgy.me/CZ2jjB.png" as const // Todo: Find png on their website or implement svg parsing into GrayJay @Kelvin-FUTO
const URL_BANNER = `${URL_BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`;
const URL_BANNER_PNG = "https://i.imgur.com/8D68cRq.png"; // Todo: Find png on their website or implement svg parsing into GrayJay @Kelvin-FUTO
const URL_PLACEHOLDER_AVATAR = `${URL_BASE}/assets/pietsmiet/placeholder-1-1.jpg`;
const URL_PLACEHOLDER_THUMBNAIL = `${URL_BASE}/storage/images/static/placeholder-16-9.jpg`;

const REGEX_VIDEO_URL = /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/; // /https:\/\/www\.pietsmiet\.de\/videos\/(.*)/;
const REGEX_CHANNEL_URL = /https:\/\/www\.pietsmiet\.de\/videos\/channels\/(.*)/;
const REGEX_PLAYLIST_URL = /https:\/\/www\.pietsmiet\.de\/videos\/playlists\/(.*)/;

const PSPROXY_SERVERS = [
	"https://ytapi.minopia.de/",
	"https://ytapi2.minopia.de/"
]

const HEADER_INTEGRITY = 'X-Origin-Integrity' as const
const headerDict: { [key: string]: string } = {
	// 'Content-Type': 'application/json',
	// 'Accept': 'application/json',
	// 'Access-Control-Allow-Headers': 'Content-Type',
	// 'X-Origin-Integrity': ''
};

const channelIcons = { // Todo: find a way to get these dynamically
	8: "https://yt3.googleusercontent.com/ytc/AIdro_nMgWqMfXY78nUTzabB0TvSF1OHeUtMc93WKpG2hnbRW3k=s176-c-k-c0x00ffffff-no-rj", // @FragPietSmiet
	9: "https://yt3.googleusercontent.com/qR-4gEbPO0XQlSEwHNgNt7EG5dB_sjQ5WVExWhT11D9ItY3G24l8Egw7isWZhcsUGYcfjaT4tg=s176-c-k-c0x00ffffff-no-rj", // @pietsmiet
	10: "https://yt3.googleusercontent.com/ytc/AIdro_nI1TZILbTDn38tNbzDb_K2rxe6c5V7UGn4hVjG2DX4jg=s176-c-k-c0x00ffffff-no-rj", // @PietSmietTV
	12: "https://yt3.googleusercontent.com/ytc/AIdro_kej_tg4mojF1qht3fNepeKyR10sAlVK4oBwUYL2hAeSg=s176-c-k-c0x00ffffff-no-rj", // @PietSmietBest
	37: URL_ICON_PNG, // @pietsmietde
	44: "https://yt3.googleusercontent.com/ytc/AIdro_nnAWki_jzSkHEzvkkT7TDlb-WxDBIc-rcqhFoEsp0tMg=s176-c-k-c0x00ffffff-no-rj" // @pietsmietlive
} as const;

const fallbackThumbnails = new Thumbnails([new Thumbnail(URL_PLACEHOLDER_THUMBNAIL, 713)]);

function has_channel_icon(channelId: number): channelId is keyof typeof channelIcons {
	return Object.keys(channelIcons).includes(channelId.toString())
}

let local_state: State

let local_settings: Settings

let yt: Youtube
let errorLog = "";
const logErrors = false;
//#endregion

//#region source methods
const local_source: PietsmietDESource = {
	enable,
	disable,
	saveState,
	getHome,
	isContentDetailsUrl,
	getContentDetails,
	isChannelUrl,
	getChannel,
	search,
	getSearchCapabilities,
	getSearchChannelContentsCapabilities,
	isPlaylistUrl,
	getPlaylist,
	getComments
}
init_source(local_source)
function init_source<
	T extends { readonly [key: string]: string },
	S extends string,
	ChannelTypes extends FeedType,
	SearchTypes extends FeedType,
	ChannelSearchTypes extends FeedType
>(local_source: Source<T, S, ChannelTypes, SearchTypes, ChannelSearchTypes, Settings>) {
	for (const method_key of Object.keys(local_source)) {
		// @ts-expect-error assign to readonly constant source object
		source[method_key] = local_source[method_key]
	}
}
//#endregion

//#region utils
class Utils {
	error = function (message: string, error: string | null | unknown, _throw = false) {
		utils.log(`${message}: ${error} (${JSON.stringify(error)})`, true); // const fmt = 
		if (_throw) {
			// const log = errorLog; errorLog = "";
			// throw new ScriptException(`${fmt}\n\n${log}`);
		}
	}
	log = function (message: string, toast = false) {
		message = JSON.stringify(message);
		const formattedMessage = `[${new Date().toISOString()}] [${PLATFORM_SHORT}] ${message}`;
		log(formattedMessage);
		// console.log(formattedMessage);
		// bridge.log(formattedMessage);
		if (toast) bridge.toast(message);
		try {
			if (logErrors) errorLog += `${errorLog}\n${message}`
		} catch (error) {
			console.log(error)
		}
		return formattedMessage;
	}
	debug = function (obj: unknown) {
		utils.log(`Debug: ${JSON.stringify(obj)}`); // bridge.throwTest()
	}
	prepend = function <T>(array: T[], value: T) {
		const newArray = array.slice();
		newArray.unshift(value);
		return newArray;
	}
	isNullOrEmpty = function (str: string | null | undefined | unknown) {
		return str === null || str === "" || str === undefined
	}
	isObjectEmpty(obj: object) {
		return obj !== null && Object.keys(obj).length === 0;
	}
	atob = function (encodedData: string) {
		return String.fromCharCode(...utility.fromBase64(encodedData));
	}
	updateQueryStringParameter = function (url: string, key: string, value: string) {
		let queryString = '';
		if (url.indexOf('?') !== -1) {
			const urlParts = url.split('?');
			// const base = urlParts[0];
			const queryParams = urlParts[1];
			if (queryParams === undefined) {
				throw new ScriptException("missing query params")
			}
			const paramsArray = queryParams.split('&');
			let paramNameIndex = -1;
			for (let i = 0; i < paramsArray.length; i++) {
				const param = paramsArray[i]
				if (param === undefined) {
					throw new ScriptException("unreachable")
				}
				const [name] = param.split('=');
				if (name === key) {
					paramNameIndex = i;
					break;
				}
			}
			if (paramNameIndex > -1) {
				paramsArray[paramNameIndex] = `${key}=${value}`;
			} else {
				paramsArray.push(`${key}=${value}`);
			}
			queryString = paramsArray.join('&');
		} else {
			queryString = `?${key}=${value}`;
		}
		return `${url}${queryString}`;
	}
	getLastPart(inputString: string, seperator = '/') {
		if (!inputString) return '';
		const parts = inputString.split(seperator);
		return parts[parts.length - 1];
	}
	clone = function (obj: unknown) {
		return JSON.parse(JSON.stringify(obj));
		/*
		// Handle the 3 simple types, and null or undefined
		if (null == obj || "object" != typeof obj) return obj;

		// Handle Date
		if (obj instanceof Date) {
			var copy = new Date();
			copy.setTime(obj.getTime());
			return copy;
		}

		// Handle Array
		if (obj instanceof Array) {
			var copy = [];
			for (var i = 0, len = obj.length; i < len; i++) {
				copy[i] = this.clone(obj[i]);
			}
			return copy;
		}

		// Handle Object
		if (obj instanceof Object) {
			var copy = {};
			for (var attr in obj) {
				if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
			}
			return copy;
		}

		throw new Error("Unable to copy obj! Its type isn't supported.");
		*/
	}
	get = function (url_s: string[] | string, headers = {}, name: "YTProxy" | typeof PLATFORM_SHORT | null = null) {
		url_s = Array.isArray(url_s) ? url_s : [url_s];
		name = name ?? PLATFORM_SHORT;
		log(name)
		for (const url of url_s) {
			let response;
			try {
				utils.log(`GET ${url}`);
				response = http.GET(url, headers, false);
				if (!response.isOk) {
					utils.error(`Failed to get ${url} [${response.code}]`, null, true);
				}
				return response;
			} catch (error) {
				utils.error(`Error fetching video info: ${url}: (${response})`, error, true);
			}
		}
		utils.error(`${url_s.length} URLs failed to fetch`, null, true);
		// throw new ScriptException("unreachable")
		return null;
	}
	getJson(this: Utils, url_s: string | string[], headers: HTTPHeaders = {}, name: "YTProxy" | null = null) {
		const new_headers = { ...headers, Accept: "application/json" }
		const response = this.get(url_s, new_headers, name);
		if (!response) throw new Error("[getJson] response was empty");
		return JSON.parse(response.body);
	}
}
const utils = new Utils();


//   ytInfo.getVideoInfo(videoId)
// 	.then(data => {
// 	  utils.log(`Video Info: ${data}`);
// 	})
// 	.catch(error => {
// 	  utils.log(`Failed to fetch video info: ${JSON.stringify(error)}`);
// 	});

function hasIntegrity() {
	return headerDict[HEADER_INTEGRITY] !== undefined && !utils.isNullOrEmpty(headerDict[HEADER_INTEGRITY])
}
//#endregion

//#region parsing
function getPlatformId(id: string) {
	return new PlatformID(PLATFORM, id.toString(), plugin.config.id);
}
function parseChannelSlug(url: string) {
	const matches = REGEX_CHANNEL_URL.exec(url);
	return matches?.[1]
}
function parsePlaylistSlug(url: string) {
	const matches = REGEX_PLAYLIST_URL.exec(url);
	return matches?.[1];
}
function parseVideoSlug(url: string) {
	const matches = REGEX_VIDEO_URL.exec(url);
	return matches?.[1];
}
function parseIdFromSlug(slug: string) {
	return parseInt(slug.split("-", 1)[0] ?? "");
}
function parseThumbnailVariations(variationsDict: { readonly url: string, readonly height: number }[]) {
	return variationsDict ? new Thumbnails(variationsDict.map(y => new Thumbnail(y.url, y.height))) : fallbackThumbnails;
}
function parseAuthor(videoDict: {
	readonly channels: {
		readonly url_slug: string
		readonly id: number
		readonly title: string
	}[]
}) {
	const channel = videoDict.channels[0];
	if (channel === undefined) {
		throw new ScriptException("missing channel")
	}
	const url = URL_CHANNEL + channel.url_slug;
	const cachedChannel = getChannel(url)
	return new PlatformAuthorLink(
		getPlatformId(channel.id.toString()),
		channel.title,
		url,
		has_channel_icon(channel.id) ? channelIcons[channel.id] : "", // todo: improve
		cachedChannel.subscribers
	);
}
function parseDate(date: string): number {
	return (new Date(date)).getTime() / 1000
}
//#endregion

//#region placeholders
function getPlaceholderAuthor() {
	return new PlatformAuthorLink(
		new PlatformID(PLATFORM, "", plugin.config.id),
		PLATFORM,
		URL_BASE,
		channelIcons[37] // todo: improve
	);
}
function getPlaceholderChannel(url = "", id = 0) {
	return new PlatformChannel({
		id: getPlatformId(id.toString()),
		name: PLATFORM,
		thumbnail: URL_ICON_PNG,
		banner: URL_BANNER_PNG,
		subscribers: -1,
		description: "Placeholder Channel",
		url: url,
		links: {}
	});
}
//#endregion

//#region api
function getProtected(url_s: string) {
	if (!hasIntegrity()) {
		fetchIntegrityValue();
	}
	const response = utils.get(url_s, headerDict);
	if (!response) throw new Error("[getProtected] response was empty");
	if (!response.isOk) {
		utils.error(`Failed to get ${url_s} [${response.code}]`, null, true);
		if (response.code === 400) fetchIntegrityValue();
	}
	return response.body;
}
function getProtectedJson(url_s: string | string[]) {
	return utils.getJson(url_s, headerDict);
}
function fetchIntegrityValue() {
	const confResponse = utils.get(URL_API_CONFIG, {}); // headerDict
	if (!confResponse) throw new Error("[fetchIntegrityValue] confResponse was empty");
	if (!confResponse.isOk)
		utils.error(`Failed to get integrity value from ${URL_API_CONFIG} [${confResponse.code}]`, null, true);
	const results = JSON.parse(confResponse.body);
	headerDict[utils.atob(results.h)] = utils.atob(results.v);
}
function fetchChannels() {
	//TODO
	log(getProtectedJson(URL_API_CHANNELS))
}
//#endregion

//#region home
function enable(config: SourceConfig, settings: Settings, saved_state?: string | null) {
	if (IS_TESTING) {
		log("IS_TESTING true")
		log("logging configuration")
		log(config)
		log("logging settings")
		log(settings)
		log("logging savedState")
		log(saved_state)
	}
	local_settings = settings
	if (saved_state !== null && saved_state !== undefined) {
		const state: State = JSON.parse(saved_state)
		local_state = state
	} else {
		local_state = {
			cachedChannels: {}
		}
	}
	fetchIntegrityValue();
	fetchChannels();
	yt = new Youtube();
	let msg = `plugin enabled | ${HEADER_INTEGRITY}=${headerDict[HEADER_INTEGRITY]} | ${Object.keys(local_state.cachedChannels).length} channels | ${Object.keys(channelIcons).length} icons`;
	msg = utils.log(msg);
	// return info;
	return msg;
}
function disable() {
	utils.log(`plugin disabled`)
}

function saveState() {
	return JSON.stringify(local_state)
}

function getHome() {
	return new ContentPager(getVideoResults(1), true);
};

class HomePager extends VideoPager {
	private page: number;
	constructor(results: PlatformVideo[], has_more: boolean) {
		super(results, has_more);
		this.page = 0;
	}

	override nextPage(this: HomePager) {
		this.page++;
		this.results = getVideoResults(this.page);
		this.hasMore = true;
		return this;
	}
}
function getVideoResults(page: number, playlists: number[] = []) {
	let url = URL_API_HOME + page;
	if (playlists.length > 0) {
		url += "&playlists[]=" + playlists.join(",");
	}
	const results: HomeResponse = getProtectedJson(url);
	return results.data.map(x => {
		// console.log(x);
		return new PlatformVideo({
			id: getPlatformId(x.id),
			name: x.title,
			thumbnails: parseThumbnailVariations(x.thumbnail?.variations),
			author: parseAuthor(x),
			datetime: parseDate(x.publish_date),
			duration: x.duration,
			// viewCount: 0, // todo: fix
			url: URL_BASE + x.url,
			shareUrl: x.short_url,
			isLive: false
		})
	})
}

function getSearchCapabilities() {
	return new ResultCapabilities<string, SearchTypes>(
		[Type.Feed.Videos],
		[Type.Order.Chronological],
		[]
	)
};
function search(query: string, type: SearchTypes | null, order: Order | null, filters: FilterQuery<string> | null) {
	log([query, type, order, filters])

	return new ContentPager([], false)
};
function getSearchChannelContentsCapabilities() {
	return new ResultCapabilities<string, ChannelContentsTypeCapabilities>(
		[Type.Feed.Videos],
		[Type.Order.Chronological],
		[]
	)
};
//#endregion

//#region channel
function isChannelUrl(url: string) {
	return REGEX_CHANNEL_URL.test(url);
};
function getChannel(url: string): PlatformChannel {
	const channelSlug = parseChannelSlug(url);
	if (channelSlug === undefined) {
		throw new ScriptException("invalid channel url")
	}
	const channelId = parseIdFromSlug(channelSlug);
	const channelResponse = local_state.cachedChannels[channelId]
	if (channelResponse === undefined) {
		return getPlaceholderChannel(url, channelId);
	}

	return new PlatformChannel({
		id: getPlatformId(channelId.toString()),
		name: channelResponse.title ?? "",
		thumbnail: has_channel_icon(channelId) ? channelIcons[channelId] : "",
		banner: channelResponse.first_video?.thumbnail.variations[0]?.url ?? "",
		subscribers: channelResponse.followings_count,
		description: channelResponse.description ?? channelResponse.title ?? "",
		url: url,
		links: {}
	});
};
//#endregion

//#region playlist
function getPlaylistDetailsFromId(id: string) {
	const url = URL_API_PLAYLIST + id;
	return getProtectedJson(url).playlist;
}
function isPlaylistUrl(url: string) {
	return REGEX_PLAYLIST_URL.test(url);
}
function getPlaylist(url: string) {
	const slug = parsePlaylistSlug(url);
	if (!slug) throw new ScriptException("invalid playlist url");
	const id = parseIdFromSlug(slug);
	const playlistDetails = getPlaylistDetailsFromId(id.toString());
	const playlistVideos = getVideoResults(1, [id]);
	const platformPlaylistId = getPlatformId(playlistDetails.id);
	const firstVideoAuthor = playlistVideos[0]?.author;
	return new PlatformPlaylistDetails({
		url: url,
		id: platformPlaylistId,
		author: firstVideoAuthor !== undefined ? firstVideoAuthor : getPlaceholderAuthor()/*new PlatformAuthorLink(
			platformPlaylistId,
			PLATFORM,
			URL_BASE,
			channelIcons[37] // todo: improve
		)*/,
		name: playlistDetails.title,
		// thumbnail: thumbnail,
		videoCount: playlistDetails.videos_count,
		contents: new VideoPager(playlistVideos, false)
	});
}
//#endregion

//#region content
function isContentDetailsUrl(url: string) {
	return REGEX_VIDEO_URL.test(url);
};
function getContentDetails(url: string) {
	const video_id = parseVideoSlug(url);
	if (video_id === undefined) {
		throw new ScriptException("failed to calculate video id")
	}
	const detailResults: VideoResponse = getProtectedJson(URL_API_VIDEO_DETAILS + video_id);
	const streamsResults: StreamResponse = getProtectedJson(URL_API_VIDEO_PLAYER + video_id);
	const sourceVideos: IVideoSource[] = [];
	streamsResults.options.tracks.forEach(e => {
		const hlssource = e.sources.hls;
		if (hlssource !== null && !utils.isNullOrEmpty(hlssource.src)) {
			sourceVideos.push(new HLSSource({
				language: STREAM_LANGUAGE,
				name: `${e.full_title} (HLS)`,
				duration: detailResults.video.duration ?? -1,
				priority: e.main ?? false,
				url: hlssource.src,
			}));
		}
		const dashsource = e.sources.dash;
		if (dashsource !== null && !utils.isNullOrEmpty(dashsource.src)) {
			sourceVideos.push(new DashSource({
				language: STREAM_LANGUAGE,
				name: `${e.full_title} (Dash)`,
				duration: detailResults.video.duration ?? -1,
				url: dashsource.src,
			}));
		}
		const mp4source = e.sources.mp4;
		if (mp4source !== null && !utils.isNullOrEmpty(mp4source.src)) {
			sourceVideos.push(new VideoUrlSource({
				name: `${e.full_title} (mp4)`,
				duration: detailResults.video.duration ?? -1,
				url: mp4source.src,
				container: mp4source.type ?? "video/mp4",
				width: 0,
				height: 0,
				codec: "",
				bitrate: 0
			}));
		}
	});
	const likeCount = detailResults.video.likes_count;
	const pvd = {
		id: getPlatformId(detailResults.video.id), // streamsResults.tracks[0]
		name: detailResults.video.title,
		thumbnails: parseThumbnailVariations(detailResults.video.thumbnail?.variations),
		author: parseAuthor(detailResults.video),
		datetime: parseDate(detailResults.video.publish_date),
		duration: detailResults.video.duration,
		// viewCount: detailResults.video.likes_count,
		url: url,
		shareUrl: detailResults.video.short_url,
		isLive: false,
		description: detailResults.video.description, //  + `<br/><br/>${url}?ref=grayjay`
		video: new VideoSourceDescriptor(sourceVideos), //See sources
		rating: new RatingLikes(likeCount) as IRating,
		subtitles: [] as ISubtitleSource[],
		viewCount: 0
	}
	// PSProxy
	log(`Using YT Proxy: ${local_settings.use_yt_proxy}`);
	if (local_settings.use_yt_proxy ?? true) {
		try {
			const ytdata = yt.get(video_id)
			if (!ytdata) { utils.error(`Unable to fetch Youtube data for ${video_id}`, null, false); return new PlatformVideoDetails(pvd); }
			const yt_data = ytdata["youtube-data"].items[0];
			if (!yt_data) throw new ScriptException("[getContentDetails] no youtube data");
			const yt_dislikes = ytdata["youtube-dislike"];
			const yt_video_id = yt_data.id;
			const yt_viewCount = parseInt(yt_data.statistics.viewCount);
			const yt_likeCount = parseInt(yt_data.statistics.likeCount);
			const yt_dislikeCount = yt_dislikes.dislikes;
			const yt_commentCount = parseInt(yt_data.statistics.commentCount);

			const yt_subtitles = ytdata["youtube-transcripts"];
			if (yt_subtitles) {
				for (const [name, transcript] of Object.entries(yt_subtitles)) {
					const transcript_url = transcript.url + "&format=vtt"
					pvd.subtitles.push({
						name: transcript.is_generated && !transcript.is_translatable ? name + " (auto-translated)" : name,
						url: transcript_url,
						format: "text/vtt",
						getSubtitles() {
							try { return utils.get(transcript_url)?.body ?? ""; }
							catch (error) {
								if (error instanceof Error) {
									utils.error(`Failed to download subtitles from ${transcript_url}: ${error?.message}`, error, false);
								}
								return "";
							}
						},
					});
				}

			}

			if (local_settings.merge_yt_metrics) {
				if (yt_dislikes === null) {
					pvd.rating = new RatingLikes(likeCount + yt_likeCount)
				} else {
					pvd.rating = new RatingLikesDislikes(likeCount + yt_likeCount, yt_dislikeCount)
				}
				pvd.viewCount = yt_viewCount
			}
			pvd["description"] =
				`${detailResults.video.short_url}?ref=grayjay (Likes: ${detailResults.video.likes_count} Comments: ${detailResults.video.comments_count})<br/>` +
				`https://youtu.be/${yt_video_id}?ref=grayjay (Views: ${yt_viewCount} Likes: ${yt_likeCount} Dislikes: ${yt_dislikeCount} Comments: ${yt_commentCount})<br/><br/>`
				+ pvd["description"];
		} catch (error) {
			utils.error(`Unable to fetch Youtube data for ${video_id}: ${error}`, error, false);
		}
	}
	return new PlatformVideoDetails(pvd);
};
//#endregion

//#region comments
function getComments(url: string) {
	// const video_id = parseVideoId(url);
	return getCommentResults(url, 1); // new CommentPager([], false);
};
class PietsmietDECommentPager extends CommentPager<CommentContext> {
	private page: number
	constructor(results: PlatformComment<CommentContext>[], has_more: boolean, private readonly contextUrl: string) {
		super(results, has_more);
		this.hasMore = has_more;
		this.page = 0
	}
	override nextPage(this: PietsmietDECommentPager): PietsmietDECommentPager {
		if (!this.hasMore)
			return new PietsmietDECommentPager([], false, this.contextUrl);
		this.page++;
		return getCommentResults(this.contextUrl, this.page) ?? new CommentPager([], false);
	}
}
function getCommentResults(contextUrl: string, page: number) {
	const video_id = parseVideoSlug(contextUrl);
	const results: CommentResponse = getProtectedJson(`${URL_API_COMMENTS}${video_id}&page=${page}`);
	const comments = results.data?.map(i => {
		const c = new PlatformComment({
			contextUrl: contextUrl,
			author: new PlatformAuthorLink(getPlatformId(i.id),
				i.user.name ?? "",
				URL_PROFILE + i.user.url_slug,
				i.user.avatar?.variations[0]?.url ?? URL_PLACEHOLDER_AVATAR),
			message: i.text ?? "",
			date: Date.parse(i.created_at) / 1000, // parseDate(i.created_at), // 
			replyCount: i.count_replies,
			rating: new RatingLikesDislikes(i.likes_count, i.dislikes_count),
			context: { commentId: i.id }
		});
		return c;
	}) ?? [];
	const hasMore = results.meta.current_page < results.meta.last_page;
	return new PietsmietDECommentPager(comments, hasMore, contextUrl);
}
//#endregion

//#region youtube
class Youtube {
	headers = {
		'X-Powered-By': 'GrayJay',
		'X-GrayJay-Source': PLATFORM_SHORT
	};

	get(this: Youtube, video_id: string) {
		try {
			const prefered_server_index = local_settings.yt_proxy_server ?? 0;
			const prefered_server = PSPROXY_SERVERS[prefered_server_index];
			// const urls = this.urls.map((item) => item += "?videoId=" + video_id) ;// => utils.format(item, video_id));
			const url = `${prefered_server}?videoId=${video_id}`;
			utils.log(url, true);
			const response: YoutubeResponse = utils.getJson(url, this.headers, "YTProxy");
			return response || null;
		} catch (error) {
			if (error instanceof Error) {
				utils.error(`[Youtube] ${video_id}: ${error?.message}`, error)
			}
			// throw error;
			return null;
		}
	}
}
//#endregion

//#region utilities
/**
 * Converts seconds to the timestamp format used in WebVTT
 * @param seconds 
 * @returns 
 */
function milliseconds_to_WebVTT_timestamp(milliseconds: number) {
	return new Date(milliseconds).toISOString().substring(11, 23)
}
//#endregion

console.log(milliseconds_to_WebVTT_timestamp, URL_API_PLAYLISTS, URL_API_SEARCH, URL_ICON, URL_BANNER, getProtected, HomePager)
// export statements are removed during build step
// used for unit testing in VimeoScript.test.ts
export { milliseconds_to_WebVTT_timestamp }
