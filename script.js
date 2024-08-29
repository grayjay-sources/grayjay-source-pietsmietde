const PLATFORM = "PietsmietDE";
const PLATFORM_SHORT = "PSDE"

const LIMIT_VIDEOS = 500;
const LIMIT_COMMENTS = 100;
const ORDER_VIDEOS = "latest";
const ORDER_COMMENTS = "latest"; // popular
const STREAM_LANGUAGE = "German";

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
const URL_ICON_PNG = "https://i.vgy.me/CZ2jjB.png"; // Todo: Find png on their website or implement svg parsing into GrayJay @Kelvin-FUTO
const URL_BANNER = `${URL_BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`;
const URL_BANNER_PNG = "https://i.imgur.com/8D68cRq.png"; // Todo: Find png on their website or implement svg parsing into GrayJay @Kelvin-FUTO
const URL_PLACEHOLDER_AVATAR = `${URL_BASE}/assets/pietsmiet/placeholder-1-1.jpg`

const REGEX_VIDEO_URL = /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/; // /https:\/\/www\.pietsmiet\.de\/videos\/(.*)/;
const REGEX_CHANNEL_URL = /https:\/\/www\.pietsmiet\.de\/videos\/channels\/(.*)/;
const REGEX_PLAYLIST_URL = /https:\/\/www\.pietsmiet\.de\/videos\/playlists\/(.*)/;

const HEADER_INTEGRITY = 'X-Origin-Integrity';
let headerDict = {
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
}

let cachedChannels = {}; // filled in later

var config = {};
var _settings = {
	"use_ps_proxy": true,
	"youtubeDislikes": true,
	"merge_yt_metrics": true
};

let psproxy;
let yt;
let ytdislikes;

// region utils
class Utils {
	error = function(message, error) {
		return utils.log(`${message}: ${JSON.stringify(error)}`, true);
	}
	log = function(message, toast = false) {
		message = JSON.stringify(message);
		const formattedMessage = `[${new Date().toISOString()}] [${PLATFORM_SHORT}] ${message}`;
		log(formattedMessage);
		// console.log(formattedMessage);
		// bridge.log(formattedMessage);
		if (toast) bridge.toast(formattedMessage);
		return formattedMessage;
	}
	debug = function(obj) {
		bridge.throwTest((utils.log(`Debug: ${JSON.stringify(obj)}`)));
	}
// region js
	getItemsByProp = function(dict, prop, value) {
		let foundObjects = [];
		for (let key in dict) {
			if (dict[key][prop] === value) {
				foundObjects.push(dict[key]);
			}
		}
		return foundObjects;
	}
	getItemByProp = function(dict, prop, value, defaultValue = null) {
		try {
			const items = getItemsByProp(dict, prop, value);
			return items.length > 0 ? items[0] : defaultValue;
		} catch (error) {
			return defaultValue;
		}
	}
	isNullOrEmpty = function(str) {
		return str === null || str === "";
	}
	isObjectEmpty(obj) {
		return obj !== null && Object.keys(obj).length === 0;
	  }
	atob = function(encodedData) {
		return String.fromCharCode(...utility.fromBase64(encodedData));
	}
	updateQueryStringParameter = function(url, key, value) {
		let queryString = '';
		if (url.indexOf('?') !== -1) {
			const urlParts = url.split('?');
			// const base = urlParts[0];
			const queryParams = urlParts[1];
			const paramsArray = queryParams.split('&');
			let paramNameIndex = -1;
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
	getLastPart(inputString, seperator = '/') {
		if (!inputString) return '';
		const parts = inputString.split(seperator);
		return parts[parts.length - 1];
	}
// endregion js
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
	return headerDict.hasOwnProperty(HEADER_INTEGRITY) && !utils.isNullOrEmpty(headerDict[HEADER_INTEGRITY])
}
function getPlatformId(id) {
	return new PlatformID(PLATFORM, id.toString(), config.id);
}
// region parsing
function parseChannelSlug(url) {
	const matches = REGEX_CHANNEL_URL.exec(url);
	return matches[1];
}
function parsePlaylistSlug(url) {
	const matches = REGEX_PLAYLIST_URL.exec(url);
	return matches[1];
}
function parseVideoSlug(url) {
	const matches = REGEX_VIDEO_URL.exec(url);
	return matches[1];
}
function parseIdFromSlug(slug) {
	return parseInt(slug.split("-", 1)[0]);
}
function parseThumbnailVariations(variationsDict) {
	return new Thumbnails(variationsDict.map(y => new Thumbnail(y.url, y.height)))
}
function parseAuthor(videoDict) {
	const channel = videoDict.channels[0];
	const url = URL_CHANNEL + channel.url_slug;
	const cachedChannel = source.getChannel(url);
	return new PlatformAuthorLink(
		getPlatformId(channel.id),
		channel.title,
		url,
		channelIcons[channel.id], // todo: improve
		cachedChannel.subscribers
	);
}
function parseDate(date) {
	parseInt((new Date(date)).getTime() / 1000)
}
// endregion parsing
// region placeholders
function getPlaceholderAuthor() {
	return new PlatformAuthorLink(
		platformPlaylistId,
		PLATFORM,
		URL_BASE,
		channelIcons[37] // todo: improve
	);
}
function getPlaceholderChannel(url = "", id = 0) {
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
// endregion placeholders

// endregion utils

// region api
function getProtected(url) {
	if (!hasIntegrity()) {
		fetchIntegrityValue();
	}
	const response = http.GET(url, headerDict);
	if (!response.isOk)
		throw new ScriptException(utils.log(`Failed to get ${url} [${response.code}]`));
	return response.body;
}
function getProtectedJson(url) {
	return JSON.parse(getProtected(url));
}
function fetchIntegrityValue() {
	const confResponse = http.GET(URL_API_CONFIG, {}); // headerDict
	if (!confResponse.isOk)
		throw new ScriptException(utils.log(`Failed to get integrity value from ${URL_API_CONFIG} [${confResponse.code}]`));
	const results = JSON.parse(confResponse.body);
	headerDict[utils.atob(results.h)] = utils.atob(results.v);
}
function fetchChannels() {
	cachedChannels = getProtectedJson(URL_API_CHANNELS);
}
// endregion api

//region Source Methods
source.setSettings = function(settings) {
	_settings = settings ?? _settings;
}

source.enable = function (conf, settings, savedState) {
	 config = (utils.isObjectEmpty(conf)) ? config : conf;
	_settings = (utils.isObjectEmpty(settings)) ? _settings : settings;
	fetchIntegrityValue();
	fetchChannels();
	psproxy = new PSProxy();
	yt = new Youtube();
	ytdislikes = new YoutubeDislikes();
	let msg = `plugin enabled | ${HEADER_INTEGRITY}=${headerDict[HEADER_INTEGRITY]} | ${Object.keys(cachedChannels).length} channels | ${Object.keys(channelIcons).length} icons`;
	msg = utils.log(msg);
	// return info;
	return msg;
}
source.disable = function (conf, settings, savedState) {
	const msg = utils.log(`plugin disabled`);
	return msg;
}

source.getHome = function () {
	return new ContentPager(getVideoResults(1), true);
};
//endregion Source Methods

class HomePager extends VideoPager {
	constructor(initialResults, hasMore) {
		super(initialResults, hasMore);
		this.page = 0;
	}

	nextPage() {
		this.page++;
		this.results = getVideoResults(this.page);
		this.hasMore = true;
		return this;
	}
}
function getVideoResults(page, playlists = []) {
	let url = URL_API_HOME + page;
	if (playlists.length > 0) {
		url += "&playlists[]=" + playlists.join(",");
	}
	const results = getProtectedJson(url).data;

	return results.map(x => new PlatformVideo({
		id: getPlatformId(x.id),
		name: x.title,
		thumbnails: parseThumbnailVariations(x.thumbnail.variations),
		author: parseAuthor(x),
		datetime: parseDate(x.publish_date),
		duration: x.duration,
		// viewCount: 0, // todo: fix
		url: URL_BASE + x.url,
		shareUrl: x.short_url,
		isLive: false
	}))
}

source.getSearchCapabilities = () => {
	return {
		types: [Type.Feed.Mixed],
		sorts: [Type.Order.Chronological],
		filters: []
	};
};
source.search = function (query, type, order, filters) {
	return new ContentPager([].false);
};
source.getSearchChannelContentsCapabilities = function () {
	return {
		types: [Type.Feed.Mixed],
		sorts: [Type.Order.Chronological],
		filters: []
	};
};
//endregion Source Methods

// region Channel
source.isChannelUrl = function (url) {
	return REGEX_CHANNEL_URL.test(url);
};
source.getChannel = function (url) {
	const channelSlug = parseChannelSlug(url);
	const channelId = parseIdFromSlug(channelSlug);
	const channelResponse = utils.getItemByProp(cachedChannels.data, "id", channelId);
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
// endregion Channel
// region Playlist
function getPlaylistDetailsFromId(id) {
	const url = URL_API_PLAYLIST + id;
	return getProtectedJson(url).playlist;
}
source.isPlaylistUrl = function (url) {
	return REGEX_PLAYLIST_URL.test(url);
}
source.getPlaylist = function (url) {
	const slug = parsePlaylistSlug(url);
	const id = parseIdFromSlug(slug);
	const playlistDetails = getPlaylistDetailsFromId(id);
	const playlistVideos = getVideoResults(1, [id]);
	const platformPlaylistId = getPlatformId(playlistDetails.id);
	const firstVideoAuthor = playlistVideos[0].author;
	return new PlatformPlaylistDetails({
		url: url,
		id: platformPlaylistId,
		author: firstVideoAuthor/*new PlatformAuthorLink(
			platformPlaylistId,
			PLATFORM,
			URL_BASE,
			channelIcons[37] // todo: improve
		)*/,
		name: playlistDetails.title,
		// thumbnail: thumbnail,
		videoCount: playlistDetails.videos_count,
		contents: new VideoPager(playlistVideos)
	});
}
// endregion Playlist
// region Video
source.isContentDetailsUrl = function (url) {
	return REGEX_VIDEO_URL.test(url);
};
source.getContentDetails = function (url) {
	const video_id = parseVideoSlug(url);
	const detailResults = getProtectedJson(URL_API_VIDEO_DETAILS + video_id);
	const streamsResults = getProtectedJson(URL_API_VIDEO_PLAYER + video_id);
	let sourceVideos = [];
	streamsResults.options.tracks.forEach(e => {
		const hlssource = e.sources.hls;
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
		const dashsource = e.sources.dash;
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
		const mp4source = e.sources.mp4;
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
	let likeCount = detailResults.video.likes_count;
	let pvd = {
		id: getPlatformId(detailResults.video.id), // streamsResults.tracks[0]
		name: detailResults.video.title,
		thumbnails: parseThumbnailVariations(detailResults.video.thumbnail.variations),
		author: parseAuthor(detailResults.video),
		uploadDate: parseDate(detailResults.video.publish_date),
		duration: detailResults.video.duration,
		// viewCount: detailResults.video.likes_count,
		url: url,
		shareUrl: detailResults.video.short_url,
		isLive: false,
		description: detailResults.video.description, //  + `<br/><br/>${url}?ref=grayjay`
		video: new VideoSourceDescriptor(sourceVideos), //See sources
		live: null,
		rating: new RatingLikes(likeCount),
		subtitles: []
	}
	// PSProxy
	if (_settings["use_ps_proxy"]) {
		// try {
			var res = psproxy.fetchYoutubeUrl(video_id)
			if (res === null) { utils.error(`Unable to fetch PSProxy data for ${video_id}`, error); return new PlatformVideoDetails(pvd); }
			const yt_video_id = utils.getLastPart(res);
			var ytvid = yt.getVideoInfo(yt_video_id);
			if (ytvid === null) { utils.error(`Unable to fetch Youtube data for ${video_id}`, error); return new PlatformVideoDetails(pvd); }
			let yt_dislikeCount;
			const yt_viewCount = parseInt(ytvid["statistics"]["viewCount"]);
			const yt_likeCount = parseInt(ytvid["statistics"]["likeCount"]);
			const yt_commentCount = parseInt(ytvid["statistics"]["commentCount"]);
			if (_settings["youtubeDislikes"]) {
				yt_dislikeCount = ytdislikes.getVideoInfo(yt_video_id);
			}

			if (_settings["merge_yt_metrics"]) {
				if (yt_dislikeCount === null) {
					pvd["rating"] = new RatingLikes(likeCount+yt_likeCount)
				} else {
					pvd["rating"] = new RatingLikesDislikes(likeCount+yt_likeCount, yt_dislikeCount)
				}
				pvd["viewCount"] = yt_viewCount
			}
			pvd["description"] =
				`${url}?ref=grayjay (Likes: ${detailResults.video.likes_count} Comments: ${detailResults.video.comments_count})<br/>`+
				`${res}?ref=grayjay (Views: ${yt_viewCount} Likes: ${yt_likeCount} Dislikes: ${yt_dislikeCount} Comments: ${yt_commentCount})<br/><br/>`
				+ pvd["description"];
		// } catch (error) {
		// 	utils.error(`Unable to fetch PSProxy data for ${video_id}`, error)
		// }
	}
	return new PlatformVideoDetails(pvd);
};
// endregion Video
// region Comments
source.getComments = function (url) {
	// const video_id = parseVideoId(url);
	return getCommentResults(url, 1); // new CommentPager([], false);
};
// source.getSubComments = function (comment) {
// 	throw new ScriptException(utils.log(`This is a sample`);
// };
class PietsmietDECommentPager extends CommentPager {
	constructor(comments, hasMore, contextUrl) {
		super(comments, hasMore != null, contextUrl);
		this.hasMore = hasMore;
	}
	nextPage() {
		if (!this.hasMore)
			return new CommentPager([], false);
		this.page++;
		return getCommentResults(this.contextUrl, this.page) ?? new CommentPager([], false);
	}
}
function getCommentResults(contextUrl, page) {
	const video_id = parseVideoSlug(contextUrl);
	const results = getProtectedJson(`${URL_API_COMMENTS}${video_id}&page=${page}`);
	const comments = results.data?.map(i => {
		const c = new Comment({
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
// endregion Comments

// region PSProxy
class PSProxy {
	headers = {
		'Accept': 'application/json'
	};

	constructor() {}

	get = function(url) {
		try {
			const response = http.GET(url, this.headers);
			if (!response.isOk)
				throw new ScriptException(utils.log(`[PSProxy] Failed to get ${url} [${response.code}]`));
			return response.body;
		} catch (error) {
			utils.error("[PSProxy] Error fetching video info", error);
			throw error;
		}
	}

	getJson = function(url) {
		const response = this.get(url);
		return JSON.parse(response);
	}

	fetchYoutubeUrl = function(input_url) {
		try {
			const url = `https://pietsmiet.zaanposni.com/api/video/${encodeURIComponent(input_url)}`;
			const response = this.getJson(url);
			return response.secondaryHref || null;
		} catch (error) {
			utils.error("[PSProxy] Error fetching video info", error);
			throw error;
		}
	}
}
// endregion PSProxy
//region Youtube
class Youtube {
	apiKey = null;
	headers = {
		'Accept': 'application/json'
	};

	constructor(apiKey = null) {
		this.apiKey = apiKey;
	}

	get(url) {
		try {
			if (this.apiKey !== null) this.headers['Authorization'] = `Bearer ${this.apiKey}`;
			else if (this.headers.hasOwnProperty('Authorization')) delete this.headers['Authorization'];
			const response = http.GET(url, this.headers);
			if (!response.isOk)
				throw new ScriptException(utils.log(`[YT] Failed to get \"${url}\" [${response.code}]`));
			return response.body;
		} catch (error) {
			utils.error("[YT] Error fetching video info", error);
			throw error;
		}
	}

	getJson(url) {
		const response = this.get(url);
		return JSON.parse(response);
	}

	getVideoInfo(videoId) {
		try {
			const url = `https://yt.lemnoslife.com/noKey/videos?part=contentDetails,id,player,recordingDetails,snippet,statistics,status,topicDetails&id=${videoId}`;
			const response = this.getJson(url);
			return response.items[0] || null;
		} catch (error) {
			utils.error("[YT] Error fetching video info", error);
			throw error;
		}
	}
}
//endregion Youtube

//region YoutubeDislikes
class YoutubeDislikes {
	headers = {
		'Accept': 'application/json'
	};

	constructor() { }

	get(url) {
		try {
			const response = http.GET(url, this.headers);
			if (!response.isOk)
				throw new ScriptException(utils.log(`[YTDislikes] Failed to get \"${url}\" [${response.code}]`));
			return response.body;
		} catch (error) {
			utils.error("[YTDislikes] Error fetching video info", error);
			throw error;
		}
	}

	getJson(url) {
		const response = this.get(url);
		return JSON.parse(response);
	}

	getVideoInfo(videoId) {
		try {
			const url = `https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`;
			const response = this.getJson(url);
			return response.dislikes || null;
		} catch (error) {
			utils.error("[YT] Error fetching video info", error);
			throw error;
		}
	}
}
//endregion YoutubeDislikes

log("LOADED");
