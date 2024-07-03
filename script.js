const PLATFORM = "PietsmietDE";

const LIMIT_VIDEOS = 500;
const LIMIT_COMMENTS = 100;
const ORDER_VIDEOS = "latest";
const ORDER_COMMENTS = "latest"; // popular
const STREAM_LANGUAGE = "German";

const URL_BASE = "https://www.pietsmiet.de";
const URL_CHANNEL = `${URL_BASE}/videos/channels/`;
const URL_PROFILE = `${URL_BASE}/profile/`;

const URL_API_CONFIG =  `${URL_BASE}/api/v1/config/i`;
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

// region utils
function hasIntegrity() {
	return headerDict.hasOwnProperty(HEADER_INTEGRITY) && !isNullOrEmpty(headerDict[HEADER_INTEGRITY])
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
	return new Thumbnails(variationsDict.map(y=>new Thumbnail(y.url, y.height)))
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
function getPlaceholderChannel(url="", id=0) {
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
// region js
function Debug(obj) {
	throw new ScriptException(`Debug: ${JSON.stringify(obj)}`);
}
function getItemsByProp(dict, prop, value) {
	let foundObjects = [];
	for (let key in dict) {
	   if (dict[key][prop] === value) {
		 foundObjects.push(dict[key]);
	   }
	}
	return foundObjects;
}
function getItemByProp(dict, prop, value, defaultValue = null) {
	try {
	   const items = getItemsByProp(dict, prop, value);
	   return items.length > 0 ? items[0] : defaultValue;
	} catch (error) {
	   return defaultValue;
	}
}
function isNullOrEmpty(str) {
	return str === null || str === "";
}
function atob(encodedData) {
	return String.fromCharCode(...utility.fromBase64(encodedData));
}
function updateQueryStringParameter(url, key, value) {
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
/* class Url {
    constructor(url) {
        if (!url) throw new Error("URL cannot be empty");
        const [protocol, host] = url.split('://');
        if (!protocol || !host) throw new Error("Invalid URL format");
        this.protocol = protocol;
        this.host = host;
        const [domain, port] = host.split(':');
        this.domain = domain;
        this.port = port ? parseInt(port) : null;
        let [path, queryString] = url.substring(url.indexOf('?') + 1).split('#');
        if (queryString.includes('#')) {
            [queryString, this.fragment] = queryString.split('#');
        }
        this.path = path;
        this.queryString = queryString;
        this.fragment = this.fragment || '';
    }
    toString() {
        return `${this.protocol}://${this.host}${this.path}?${this.queryString}#${this.fragment}`;
    }
    setQuery(key, value) {
        const regex = new RegExp(`\\?[^#]*${key}=([^&]*)`);
        const match = this.queryString.match(regex);
        if (match) {
            this.queryString = this.queryString.replace(regex, `?${key}=${encodeURIComponent(value)}`);
        } else {
            this.queryString += `&${key}=${encodeURIComponent(value)}`;
        }
    }
    addQueryParam(key, value) {
        this.queryString += `&${key}=${encodeURIComponent(value)}`;
    }
} */
// endregion js
// endregion utils

// region api
function getProtected(url) {
	if (!hasIntegrity()) {
		fetchIntegrityValue();
	}
	const response = http.GET(url, headerDict);
	if(!response.isOk)
		throw new ScriptException(`Failed to get ${url} [${response.code}]`);
	return response.body;
}
function getProtectedJson(url) {
	return JSON.parse(getProtected(url));
}
function fetchIntegrityValue() {
	const confResponse = http.GET(URL_API_CONFIG, {}); // headerDict
	if(!confResponse.isOk)
		throw new ScriptException(`Failed to get integrity value from ${URL_API_CONFIG} [${confResponse.code}]`);
	const results = JSON.parse(confResponse.body);
	headerDict[atob(results.h)] = atob(results.v);
}
function fetchChannels() {
	cachedChannels = getProtectedJson(URL_API_CHANNELS);
}
// endregion api

//Source Methods
source.enable = function(conf, settings, savedState){
	config = conf ?? {};
	fetchIntegrityValue();
	fetchChannels();
	let msg = `plugin enabled | ${HEADER_INTEGRITY}=${headerDict[HEADER_INTEGRITY]} | ${Object.keys(cachedChannels).length} channels | ${Object.keys(channelIcons).length} icons`;
	console.log(msg);
	return msg;
}
source.disable = function(conf, settings, savedState){
	console.log("plugin disabled");
	return "plugin disabled";
}

source.getHome = function() {
	return new ContentPager(getVideoResults(1), true);
};
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
function getVideoResults(page, playlists=[]) {
	let url = URL_API_HOME + page;
	if (playlists.length > 0) {
		url += "&playlists[]=" + playlists.join(",");
	}
	const results = getProtectedJson(url).data;

	return results.map(x=>new PlatformVideo({
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
		filters: [ ]
	};
};
source.search = function (query, type, order, filters) {
	return new ContentPager([]. false);
};
source.getSearchChannelContentsCapabilities = function () {
	return {
		types: [Type.Feed.Mixed],
		sorts: [Type.Order.Chronological],
		filters: []
	};
};

// region Channel
source.isChannelUrl = function(url) {
	return REGEX_CHANNEL_URL.test(url);
};
source.getChannel = function(url) {
	const channelSlug = parseChannelSlug(url);
	const channelId = parseIdFromSlug(channelSlug);
	const channelResponse = getItemByProp(cachedChannels.data, "id", channelId);
	if (!isNullOrEmpty(channelResponse)) {
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
source.isPlaylistUrl = function(url) {
	return REGEX_PLAYLIST_URL.test(url);
}
source.getPlaylist = function(url) {
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
source.isContentDetailsUrl = function(url) {
	return REGEX_VIDEO_URL.test(url);
};
source.getContentDetails = function(url) {
	const video_id = parseVideoSlug(url);
	const detailResults = getProtectedJson(URL_API_VIDEO_DETAILS + video_id);
	const streamsResults = getProtectedJson(URL_API_VIDEO_PLAYER + video_id);
	let sourceVideos = [];
	streamsResults.options.tracks.forEach(e => {
		const hlssource = e.sources.hls;
		if (hlssource !== null && !isNullOrEmpty(hlssource.src)) {
			sourceVideos.push(new HLSSource({
				language: STREAM_LANGUAGE,
				name: `${e.full_title} (HLS)`,
				duration: detailResults.video.duration ?? -1,
				priority: e.main ?? false,
				url: hlssource.src,
				container: hlssource.type ?? null
			}));
		}
		const dashsource = e.sources.dash;
		if (dashsource !== null && !isNullOrEmpty(dashsource.src)) {
			sourceVideos.push(new DashSource({
				language: STREAM_LANGUAGE,
				name: `${e.full_title} (Dash)`,
				duration: detailResults.video.duration ?? -1,
				priority: e.main ?? false,
				url: dashsource.src,
				container: dashsource.type ?? null
			}));
		}
		const mp4source = e.sources.mp4;
		if (mp4source !== null && !isNullOrEmpty(mp4source.src)) {
			sourceVideos.push(new VideoUrlSource({
				language: STREAM_LANGUAGE,
				name: `${e.full_title} (mp4)`,
				duration: detailResults.video.duration ?? -1,
				priority: e.main ?? false,
				url: mp4source.src,
				container: mp4source.type ?? null
			}));
		}
	});
	return new PlatformVideoDetails({
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
		description: detailResults.video.description + `<br/><br/>${url}&ref=grayjay`,
		video: new VideoSourceDescriptor(sourceVideos), //See sources
		live: null,
		rating: new RatingLikes(detailResults.video.likes_count),
		subtitles: []
	});
};
// endregion Video
// region Comments
source.getComments = function (url) {
	// const video_id = parseVideoId(url);
	return getCommentResults(url, 1); // new CommentPager([], false);
};
// source.getSubComments = function (comment) {
// 	throw new ScriptException("This is a sample");
// };
class PietsmietDECommentPager extends CommentPager {
	constructor(comments, hasMore, contextUrl) {
		super(comments, hasMore != null, contextUrl);
		this.hasMore = hasMore;
	}
	nextPage() {
		if(!this.hasMore)
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
	return new PietsmietDECommentPager(comments, hasMore,  contextUrl);
}
// endregion Comments

log("LOADED");