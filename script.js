const PLATFORM = "PietsmietDE";

const LIMIT_VIDEOS = 500;
const LIMIT_COMMENTS = 100;

const URL_BASE = "https://www.pietsmiet.de";
const URL_HOME = `${URL_BASE}/api/v1/videos?limit=${LIMIT_VIDEOS}&order=latest&prioritize_featured=0&page=`;
const URL_VIDEO_DETAILS = `${URL_BASE}/api/v1/videos/`; // include[]=playlist
const URL_VIDEO_PLAYER = `${URL_BASE}/api/v1/utility/player?preset=quality&video=`;
const URL_CHANNEL = `${URL_BASE}/videos/channels/`;
const URL_PROFILE = `${URL_BASE}/profile/`
const URL_COMMENTS = `${URL_BASE}/api/v1/utility/comments?order=popular&type=video&limit=${LIMIT_COMMENTS}&include[]=replies&id=`;


const URL_ICON = `${URL_BASE}/assets/pietsmiet/brand/icon.svg`;
const URL_BANNER = `${URL_BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`;

const REGEX_VIDEO_URL = /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/; // /https:\/\/www\.pietsmiet\.de\/videos\/(.*)/;

let HEADER_INTEGRITY = "9144f98d";

const headerDict = {
	'Content-Type': 'application/json',
	'Accept': 'application/json',
	'Access-Control-Allow-Headers': 'Content-Type',
	'X-Origin-Integrity': HEADER_INTEGRITY
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

//Source Methods
source.enable = function(conf, settings, savedState){
	config = conf ?? {};
	console.log("plugin enabled");
	return "plugin enabled";
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
	const homeResp = http.GET(url, headerDict);
	if(!homeResp.isOk)
		throw new ScriptException(`Failed to get home from ${url} [${homeResp.code}]`)
	const results = JSON.parse(homeResp.body).data;

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

source.searchSuggestions = function(query) {
	throw new ScriptException("This is a sample");
};
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
source.searchChannelContents = function (channelUrl, query, type, order, filters) {
	throw new ScriptException("This is a sample");
};

source.searchChannels = function (query) {
	throw new ScriptException("This is a sample");
};

//Channel
source.isChannelUrl = function(url) {
	throw new ScriptException("This is a sample");
};
source.getChannel = function(url) {
	throw new ScriptException("This is a sample");
};
source.getChannelContents = function(url) {
	throw new ScriptException("This is a sample");
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
			language: "German"
		}));
		const dashsource = e.sources.dash;
		sourceVideos.push(new DashSource({
			name: `${e.full_title} (Dash)`,
			url: dashsource.src
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
		isLive: false,
		description: detailResults.video.description,
		video: new VideoSourceDescriptor(sourceVideos), //See sources
		live: null,
		rating: new RatingLikes(detailResults.video.likes_count),
		subtitles: []
	});
	
};


//Comments
source.getComments = function (url) {
	// const video_id = parseVideoId(url);
	return new CommentPager([], false); // getCommentResults(id, url, 1, true);
};
source.getSubComments = function (comment) {
	throw new ScriptException("This is a sample");
};
// class PietsmietDECommentPager extends CommentPager {
// 	constructor(comments, hasMore, contextUrl) {
// 		super(comments, hasMore != null, contextUrl);
// 		this.hasMore = hasMore;
// 	}
// 	nextPage() {
// 		if(!this.hasMore)
// 			return new CommentPager([], false);
// 		this.page++;
// 		return getCommentResults(this.contextUrl, this.page) ?? new CommentPager([], false);
// 	}
// }

// function getCommentResults(contextUrl, page) {
// 	const video_id = parseVideoId(contextUrl);
// 	const commentResponse = http.GET(`${URL_COMMENTS}${video_id}&page=${page}`, headerDict);
// 	if(!commentResponse.isOk)
// 		throw new ScriptException(`Failed to get comments for ${video_id} (page ${page}) [${commentResponse.code}]`)
// 	const results = JSON.parse(commentResponse.body);

// 	const comments = results.data?.map(i => {
// 		const c = new Comment({
// 			contextUrl: contextUrl,
// 			author: new PlatformAuthorLink(getPlatformId(i.id),
// 				i.user.name ?? "",
// 				URL_PROFILE + i.user.url_slug,
// 				i.user.avatar.variations[0]?.url ?? ""),
// 			message: i.text ?? "",
// 			date: parseDate(i.created_at),
// 			replyCount: i.count_replies,
// 			context: { commentId: i.id }
// 		});

// 		return c;
// 	}) ?? [];

// 	const hasMore = results.meta.current_page < result.result.last_page;
// 	return new PietsmietDECommentPager(comments, hasMore,  contextUrl);
// }

log("LOADED");