const PLATFORM = "PietsmietDE";

const LIMIT_VIDEOS = 500;
const LIMIT_COMMENTS = 100;

const URL_BASE = "https://www.pietsmiet.de";
const URL_CONFIG = `${URL_BASE}/api/v1/config/i`;
const URL_HOME = `${URL_BASE}/api/v1/videos?limit=${LIMIT_VIDEOS}&order=latest&prioritize_featured=0&page=`;
const URL_VIDEO_DETAILS = `${URL_BASE}/api/v1/videos/`; // include[]=playlist
const URL_VIDEO_PLAYER = `${URL_BASE}/api/v1/utility/player?preset=quality&video=`;
const URL_CHANNEL = `${URL_BASE}/videos/channels/`;
const URL_PROFILE = `${URL_BASE}/profile/`
const URL_COMMENTS = `${URL_BASE}/api/v1/utility/comments?order=popular&type=video&limit=${LIMIT_COMMENTS}&include[]=replies&id=`;


const URL_ICON = `${URL_BASE}/assets/pietsmiet/brand/icon.svg`;
const URL_BANNER = `${URL_BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`;

const REGEX_VIDEO_URL = /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/; // /https:\/\/www\.pietsmiet\.de\/videos\/(.*)/;
const REGEX_CHANNEL_URL = /https:\/\/www\.pietsmiet\.de\/videos\/channels\/(.*)/;

let headerDict = {
	// 'Content-Type': 'application/json',
	// 'Accept': 'application/json',
	// 'Access-Control-Allow-Headers': 'Content-Type',
	// 'X-Origin-Integrity': ''
};

var config = {};

function getPlatformId(id) {
	return new PlatformID(PLATFORM, id.toString(), config.id);
}
function parseVideoId(url) {
	const matches = REGEX_VIDEO_URL.exec(url);
	return matches[1];
}
function parseThumbnailVariations(variationsDict) {
	return new Thumbnails(variationsDict.map(y=>new Thumbnail(y.url, y.height)))
}
function parseAuthor(videoDict) {
	return new PlatformAuthorLink(
		getPlatformId(videoDict.id),
		videoDict.channels[0].title,
		URL_CHANNEL + videoDict.channels[0].url_slug,
		URL_ICON
	);
}
function parseDate(date) {
	parseInt((new Date(date)).getTime() / 1000)
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


function fetchIntegrityValue() {
	const confResponse = http.GET(URL_CONFIG, {}); // headerDict
	if(!confResponse.isOk)
		throw new ScriptException(`Failed to get integrity value from ${URL_CONFIG} [${confResponse.code}]`);
	const results = JSON.parse(confResponse.body);
	headerDict[atob(results.h)] = atob(results.v);
}


//Source Methods
source.enable = function(conf, settings, savedState){
	config = conf ?? {};
	fetchIntegrityValue();
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
	const url = URL_HOME + page;
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

//Video
source.isContentDetailsUrl = function(url) {
	return REGEX_VIDEO_URL.test(url);
};
source.getContentDetails = function(url) {
	const video_id = parseVideoId(url);
	const detailResponse = http.GET(URL_VIDEO_DETAILS + video_id, headerDict);
	if(!detailResponse.isOk)
		throw new ScriptException(`Failed to get detail for ${video_id} [${homeResp.code}]`)
	const detailResults = JSON.parse(detailResponse.body);
	const streamsResponse = http.GET(URL_VIDEO_PLAYER + video_id, headerDict);
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
source.getSubComments = function (comment) {
	throw new ScriptException("This is a sample");
};
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
	const video_id = parseVideoId(contextUrl);
	const commentResponse = http.GET(`${URL_COMMENTS}${video_id}&page=${page}`, headerDict);
	if(!commentResponse.isOk)
		throw new ScriptException(`Failed to get comments for ${video_id} (page ${page}) [${commentResponse.code}]`)
	const results = JSON.parse(commentResponse.body);
	const comments = results.data?.map(i => {
		const c = new Comment({
			contextUrl: contextUrl,
			author: new PlatformAuthorLink(getPlatformId(i.id),
				i.user.name ?? "",
				URL_PROFILE + i.user.url_slug,
				i.user.avatar.variations[0]?.url ?? ""),
			message: i.text ?? "",
			date: parseDate(i.created_at),
			replyCount: i.count_replies,
			context: { commentId: i.id }
		});
		return c;
	}) ?? [];
	const hasMore = results.meta.current_page < results.result.last_page;
	return new PietsmietDECommentPager(comments, hasMore,  contextUrl);
}

log("LOADED");