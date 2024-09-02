const PLATFORM: string = "PietsmietDE";
const PLATFORM_SHORT: string = "PSDE";

const LIMIT_VIDEOS: number = 500;
const LIMIT_COMMENTS: number = 100;
const ORDER_VIDEOS: string = "latest";
const ORDER_COMMENTS: string = "latest"; 
const STREAM_LANGUAGE: string = "German";

const URL_BASE: string = "https://www.pietsmiet.de";
const URL_CHANNEL: string = `${URL_BASE}/videos/channels/`;
const URL_PROFILE: string = `${URL_BASE}/profile/`;

const URL_API_CONFIG: string = `${URL_BASE}/api/v1/config/i`;
const URL_API_CHANNELS: string = `${URL_BASE}/api/v1/videos/channels?page=`; 
const URL_API_HOME: string = `${URL_BASE}/api/v1/videos?limit=${LIMIT_VIDEOS}&order=${ORDER_VIDEOS}&prioritize_featured=0&page=`; 
const URL_API_PLAYLIST: string = `${URL_BASE}/api/v1/videos/playlists/`;
const URL_API_PLAYLISTS: string = `${URL_BASE}/api/v1/videos/playlists?limit=${LIMIT_VIDEOS}&order=${ORDER_VIDEOS}&page=1`;
const URL_API_VIDEO_DETAILS: string = `${URL_BASE}/api/v1/videos/`; 
const URL_API_VIDEO_PLAYER: string = `${URL_BASE}/api/v1/utility/player?preset=quality&video=`;
const URL_API_COMMENTS: string = `${URL_BASE}/api/v1/utility/comments?order=${ORDER_COMMENTS}&type=video&limit=${LIMIT_COMMENTS}&id=`; 
const URL_API_SEARCH: string = `${URL_BASE}/api/v1/search?page=`; 

const URL_ICON: string = `${URL_BASE}/assets/pietsmiet/brand/icon.svg`;
const URL_ICON_PNG: string = "https://i.vgy.me/CZ2jjB.png"; 
const URL_BANNER: string = `${URL_BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`;
const URL_BANNER_PNG: string = "https://i.imgur.com/8D68cRq.png"; 
const URL_PLACEHOLDER_AVATAR: string = `${URL_BASE}/assets/pietsmiet/placeholder-1-1.jpg`;

const REGEX_VIDEO_URL: RegExp = /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/; 
const REGEX_CHANNEL_URL: RegExp = /https:\/\/www\.pietsmiet\.de\/videos\/channels\/(.*)/;
const REGEX_PLAYLIST_URL: RegExp = /https:\/\/www\.pietsmiet\.de\/videos\/playlists\/(.*)/;

const PSPROXY_SERVERS: string[] = [
	"https://ytapi.minopia.de/",
	"https://ytapi2.minopia.de/"
];

const HEADER_INTEGRITY: string = 'X-Origin-Integrity';
let headerDict: { [key: string]: string } = {};

const channelIcons: { [key: number]: string } = {
	8: "https://yt3.googleusercontent.com/ytc/AIdro_nMgWqMfXY78nUTzabB0TvSF1OHeUtMc93WKpG2hnbRW3k=s176-c-k-c0x00ffffff-no-rj", 
	9: "https://yt3.googleusercontent.com/qR-4gEbPO0XQlSEwHNgNt7EG5dB_sjQ5WVExWhT11D9ItY3G24l8Egw7isWZhcsUGYcfjaT4tg=s176-c-k-c0x00ffffff-no-rj", 
	10: "https://yt3.googleusercontent.com/ytc/AIdro_nI1TZILbTDn38tNbzDb_K2rxe6c5V7UGn4hVjG2DX4jg=s176-c-k-c0x00ffffff-no-rj", 
	12: "https://yt3.googleusercontent.com/ytc/AIdro_kej_tg4mojF1qht3fNepeKyR10sAlVK4oBwUYL2hAeSg=s176-c-k-c0x00ffffff-no-rj", 
	37: URL_ICON_PNG, 
	44: "https://yt3.googleusercontent.com/ytc/AIdro_nnAWki_jzSkHEzvkkT7TDlb-WxDBIc-rcqhFoEsp0tMg=s176-c-k-c0x00ffffff-no-rj" 
};

let cachedChannels: { [key: string]: any } = {};

let config: { [key: string]: boolean | number } = {
	"use_yt_proxy": true,
	"yt_proxy_server": 0,
	"merge_yt_metrics": true
};

let _settings: { [key: string]: boolean | number } = {
	"use_yt_proxy": true,
	"yt_proxy_server": 0,
	"merge_yt_metrics": true
};

let yt: any;
let errorLog: string = "";
const logErrors: boolean = true;

class Utils {
	error = (message: string, error: any, _throw: boolean = false): void => {
		const fmt: string = utils.log(`${message}: ${error} (${JSON.stringify(error)})`, true);
		if (_throw) {
			const log: string = errorLog; errorLog = "";
			throw new ScriptException(`${fmt}\n\n${log}`);
		}
	}

	log = (message: any, toast: boolean = false): string => {
		message = JSON.stringify(message);
		const formattedMessage: string = `[${new Date().toISOString()}] [${PLATFORM_SHORT}] ${message}`;
		log(formattedMessage);
		if (toast) bridge.toast(message);
		try {
			if (logErrors) errorLog += `${errorLog}\n${message}`;
		} catch (error) { }
		return formattedMessage;
	}

	debug = (obj: any): void => {
		bridge.throwTest((utils.log(`Debug: ${JSON.stringify(obj)}`)));
	}

	getItemsByProp = (dict: { [key: string]: any }, prop: string, value: any): any[] => {
		let foundObjects: any[] = [];
		for (let key in dict) {
			if (dict[key][prop] === value) {
				foundObjects.push(dict[key]);
			}
		}
		return foundObjects;
	}

	getItemByProp = (dict: { [key: string]: any }, prop: string, value: any, defaultValue: any = null): any => {
		try {
			const items: any[] = this.getItemsByProp(dict, prop, value);
			return items.length > 0 ? items[0] : defaultValue;
		} catch (error) {
			return defaultValue;
		}
	}

	prepend = (array: any[], value: any): any[] => {
		const newArray: any[] = array.slice();
		newArray.unshift(value);
		return newArray;
	}

	isNullOrEmpty = (str: string | null): boolean => {
		return str === null || str === "";
	}

	isObjectEmpty = (obj: object): boolean => {
		return obj !== null && Object.keys(obj).length === 0;
	}

	atob = (encodedData: string): string => {
		return String.fromCharCode(...utility.fromBase64(encodedData));
	}

	updateQueryStringParameter = (url: string, key: string, value: string): string => {
		let queryString: string = '';
		if (url.indexOf('?') !== -1) {
			const urlParts: string[] = url.split('?');
			const queryParams: string = urlParts[1];
			const paramsArray: string[] = queryParams.split('&');
			let paramNameIndex: number = -1;
			for (let i = 0; i < paramsArray.length; i++) {
				const [name, _] = paramsArray[i].split('=');
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

	getLastPart = (inputString: string, separator: string = '/'): string => {
		if (!inputString) return '';
		const parts: string[] = inputString.split(separator);
		return parts[parts.length - 1];
	}

	format = (input: string, ...args: any[]): string => {
		return input.replace(/(\{\d+\})/g, function (a) {
			return args[+(a.substr(1, a.length - 2)) || 0];
		});
	}

	clone = (obj: any): any => {
		return JSON.parse(JSON.stringify(obj));
	}

	get = (url_s: string | string[], headers: { [key: string]: string } = {}, name: string | null = null): any => {
		url_s = Array.isArray(url_s) ? url_s : [url_s];
		name = name ?? PLATFORM_SHORT;
		for (let url of url_s) {
			try {
				utils.log(`GET ${url}`);
				const response: any = http.GET(url, headers);
				if (!response.isOk) {
					utils.error(`Failed to get ${url} [${response.code}]`, null, true);
				}
				return response;
			} catch (error) {
				utils.error(`Error fetching video info: ${url}:`, error, true);
			}
		}
		utils.error(`${url_s.length} URLs failed to fetch`, null, true);
	}

	getJson = (url_s: string | string[], headers: { [key: string]: string } = {}, name: string | null = null): any => {
		headers["Accept"] = "application/json";
		const response: any = this.get(url_s, headers, name);
		return JSON.parse(response.body);
	}
}

const utils: Utils = new Utils();

function hasIntegrity(): boolean {
	return headerDict.hasOwnProperty(HEADER_INTEGRITY) && !utils.isNullOrEmpty(headerDict[HEADER_INTEGRITY]);
}

function getPlatformId(id: number): PlatformID {
	return new PlatformID(PLATFORM, id.toString(), config.id);
}

function parseChannelSlug(url: string): string {
	const matches: RegExpExecArray | null = REGEX_CHANNEL_URL.exec(url);
	return matches ? matches[1] : '';
}

function parsePlaylistSlug(url: string): string {
	const matches: RegExpExecArray | null = REGEX_PLAYLIST_URL.exec(url);
	return matches ? matches[1] : '';
}

function parseVideoSlug(url: string): string {
	const matches: RegExpExecArray | null = REGEX_VIDEO_URL.exec(url);
	return matches ? matches[1] : '';
}

function parseIdFromSlug(slug: string): number {
	return parseInt(slug.split("-", 1)[0]);
}

function parseThumbnailVariations(variationsDict: any[]): Thumbnails {
	return new Thumbnails(variationsDict.map(y => new Thumbnail(y.url, y.height)));
}

function parseAuthor(videoDict: any): PlatformAuthorLink {
	const channel = videoDict.channels[0];
	const url = URL_CHANNEL + channel.url_slug;
	const cachedChannel = source.getChannel(url);
	return new PlatformAuthorLink(
		getPlatformId(channel.id),
		channel.title,
		url,
		channelIcons[channel.id], 
		cachedChannel.subscribers
	);
}

function parseDate(date: string): number {
	return parseInt((new Date(date)).getTime() / 1000);
}

function getPlaceholderAuthor(): PlatformAuthorLink {
	return new PlatformAuthorLink(
		platformPlaylistId,
		PLATFORM,
		URL_BASE,
		channelIcons[37] 
	);
}

function getPlaceholderChannel(url: string = "", id: number = 0): PlatformChannel {
	return new PlatformChannel({
		id: getPlatformId(0),
		name: PLATFORM,
		thumbnail: URL_ICON_PNG,
		banner: URL_BANNER_PNG,
		subscribers: -1,
		description: "Placeholder Channel",
		url: url,
		links: {}
	});
}

function getProtected(url_s: string | string[]): any {
	if (!hasIntegrity()) {
		fetchIntegrityValue();
	}
	const response: any = utils.get(url_s, headerDict);
	if (!response.isOk) {
		utils.error(`Failed to get ${url_s} [${response.code}]`, null, true);
		if (response.status === 400) fetchIntegrityValue();
	}
	return response.body;
}

function getProtectedJson(url_s: string | string[]): any {
	return utils.getJson(url_s, headerDict);
}

function fetchIntegrityValue(): void {
	const confResponse: any = utils.get(URL_API_CONFIG, {});
	if (!confResponse.isOk)
		utils.error(`Failed to get integrity value from ${URL_API_CONFIG} [${confResponse.code}]`, null, true);
	const results: any = JSON.parse(confResponse.body);
	headerDict[utils.atob(results.h)] = utils.atob(results.v);
}

function fetchChannels(): void {
	cachedChannels = getProtectedJson(URL_API_CHANNELS);
}

source.setSettings = function (settings: { [key: string]: boolean | number }): void {
	_settings = (utils.isObjectEmpty(settings)) ? _settings : settings;
}

source.enable = function (conf: { [key: string]: boolean | number }, settings: { [key: string]: boolean | number }, savedState: any): string {
	config = (utils.isObjectEmpty(conf)) ? config : conf;
	_settings = (utils.isObjectEmpty(settings)) ? _settings : settings;
	fetchIntegrityValue();
	fetchChannels();
	yt = new Youtube();
	let msg: string = `plugin enabled | ${HEADER_INTEGRITY}=${headerDict[HEADER_INTEGRITY]} | ${Object.keys(cachedChannels).length} channels | ${Object.keys(channelIcons).length} icons`;
	msg = utils.log(msg);
	return msg;
}

source.disable = function (conf: { [key: string]: boolean | number }, settings: { [key: string]: boolean | number }, savedState: any): string {
	const msg: string = utils.log(`plugin disabled`);
	return msg;
}

source.getHome = function (): ContentPager {
	return new ContentPager(getVideoResults(1), true);
};

class HomePager extends VideoPager {
	page: number;

	constructor(initialResults: any[], hasMore: boolean) {
		super(initialResults, hasMore);
		this.page = 0;
	}

	nextPage(): HomePager {
		this.page++;
		this.results = getVideoResults(this.page);
		this.hasMore = true;
		return this;
	}
}

function getVideoResults(page: number, playlists: number[] = []): PlatformVideo[] {
	let url: string = URL_API_HOME + page;
	if (playlists.length > 0) {
		url += "&playlists[]=" + playlists.join(",");
	}
	const results: any[] = getProtectedJson(url).data;

	return results.map(x => new PlatformVideo({
		id: getPlatformId(x.id),
		name: x.title,
		thumbnails: parseThumbnailVariations(x.thumbnail.variations),
		author: parseAuthor(x),
		datetime: parseDate(x.publish_date),
		duration: x.duration,
		url: URL_BASE + x.url,
		shareUrl: x.short_url,
		isLive: false
	}));
}

source.getSearchCapabilities = (): { types: string[], sorts: string[], filters: any[] } => {
	return {
		types: [Type.Feed.Mixed],
		sorts: [Type.Order.Chronological],
		filters: []
	};
};

source.search = function (query: string, type: string, order: string, filters: any[]): ContentPager {
	return new ContentPager([], false);
};

source.getSearchChannelContentsCapabilities = function (): { types: string[], sorts: string[], filters: any[] } {
	return {
		types: [Type.Feed.Mixed],
		sorts: [Type.Order.Chronological],
		filters: []
	};
};

source.isChannelUrl = function (url: string): boolean {
	return REGEX_CHANNEL_URL.test(url);
};

source.getChannel = function (url: string): PlatformChannel {
	const channelSlug: string = parseChannelSlug(url);
	const channelId: number = parseIdFromSlug(channelSlug);
	const channelResponse: any = utils.getItemByProp(cachedChannels.data, "id", channelId);
	if (!utils.isNullOrEmpty(channelResponse)) {
		return new PlatformChannel({
			id: getPlatformId(channelId),
			name: channelResponse.title ?? "",
			thumbnail: channelIcons[channelId] ?? "",
			banner: channelResponse.first_video?.thumbnail.variations[0].url ?? "",
			subscribers: channelResponse.followings_count,
			description: channelResponse.description ?? channelResponse.title ?? "",
			url: url,
			links: {}
		});
	}
	return getPlaceholderChannel(url, channelId);
};

function getPlaylistDetailsFromId(id: number): any {
	const url: string = URL_API_PLAYLIST + id;
	return getProtectedJson(url).playlist;
}

source.isPlaylistUrl = function (url: string): boolean {
	return REGEX_PLAYLIST_URL.test(url);
}

source.getPlaylist = function (url: string): PlatformPlaylistDetails {
	const slug: string = parsePlaylistSlug(url);
	const id: number = parseIdFromSlug(slug);
	const playlistDetails: any = getPlaylistDetailsFromId(id);
	const playlistVideos: PlatformVideo[] = getVideoResults(1, [id]);
	const platformPlaylistId: PlatformID = getPlatformId(playlistDetails.id);
	const firstVideoAuthor: PlatformAuthorLink = playlistVideos[0].author;
	return new PlatformPlaylistDetails({
		url: url,
		id: platformPlaylistId,
		author: firstVideoAuthor,
		name: playlistDetails.title,
		videoCount: playlistDetails.videos_count,
		contents: new VideoPager(playlistVideos)
	});
}

source.isContentDetailsUrl = function (url: string): boolean {
	return REGEX_VIDEO_URL.test(url);
};

source.getContentDetails = function (url: string): PlatformVideoDetails {
	const video_id: string = parseVideoSlug(url);
	const detailResults: any = getProtectedJson(URL_API_VIDEO_DETAILS + video_id);
	const streamsResults: any = getProtectedJson(URL_API_VIDEO_PLAYER + video_id);
	let sourceVideos: any[] = [];
	streamsResults.options.tracks.forEach(e => {
		const hlssource: any = e.sources.hls;
		if (hlssource !== null && !utils.isNullOrEmpty(hlssource.src)) {
			sourceVideos.push(new HLSSource({
				language: STREAM_LANGUAGE,
				name: `${e.full_title} (HLS)`,
				duration: detailResults.video.duration ?? -1,
				priority: e.main ?? false,
				url: hlssource.src,
				container: hlssource.type ?? "application/x-mpegurl"
			}));
		}
		const dashsource: any = e.sources.dash;
		if (dashsource !== null && !utils.isNullOrEmpty(dashsource.src)) {
			sourceVideos.push(new DashSource({
				language: STREAM_LANGUAGE,
				name: `${e.full_title} (Dash)`,
				duration: detailResults.video.duration ?? -1,
				priority: e.main ?? false,
				url: dashsource.src,
				container: dashsource.type ?? "application/dash+xml"
			}));
		}
		const mp4source: any = e.sources.mp4;
		if (mp4source !== null && !utils.isNullOrEmpty(mp4source.src)) {
			sourceVideos.push(new VideoUrlSource({
				language: STREAM_LANGUAGE,
				name: `${e.full_title} (mp4)`,
				duration: detailResults.video.duration ?? -1,
				priority: e.main ?? false,
				url: mp4source.src,
				container: mp4source.type ?? "video/mp4"
			}));
		}
	});
	let likeCount: number = detailResults.video.likes_count;
	let pvd: any = {
		id: getPlatformId(detailResults.video.id),
		name: detailResults.video.title,
		thumbnails: parseThumbnailVariations(detailResults.video.thumbnail.variations),
		author: parseAuthor(detailResults.video),
		uploadDate: parseDate(detailResults.video.publish_date),
		duration: detailResults.video.duration,
		url: url,
		shareUrl: detailResults.video.short_url,
		isLive: false,
		description: detailResults.video.description,
		video: new VideoSourceDescriptor(sourceVideos),
		live: null,
		rating: new RatingLikes(likeCount),
		subtitles: []
	}

	if (_settings["use_yt_proxy"]) {
		try {
			const ytdata: any = yt.get(video_id);
			if (ytdata === null) { utils.error(`Unable to fetch Youtube data for ${video_id}`, {}, false); return new PlatformVideoDetails(pvd); }
			const yt_data: any = ytdata["youtube-data"]["items"][0];
			const yt_dislikes: any = ytdata["youtube-dislike"];
			const yt_video_id: string = yt_data["id"];
			const yt_viewCount: number = parseInt(yt_data["statistics"]["viewCount"]);
			const yt_likeCount: number = parseInt(yt_data["statistics"]["likeCount"]);
			const yt_dislikeCount: number = yt_dislikes["dislikes"];
			const yt_commentCount: number = parseInt(yt_data["statistics"]["commentCount"]);

			const yt_subtitles: any = ytdata["youtube-transcripts"];
			if (yt_subtitles) {
				for (var [name, transcript] of Object.entries(yt_subtitles)) {
					const transcript_url: string = transcript["url"] + "&format=vtt";
					if (transcript["is_generated"] && !transcript["is_translatable"]) name += " (auto-translated)";
					pvd.subtitles.push({
						name: name,
						url: transcript_url,
						format: 'text/vtt',
						getSubtitles() {
							try { return utils.get(transcript_url)?.body ?? ''; }
							catch (error) {
								utils.error(`Failed to download subtitles from ${transcript_url}: ${error?.message}`, error, false);
								return '';
							}
						},
					});
				}
			}

			if (_settings["merge_yt_metrics"]) {
				if (yt_dislikes === null) {
					pvd["rating"] = new RatingLikes(likeCount + yt_likeCount);
				} else {
					pvd["rating"] = new RatingLikesDislikes(likeCount + yt_likeCount, yt_dislikeCount);
				}
				pvd["viewCount"] = yt_viewCount;
			}
			pvd["description"] =
				`${detailResults.video.short_url}?ref=grayjay (Likes: ${detailResults.video.likes_count} Comments: ${detailResults.video.comments_count})<br/>` +
				`https://youtu.be/${yt_video_id}?ref=grayjay (Views: ${yt_viewCount} Likes: ${yt_likeCount} Dislikes: ${yt_dislikeCount} Comments: ${yt_commentCount})<br/><br/>` +
				pvd["description"];
		} catch (error) {
			utils.error(`Unable to fetch Youtube data for ${video_id}: ${error}`, error, false);
		}
	}
	return new PlatformVideoDetails(pvd);
};

source.getComments = function (url: string): CommentPager {
	return getCommentResults(url, 1);
};

class PietsmietDECommentPager extends CommentPager {
	hasMore: boolean;

	constructor(comments: Comment[], hasMore: boolean, contextUrl: string) {
		super(comments, hasMore != null, contextUrl);
		this.hasMore = hasMore;
	}

	nextPage(): PietsmietDECommentPager {
		if (!this.hasMore)
			return new CommentPager([], false);
		this.page++;
		return getCommentResults(this.contextUrl, this.page) ?? new CommentPager([], false);
	}
}

function getCommentResults(contextUrl: string, page: number): PietsmietDECommentPager {
	const video_id: string = parseVideoSlug(contextUrl);
	const results: any = getProtectedJson(`${URL_API_COMMENTS}${video_id}&page=${page}`);
	const comments: Comment[] = results.data?.map(i => {
		const c: Comment = new Comment({
			contextUrl: contextUrl,
			author: new PlatformAuthorLink(getPlatformId(i.id),
				i.user.name ?? "",
				URL_PROFILE + i.user.url_slug,
				i.user.avatar?.variations[0]?.url ?? URL_PLACEHOLDER_AVATAR),
			message: i.text ?? "",
			date: Date.parse(i.created_at) / 1000,
			replyCount: i.count_replies,
			rating: new RatingLikesDislikes(i.likes_count, i.dislikes_count),
			context: { commentId: i.id }
		});
		return c;
	}) ?? [];
	const hasMore: boolean = results.meta.current_page < results.meta.last_page;
	return new PietsmietDECommentPager(comments, hasMore, contextUrl);
}

class Youtube {
	headers: { [key: string]: string };

	constructor() {
		this.headers = {
			'X-Powered-By': 'GrayJay',
			'X-GrayJay-Source': PLATFORM_SHORT
		};
	}

	get = (video_id: string): any => {
		try {
			const prefered_server_index: number = _settings["yt_proxy_server"] ?? 0;
			const prefered_server: string = PSPROXY_SERVERS[prefered_server_index];
			const url: string = `${prefered_server}?videoId=${video_id}`;
			utils.log(url, true);
			const response: any = utils.getJson(url, this.headers, "YTProxy");
			return response || null;
		} catch (error) {
			utils.error(`[Youtube] ${video_id}: ${error?.message}`, error);
			throw error;
		}
	}
}

log("LOADED");