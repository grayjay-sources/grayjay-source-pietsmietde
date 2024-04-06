const PLATFORM = "PietsmietDE";

const LIMIT_VIDEOS = 500;
const LIMIT_COMMENTS = 100;

const URL_BASE = "https://www.pietsmiet.de";
const URL_CHANNEL = `${URL_BASE}/videos/channels/`;
const URL_PROFILE = `${URL_BASE}/profile/`;

const URL_API_CONFIG =  `${URL_BASE}/api/v1/config/i`;
const URL_API_CHANNELS = `${URL_BASE}/api/v1/videos/channels?page=`; // &order=videos
const URL_API_HOME = `${URL_BASE}/api/v1/videos?limit=${LIMIT_VIDEOS}&order=latest&prioritize_featured=0&page=`;
const URL_API_VIDEO_DETAILS = `${URL_BASE}/api/v1/videos/`; // include[]=playlist
const URL_API_VIDEO_PLAYER = `${URL_BASE}/api/v1/utility/player?preset=quality&video=`;
const URL_API_COMMENTS = `${URL_BASE}/api/v1/utility/comments?order=popular&type=video&limit=${LIMIT_COMMENTS}&include[]=replies&id=`;


const URL_ICON = `${URL_BASE}/assets/pietsmiet/brand/icon.svg`;
const URL_ICON_PNG = "https://i.vgy.me/CZ2jjB.png"; // Todo: Find png on their website or implement svg parsing into GrayJay @Kelvin-FUTO
const URL_BANNER = `${URL_BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`;
const URL_BANNER_PNG = "https://i.imgur.com/8D68cRq.png"; // Todo: Find png on their website or implement svg parsing into GrayJay @Kelvin-FUTO
const URL_PLACEHOLDER_AVATAR = `${URL_BASE}/assets/pietsmiet/placeholder-1-1.jpg`

const REGEX_VIDEO_URL = /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/; // /https:\/\/www\.pietsmiet\.de\/videos\/(.*)/;
const REGEX_CHANNEL_URL = /https:\/\/www\.pietsmiet\.de\/videos\/channels\/(.*)/;

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
function getPlatformId(id) {
	return new PlatformID(PLATFORM, id.toString(), config.id);
}
function parseVideoSlug(url) {
	const matches = REGEX_VIDEO_URL.exec(url);
	return matches[1];
}
function parseChannelSlug(url) {
	const matches = REGEX_CHANNEL_URL.exec(url);
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
	return new PlatformAuthorLink({
		id: getPlatformId(channel.id),
		name: channel.title,
		url: url,
		thumbnail: channelIcons[channel.id], // todo: improve
		subscribers: cachedChannel.subscribers
	});
}
function parseDate(date) {
	parseInt((new Date(date)).getTime() / 1000)
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
function atob(encodedData) {
    const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let decodedData = '';
    let padding = 0;

    // Remove all characters that are not in the lookup table
    encodedData = encodedData.replace(/[^A-Za-z0-9\+\/\=]/g, '');

    // Count padding characters
    if (encodedData.charAt(encodedData.length - 1) === '=') {
        padding++;
        if (encodedData.charAt(encodedData.length - 2) === '=') padding++;
    }

    // Convert each 4 Base64 characters to 3 bytes
    for (let i = 0; i < encodedData.length; i += 4) {
        const enc1 = base64Chars.indexOf(encodedData.charAt(i));
        const enc2 = base64Chars.indexOf(encodedData.charAt(i + 1));
        const enc3 = base64Chars.indexOf(encodedData.charAt(i + 2));
        const enc4 = base64Chars.indexOf(encodedData.charAt(i + 3));

        const chr1 = (enc1 << 2) | (enc2 >> 4);
        const chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        const chr3 = ((enc3 & 3) << 6) | enc4;

        decodedData += String.fromCharCode(chr1);
        if (enc3 !== 64) decodedData += String.fromCharCode(chr2);
        if (enc4 !== 64) decodedData += String.fromCharCode(chr3);
    }

    // Adjust for padding
    decodedData = decodedData.slice(0, decodedData.length - padding + 1);

    return decodedData;
}
// endregion utils

// region api
function fetchIntegrityValue() {
	const confResponse = http.GET(URL_API_CONFIG, {}); // headerDict
	if(!confResponse.isOk)
		throw new ScriptException(`Failed to get integrity value from ${URL_API_CONFIG} [${confResponse.code}]`);
	const results = JSON.parse(confResponse.body);
	headerDict[atob(results.h)] = atob(results.v);
}
function fetchChannels() {
	const channelsResponse = http.GET(URL_API_CHANNELS, headerDict);
	if(!channelsResponse.isOk)
		throw new ScriptException(`Failed to get channels from ${URL_API_CHANNELS} [${channelsResponse.code}]`);
	const results = JSON.parse(channelsResponse.body);
	cachedChannels = results;
}
// endregion api

//Source Methods
source.enable = function(conf, settings, savedState){
	config = conf ?? {};
	fetchIntegrityValue();
	fetchChannels();
	let msg = `plugin enabled > X-Origin-Integrity=${headerDict['X-Origin-Integrity']}`;
	console.log(msg);
	return msg;
}
source.disable = function(conf, settings, savedState){
	console.log("plugin disabled");
	return "plugin disabled";
}

source.getHome = function() {
	return new ContentPager(getHomeResults(0), true);
};
class HomePager extends VideoPager {
	constructor(initialResults, hasMore) {
		super(initialResults, hasMore);
		this.page = 0;
	}

	nextPage() {
		this.page++;
		this.results = getHomeResults(this.page);
		this.hasMore = true;
		return this;
	}
}
function getHomeResults(page) {
	const url = URL_API_HOME + page;
	const homeResponse = http.GET(url, headerDict);
	if(!homeResponse.isOk)
		throw new ScriptException(`Failed to get home from ${url} [${homeResponse.code}]`)
	const results = JSON.parse(homeResponse.body).data;

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

//Channel
source.isChannelUrl = function(url) {
	return REGEX_CHANNEL_URL.test(url);
};
source.getChannel = function (url) {
	const channelSlug = parseChannelSlug(url);
	const channelId = parseIdFromSlug(channelSlug);
	const channelResponse = getItemByProp(cachedChannels.data, "id", channelId);
	return new PlatformChannel({
		id: getPlatformId(channelId),
		name: channelResponse.title ?? "",
		thumbnail: channelIcons[channelId] ?? "",
		banner: channelResponse.first_video.thumbnail.variations[0].url ?? "",
		subscribers: channelResponse.followings_count,
		description: channelResponse.description ?? channelResponse.title ?? "",
		url: url,
		links: {}
	});
};

//Video
source.isContentDetailsUrl = function(url) {
	return REGEX_VIDEO_URL.test(url);
};
source.getContentDetails = function(url) {
	const video_id = parseVideoSlug(url);
	const detailResponse = http.GET(URL_API_VIDEO_DETAILS + video_id, headerDict);
	if(!detailResponse.isOk)
		throw new ScriptException(`Failed to get detail for ${video_id} [${homeResp.code}]`)
	const detailResults = JSON.parse(detailResponse.body);
	const streamsResponse = http.GET(URL_API_VIDEO_PLAYER + video_id, headerDict);
	if(!streamsResponse.isOk)
		throw new ScriptException(`Failed to get streams for ${video_id} [${streamsResponse.code}]`)
	const streamsResults = JSON.parse(streamsResponse.body);
	let sourceVideos = [];
	streamsResults.options.tracks.forEach(e => {
		const hlssource = e.sources.hls;
		sourceVideos.push(new HLSSource({
			name: `${e.full_title} (HLS)`,
			url: hlssource.src,
			priority: false,
			language: "German",
			duration: detailResults.video.duration
		}));
		const dashsource = e.sources.dash;
		sourceVideos.push(new DashSource({
			name: `${e.full_title} (Dash)`,
			url: dashsource.src,
			duration: detailResults.video.duration,
			priority: true
		}));
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
		description: detailResults.video.description,
		video: new VideoSourceDescriptor(sourceVideos), //See sources
		live: null,
		rating: new RatingLikes(detailResults.video.likes_count),
		subtitles: []
	});
};

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
	const commentResponse = http.GET(`${URL_API_COMMENTS}${video_id}&page=${page}`, headerDict);
	if(!commentResponse.isOk)
		throw new ScriptException(`Failed to get comments for ${video_id} (page ${page}) [${commentResponse.code}]`)
	const results = JSON.parse(commentResponse.body);
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

log("LOADED");