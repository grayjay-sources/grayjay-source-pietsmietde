System.register("consts", [], function (exports_1, context_1) {
    "use strict";
    var platform, limits, order, stream, urlBase, apiUrl, urls, regex, pspProxyServers, headerIntegrity;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("platform", platform = {
                PLATFORM: "PietsmietDE",
                PLATFORM_SHORT: "PSDE"
            });
            exports_1("limits", limits = {
                VIDEOS: 500,
                COMMENTS: 100
            });
            exports_1("order", order = {
                VIDEOS: "latest",
                COMMENTS: "latest"
            });
            exports_1("stream", stream = {
                LANGUAGE: "German"
            });
            exports_1("urlBase", urlBase = {
                BASE: "https://www.pietsmiet.de",
                CHANNEL: `${urlBase.BASE}/videos/channels/`,
                PROFILE: `${urlBase.BASE}/profile/`
            });
            exports_1("apiUrl", apiUrl = {
                CONFIG: `${urlBase.BASE}/api/v1/config/i`,
                CHANNELS: `${urlBase.BASE}/api/v1/videos/channels?page=`,
                HOME: `${urlBase.BASE}/api/v1/videos?limit=${limits.VIDEOS}&order=${order.VIDEOS}&prioritize_featured=0&page=`,
                PLAYLIST: `${urlBase.BASE}/api/v1/videos/playlists/`,
                PLAYLISTS: `${urlBase.BASE}/api/v1/videos/playlists?limit=${limits.VIDEOS}&order=${order.VIDEOS}&page=1`,
                VIDEO_DETAILS: `${urlBase.BASE}/api/v1/videos/`,
                VIDEO_PLAYER: `${urlBase.BASE}/api/v1/utility/player?preset=quality&video=`,
                COMMENTS: `${urlBase.BASE}/api/v1/utility/comments?order=${order.COMMENTS}&type=video&limit=${limits.COMMENTS}&id=`,
                SEARCH: `${urlBase.BASE}/api/v1/search?page=`
            });
            exports_1("urls", urls = {
                ICON: `${urlBase.BASE}/assets/pietsmiet/brand/icon.svg`,
                ICON_PNG: "https://i.vgy.me/CZ2jjB.png",
                BANNER: `${urlBase.BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`,
                BANNER_PNG: "https://i.imgur.com/8D68cRq.png",
                PLACEHOLDER_AVATAR: `${urlBase.BASE}/assets/pietsmiet/placeholder-1-1.jpg`
            });
            exports_1("regex", regex = {
                VIDEO_URL: /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/,
                CHANNEL_URL: /https:\/\/www\.pietsmiet\.de\/videos\/channels\/(.*)/,
                PLAYLIST_URL: /https:\/\/www\.pietsmiet\.de\/videos\/playlists\/(.*)/
            });
            exports_1("pspProxyServers", pspProxyServers = {
                SERVERS: [
                    "https://ytapi.minopia.de/",
                    "https://ytapi2.minopia.de/"
                ]
            });
            exports_1("headerIntegrity", headerIntegrity = {
                INTEGRITY: 'X-Origin-Integrity'
            });
        }
    };
});
System.register("apis/pietsmiet.de/types", [], function (exports_2, context_2) {
    "use strict";
    var pietsmietDE;
    var __moduleName = context_2 && context_2.id;
    function getProperty(obj, ...keys) {
        return keys.reduce((acc, key) => acc && acc[key], obj);
    }
    return {
        setters: [],
        execute: function () {
            exports_2("pietsmietDE", pietsmietDE = {
                API: {
                    Config: { URL: "${BASE_URL}" },
                    Channels: { URL: "${BASE_URL}/api/v1/videos/channels?page=" },
                    Home: { URL: "${BASE_URL}/api/v1/videos?limit=${limits.Videos}&order=${orders.Videos}&prioritize_featured=0&page=" },
                    Playlists: { URL: "${BASE_URL}/api/v1/videos/playlists?limit=${limits.Videos}&order=${orders.Videos}&page=1" },
                    VideoDetails: { URL: "${BASE_URL}/api/v1/videos/" },
                    VideoPlayer: { URL: "${BASE_URL}/api/v1/utility/player?preset=quality&video=" },
                    Comments: { URL: "${BASE_URL}/api/v1/utility/comments?order=${orders.Comments}&type=video&limit=${limits.Comments}&id=" },
                    Search: { URL: "${BASE_URL}/api/v1/search?page=" },
                },
                URLs: {
                    Icon: "${BASE_URL}/assets/pietsmiet/brand/icon.svg",
                    IconPNG: "https://i.vgy.me/CZ2jjB.png",
                    Banner: "${BASE_URL}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg",
                    BannerPNG: "https://i.imgur.com/8D68cRq.png",
                    PlaceholderAvatar: "${BASE_URL}/assets/pietsmiet/placeholder-1-1.jpg",
                },
                Limits: {
                    Videos: 500,
                    Comments: 100,
                },
                Orders: {
                    Videos: "latest",
                    Comments: "latest",
                },
                Platform: {
                    Name: "PietsmietDE",
                    ShortName: "PSDE",
                },
                Stream: {
                    Language: "German",
                },
                ChannelIcons = {
                    8: "https://yt3.googleusercontent.com/ytc/AIdro_nMgWqMfXY78nUTzabB0TvSF1OHeUtMc93WKpG2hnbRW3k=s176-c-k-c0x00ffffff-no-rj",
                    9: "https://yt3.googleusercontent.com/qR-4gEbPO0XQlSEwHNgNt7EG5dB_sjQ5WVExWhT11D9ItY3G24l8Egw7isWZhcsUGYcfjaT4tg=s176-c-k-c0x00ffffff-no-rj",
                    10: "https://yt3.googleusercontent.com/ytc/AIdro_nI1TZILbTDn38tNbzDb_K2rxe6c5V7UGn4hVjG2DX4jg=s176-c-k-c0x00ffffff-no-rj",
                    12: "https://yt3.googleusercontent.com/ytc/AIdro_kej_tg4mojF1qht3fNepeKyR10sAlVK4oBwUYL2hAeSg=s176-c-k-c0x00ffffff-no-rj",
                    37: URLs.ICON_PNG,
                    44: "https://yt3.googleusercontent.com/ytc/AIdro_nnAWki_jzSkHEzvkkT7TDlb-WxDBIc-rcqhFoEsp0tMg=s176-c-k-c0x00ffffff-no-rj"
                },
            });
        }
    };
});
System.register("apis/pietsmiet.de/index", ["apis/pietsmiet.de/types"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_3(exports);
    }
    return {
        setters: [
            function (types_1_1) {
                exportStar_1(types_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("apis/pietsmiet.de/responses/index", ["./channels.schema.d.ts", "./comments.schema.d.ts", "./config.schema.d.ts", "./home.schema.d.ts", "./playlist.schema.d.ts", "./playlists.schema.d.ts", "./search.schema.d.ts", "./video_details.schema.d.ts", "./video_player.schema.d.ts"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_4(exports);
    }
    return {
        setters: [
            function (channels_schema_d_ts_1_1) {
                exportStar_2(channels_schema_d_ts_1_1);
            },
            function (comments_schema_d_ts_1_1) {
                exportStar_2(comments_schema_d_ts_1_1);
            },
            function (config_schema_d_ts_1_1) {
                exportStar_2(config_schema_d_ts_1_1);
            },
            function (home_schema_d_ts_1_1) {
                exportStar_2(home_schema_d_ts_1_1);
            },
            function (playlist_schema_d_ts_1_1) {
                exportStar_2(playlist_schema_d_ts_1_1);
            },
            function (playlists_schema_d_ts_1_1) {
                exportStar_2(playlists_schema_d_ts_1_1);
            },
            function (search_schema_d_ts_1_1) {
                exportStar_2(search_schema_d_ts_1_1);
            },
            function (video_details_schema_d_ts_1_1) {
                exportStar_2(video_details_schema_d_ts_1_1);
            },
            function (video_player_schema_d_ts_1_1) {
                exportStar_2(video_player_schema_d_ts_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("apis/ytapi.minopia.de/responses/index", ["./proxy.schema.d.ts"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    function exportStar_3(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_5(exports);
    }
    return {
        setters: [
            function (proxy_schema_d_ts_1_1) {
                exportStar_3(proxy_schema_d_ts_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("index", ["consts", "apis/pietsmiet.de/index", "apis/pietsmiet.de/responses/index", "apis/ytapi.minopia.de/responses/index"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    function exportStar_4(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_6(exports);
    }
    return {
        setters: [
            function (consts_1_1) {
                exportStar_4(consts_1_1);
            },
            function (pietsmiet_de_1_1) {
                exportStar_4(pietsmiet_de_1_1);
            },
            function (responses_1_1) {
                exportStar_4(responses_1_1);
            },
            function (responses_2_1) {
                exportStar_4(responses_2_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("script.autocomplete", [], function (exports_7, context_7) {
    "use strict";
    var IS_TESTING, Type, Language, ScriptException, ScriptLoginRequiredException, LoginRequiredException, CaptchaRequiredException, CriticalException, UnavailableException, AgeException, TimeoutException, ScriptImplementationException, Thumbnails, Thumbnail, PlatformID, ResultCapabilities, FilterGroup, FilterCapability, PlatformAuthorLink, PlatformAuthorMembershipLink, PlatformContent, PlatformContentDetails, PlatformNestedMediaContent, PlatformLockedContent, PlatformVideo, PlatformVideoDetails, PlatformPost, PlatformPostDetails, VideoSourceDescriptor, UnMuxVideoSourceDescriptor, VideoUrlSource, VideoUrlRangeSource, AudioUrlSource, AudioUrlWidevineSource, AudioUrlRangeSource, HLSSource, DashSource, RequestModifier, PlatformChannel, PlatformPlaylist, PlatformPlaylistDetails, RatingLikes, RatingLikesDislikes, RatingScaler, PlatformComment, Comment, PlaybackTracker, LiveEventPager, LiveEvent, LiveEventComment, LiveEventEmojis, LiveEventDonation, LiveEventViewCount, LiveEventRaid, ContentPager, VideoPager, ChannelPager, PlaylistPager, CommentPager, plugin, source, URLSearchParams, bridge, http, utility;
    var __moduleName = context_7 && context_7.id;
    function throwException(type, message) {
        throw new Error("V8EXCEPTION:" + type + "-" + message);
    }
    function parseSettings(settings) {
        if (!settings)
            return {};
        let newSettings = {};
        for (let key in settings) {
            if (typeof settings[key] == "string")
                newSettings[key] = JSON.parse(settings[key]);
            else
                newSettings[key] = settings[key];
        }
        return newSettings;
    }
    function log(str) {
        if (str) {
            console.log(str);
            if (typeof str == "string")
                bridge.log(str);
            else
                bridge.log(JSON.stringify(str, null, 4));
        }
    }
    function encodePathSegment(segment) {
        return encodeURIComponent(segment).replace(/[!'()*]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
    }
    return {
        setters: [],
        execute: function () {
            IS_TESTING = false;
            Type = {
                Source: {
                    Dash: "DASH",
                    HLS: "HLS",
                    STATIC: "Static"
                },
                Feed: {
                    Videos: "VIDEOS",
                    Streams: "STREAMS",
                    Mixed: "MIXED",
                    Live: "LIVE",
                    Subscriptions: "SUBSCRIPTIONS"
                },
                Order: {
                    Chronological: "CHRONOLOGICAL"
                },
                Date: {
                    LastHour: "LAST_HOUR",
                    Today: "TODAY",
                    LastWeek: "LAST_WEEK",
                    LastMonth: "LAST_MONTH",
                    LastYear: "LAST_YEAR"
                },
                Duration: {
                    Short: "SHORT",
                    Medium: "MEDIUM",
                    Long: "LONG"
                },
                Text: {
                    RAW: 0,
                    HTML: 1,
                    MARKUP: 2
                },
                Chapter: {
                    NORMAL: 0,
                    SKIPPABLE: 5,
                    SKIP: 6,
                    SKIPONCE: 7
                }
            };
            Language = {
                UNKNOWN: "Unknown",
                ARABIC: "ar",
                SPANISH: "es",
                FRENCH: "fr",
                HINDI: "hi",
                INDONESIAN: "id",
                KOREAN: "ko",
                PORTUGUESE: "pt",
                PORTBRAZIL: "pt",
                RUSSIAN: "ru",
                THAI: "th",
                TURKISH: "tr",
                VIETNAMESE: "vi",
                ENGLISH: "en"
            };
            ScriptException = class ScriptException extends Error {
                constructor(type, msg) {
                    if (arguments.length == 1) {
                        super(arguments[0]);
                        this.plugin_type = "ScriptException";
                        this.message = arguments[0];
                    }
                    else {
                        super(msg);
                        this.plugin_type = type ?? "";
                        this.msg = msg ?? "";
                    }
                }
            };
            ScriptLoginRequiredException = class ScriptLoginRequiredException extends ScriptException {
                constructor(msg) {
                    super("ScriptLoginRequiredException", msg);
                }
            };
            LoginRequiredException = class LoginRequiredException extends ScriptException {
                constructor(msg) {
                    super("ScriptLoginRequiredException", msg);
                }
            };
            CaptchaRequiredException = class CaptchaRequiredException extends Error {
                constructor(url, body) {
                    super(JSON.stringify({ 'plugin_type': 'CaptchaRequiredException', url, body }));
                    this.plugin_type = "CaptchaRequiredException";
                    this.url = url;
                    this.body = body;
                }
            };
            CriticalException = class CriticalException extends ScriptException {
                constructor(msg) {
                    super("CriticalException", msg);
                }
            };
            UnavailableException = class UnavailableException extends ScriptException {
                constructor(msg) {
                    super("UnavailableException", msg);
                }
            };
            AgeException = class AgeException extends ScriptException {
                constructor(msg) {
                    super("AgeException", msg);
                }
            };
            TimeoutException = class TimeoutException extends ScriptException {
                constructor(msg) {
                    super(msg);
                    this.plugin_type = "ScriptTimeoutException";
                }
            };
            ScriptImplementationException = class ScriptImplementationException extends ScriptException {
                constructor(msg) {
                    super(msg);
                    this.plugin_type = "ScriptImplementationException";
                }
            };
            Thumbnails = class Thumbnails {
                constructor(thumbnails) {
                    this.sources = thumbnails ?? [];
                }
            };
            Thumbnail = class Thumbnail {
                constructor(url, quality) {
                    this.url = url ?? "";
                    this.quality = quality ?? 0;
                }
            };
            PlatformID = class PlatformID {
                constructor(platform, id, pluginId, claimType, claimFieldType) {
                    this.platform = platform ?? "";
                    this.pluginId = pluginId;
                    this.value = id;
                    this.claimType = claimType ?? 0;
                    this.claimFieldType = claimFieldType ?? -1;
                }
            };
            ResultCapabilities = class ResultCapabilities {
                constructor(types, sorts, filters) {
                    this.types = types ?? [];
                    this.sorts = sorts ?? [];
                    this.filters = filters ?? [];
                }
            };
            FilterGroup = class FilterGroup {
                constructor(name, filters, isMultiSelect, id) {
                    if (!name)
                        throw new ScriptException("No name for filter group");
                    if (!filters)
                        throw new ScriptException("No filter provided");
                    this.name = name;
                    this.filters = filters;
                    this.isMultiSelect = isMultiSelect;
                    this.id = id;
                }
            };
            FilterCapability = class FilterCapability {
                constructor(name, value, id) {
                    if (!name)
                        throw new ScriptException("No name for filter");
                    if (!value)
                        throw new ScriptException("No filter value");
                    this.name = name;
                    this.value = value;
                    this.id = id;
                }
            };
            PlatformAuthorLink = class PlatformAuthorLink {
                constructor(id, name, url, thumbnail, subscribers, membershipUrl) {
                    this.id = id ?? PlatformID();
                    this.name = name ?? "";
                    this.url = url ?? "";
                    this.thumbnail = thumbnail;
                    if (subscribers)
                        this.subscribers = subscribers;
                    if (membershipUrl)
                        this.membershipUrl = membershipUrl ?? null;
                }
            };
            PlatformAuthorMembershipLink = class PlatformAuthorMembershipLink {
                constructor(id, name, url, thumbnail, subscribers, membershipUrl) {
                    this.id = id ?? PlatformID();
                    this.name = name ?? "";
                    this.url = url ?? "";
                    this.thumbnail = thumbnail;
                    if (subscribers)
                        this.subscribers = subscribers;
                    if (membershipUrl)
                        this.membershipUrl = membershipUrl ?? null;
                }
            };
            PlatformContent = class PlatformContent {
                constructor(obj, type) {
                    this.contentType = type;
                    obj = obj ?? {};
                    this.id = obj.id ?? PlatformID();
                    this.name = obj.name ?? "";
                    this.thumbnails = obj.thumbnails;
                    this.author = obj.author;
                    this.datetime = obj.datetime ?? obj.uploadDate ?? 0;
                    this.url = obj.url ?? "";
                }
            };
            PlatformContentDetails = class PlatformContentDetails {
                constructor(type) {
                    this.contentType = type;
                }
            };
            PlatformNestedMediaContent = class PlatformNestedMediaContent extends PlatformContent {
                constructor(obj) {
                    super(obj, 11);
                    obj = obj ?? {};
                    this.contentUrl = obj.contentUrl ?? "";
                    this.contentName = obj.contentName;
                    this.contentDescription = obj.contentDescription;
                    this.contentProvider = obj.contentProvider;
                    this.contentThumbnails = obj.contentThumbnails ?? new Thumbnails();
                }
            };
            PlatformLockedContent = class PlatformLockedContent extends PlatformContent {
                constructor(obj) {
                    super(obj, 70);
                    obj = obj ?? {};
                    this.contentName = obj.contentName;
                    this.contentThumbnails = obj.contentThumbnails ?? new Thumbnails();
                    this.unlockUrl = obj.unlockUrl ?? "";
                    this.lockDescription = obj.lockDescription;
                }
            };
            PlatformVideo = class PlatformVideo extends PlatformContent {
                constructor(obj) {
                    super(obj, 1);
                    obj = obj ?? {};
                    this.plugin_type = "PlatformVideo";
                    this.shareUrl = obj.shareUrl;
                    this.duration = obj.duration ?? -1;
                    this.viewCount = obj.viewCount ?? -1;
                    this.isLive = obj.isLive ?? false;
                }
            };
            PlatformVideoDetails = class PlatformVideoDetails extends PlatformVideo {
                constructor(obj) {
                    super(obj);
                    obj = obj ?? {};
                    this.plugin_type = "PlatformVideoDetails";
                    this.description = obj.description ?? "";
                    this.video = obj.video ?? {};
                    this.dash = obj.dash ?? null;
                    this.hls = obj.hls ?? null;
                    this.live = obj.live ?? null;
                    this.rating = obj.rating ?? null;
                    this.subtitles = obj.subtitles ?? [];
                }
            };
            PlatformPost = class PlatformPost extends PlatformContent {
                constructor(obj) {
                    super(obj, 2);
                    obj = obj ?? {};
                    this.plugin_type = "PlatformPost";
                    this.thumbnails = obj.thumbnails ?? [];
                    this.images = obj.images ?? [];
                    this.description = obj.description ?? "";
                }
            };
            PlatformPostDetails = class PlatformPostDetails extends PlatformPost {
                constructor(obj) {
                    super(obj);
                    obj = obj ?? {};
                    this.plugin_type = "PlatformPostDetails";
                    this.rating = obj.rating ?? RatingLikes(-1);
                    this.textType = obj.textType ?? 0;
                    this.content = obj.content ?? "";
                }
            };
            VideoSourceDescriptor = class VideoSourceDescriptor {
                constructor(obj) {
                    obj = obj ?? {};
                    this.plugin_type = "MuxVideoSourceDescriptor";
                    this.isUnMuxed = false;
                    if (obj.constructor === Array)
                        this.videoSources = obj;
                    else
                        this.videoSources = obj.videoSources ?? [];
                }
            };
            UnMuxVideoSourceDescriptor = class UnMuxVideoSourceDescriptor {
                constructor(videoSourcesOrObj, audioSources) {
                    videoSourcesOrObj = videoSourcesOrObj ?? {};
                    this.plugin_type = "UnMuxVideoSourceDescriptor";
                    this.isUnMuxed = true;
                    if (videoSourcesOrObj.constructor === Array) {
                        this.videoSources = videoSourcesOrObj;
                        this.audioSources = audioSources;
                    }
                    else {
                        this.videoSources = videoSourcesOrObj.videoSources ?? [];
                        this.audioSources = videoSourcesOrObj.audioSources ?? [];
                    }
                }
            };
            VideoUrlSource = class VideoUrlSource {
                constructor(obj) {
                    obj = obj ?? {};
                    this.plugin_type = "VideoUrlSource";
                    this.width = obj.width ?? 0;
                    this.height = obj.height ?? 0;
                    this.container = obj.container ?? "";
                    this.codec = obj.codec ?? "";
                    this.name = obj.name ?? "";
                    this.bitrate = obj.bitrate ?? 0;
                    this.duration = obj.duration ?? 0;
                    this.url = obj.url;
                    if (obj.requestModifier)
                        this.requestModifier = obj.requestModifier;
                }
            };
            VideoUrlRangeSource = class VideoUrlRangeSource extends VideoUrlSource {
                constructor(obj) {
                    super(obj);
                    this.plugin_type = "VideoUrlRangeSource";
                    this.itagId = obj.itagId ?? null;
                    this.initStart = obj.initStart ?? null;
                    this.initEnd = obj.initEnd ?? null;
                    this.indexStart = obj.indexStart ?? null;
                    this.indexEnd = obj.indexEnd ?? null;
                }
            };
            AudioUrlSource = class AudioUrlSource {
                constructor(obj) {
                    obj = obj ?? {};
                    this.plugin_type = "AudioUrlSource";
                    this.name = obj.name ?? "";
                    this.bitrate = obj.bitrate ?? 0;
                    this.container = obj.container ?? "";
                    this.codec = obj.codec ?? "";
                    this.duration = obj.duration ?? 0;
                    this.url = obj.url;
                    this.language = obj.language ?? Language.UNKNOWN;
                    if (obj.requestModifier)
                        this.requestModifier = obj.requestModifier;
                }
            };
            AudioUrlWidevineSource = class AudioUrlWidevineSource extends AudioUrlSource {
                constructor(obj) {
                    super(obj);
                    this.plugin_type = "AudioUrlWidevineSource";
                    this.bearerToken = obj.bearerToken;
                    this.licenseUri = obj.licenseUri;
                }
            };
            AudioUrlRangeSource = class AudioUrlRangeSource extends AudioUrlSource {
                constructor(obj) {
                    super(obj);
                    this.plugin_type = "AudioUrlRangeSource";
                    this.itagId = obj.itagId ?? null;
                    this.initStart = obj.initStart ?? null;
                    this.initEnd = obj.initEnd ?? null;
                    this.indexStart = obj.indexStart ?? null;
                    this.indexEnd = obj.indexEnd ?? null;
                    this.audioChannels = obj.audioChannels ?? 2;
                }
            };
            HLSSource = class HLSSource {
                constructor(obj) {
                    obj = obj ?? {};
                    this.plugin_type = "HLSSource";
                    this.name = obj.name ?? "HLS";
                    this.duration = obj.duration ?? 0;
                    this.url = obj.url;
                    this.priority = obj.priority ?? false;
                    if (obj.language)
                        this.language = obj.language;
                    if (obj.requestModifier)
                        this.requestModifier = obj.requestModifier;
                }
            };
            DashSource = class DashSource {
                constructor(obj) {
                    obj = obj ?? {};
                    this.plugin_type = "DashSource";
                    this.name = obj.name ?? "Dash";
                    this.duration = obj.duration ?? 0;
                    this.url = obj.url;
                    if (obj.language)
                        this.language = obj.language;
                    if (obj.requestModifier)
                        this.requestModifier = obj.requestModifier;
                }
            };
            RequestModifier = class RequestModifier {
                constructor(obj) {
                    obj = obj ?? {};
                    this.allowByteSkip = obj.allowByteSkip;
                }
            };
            PlatformChannel = class PlatformChannel {
                constructor(obj) {
                    obj = obj ?? {};
                    this.plugin_type = "PlatformChannel";
                    this.id = obj.id ?? "";
                    this.name = obj.name ?? "";
                    this.thumbnail = obj.thumbnail;
                    this.banner = obj.banner;
                    this.subscribers = obj.subscribers ?? 0;
                    this.description = obj.description;
                    this.url = obj.url ?? "";
                    this.urlAlternatives = obj.urlAlternatives ?? [];
                    this.links = obj.links ?? {};
                }
            };
            PlatformPlaylist = class PlatformPlaylist extends PlatformContent {
                constructor(obj) {
                    super(obj, 4);
                    this.plugin_type = "PlatformPlaylist";
                    this.videoCount = obj.videoCount ?? -1;
                    this.thumbnail = obj.thumbnail;
                }
            };
            PlatformPlaylistDetails = class PlatformPlaylistDetails extends PlatformPlaylist {
                constructor(obj) {
                    super(obj);
                    this.plugin_type = "PlatformPlaylistDetails";
                    this.contents = obj.contents;
                }
            };
            RatingLikes = class RatingLikes {
                constructor(likes) {
                    this.type = 1;
                    this.likes = likes;
                }
            };
            RatingLikesDislikes = class RatingLikesDislikes {
                constructor(likes, dislikes) {
                    this.type = 2;
                    this.likes = likes;
                    this.dislikes = dislikes;
                }
            };
            RatingScaler = class RatingScaler {
                constructor(value) {
                    this.type = 3;
                    this.value = value;
                }
            };
            PlatformComment = class PlatformComment {
                constructor(obj) {
                    this.plugin_type = "Comment";
                    this.contextUrl = obj.contextUrl ?? "";
                    this.author = obj.author ?? new PlatformAuthorLink(null, "", "", null);
                    this.message = obj.message ?? "";
                    this.rating = obj.rating ?? new RatingLikes(0);
                    this.date = obj.date ?? 0;
                    this.replyCount = obj.replyCount ?? 0;
                    this.context = obj.context ?? {};
                }
            };
            Comment = class Comment extends PlatformComment {
                constructor(obj) {
                    super(obj);
                }
            };
            PlaybackTracker = class PlaybackTracker {
                constructor(interval) {
                    this.nextRequest = interval ?? 10 * 1000;
                }
                setProgress(seconds) {
                    throw new ScriptImplementationException("Missing required setProgress(seconds) on PlaybackTracker");
                }
            };
            LiveEventPager = class LiveEventPager {
                constructor(results, hasMore, context) {
                    this.plugin_type = "LiveEventPager";
                    this.results = results ?? [];
                    this.hasMore = hasMore ?? false;
                    this.context = context ?? {};
                    this.nextRequest = 4000;
                }
                hasMorePagers() { return this.hasMore; }
                nextPage() { return new Pager([], false, this.context); }
            };
            LiveEvent = class LiveEvent {
                constructor(type) {
                    this.type = type;
                }
            };
            LiveEventComment = class LiveEventComment extends LiveEvent {
                constructor(name, message, thumbnail, colorName, badges) {
                    super(1);
                    this.name = name;
                    this.message = message;
                    this.thumbnail = thumbnail;
                    this.colorName = colorName;
                    this.badges = badges;
                }
            };
            LiveEventEmojis = class LiveEventEmojis extends LiveEvent {
                constructor(emojis) {
                    super(4);
                    this.emojis = emojis;
                }
            };
            LiveEventDonation = class LiveEventDonation extends LiveEvent {
                constructor(amount, name, message, thumbnail, expire, colorDonation) {
                    super(5);
                    this.amount = amount;
                    this.name = name;
                    this.message = message ?? "";
                    this.thumbnail = thumbnail;
                    this.expire = expire;
                    this.colorDonation = colorDonation;
                }
            };
            LiveEventViewCount = class LiveEventViewCount extends LiveEvent {
                constructor(viewCount) {
                    super(10);
                    this.viewCount = viewCount;
                }
            };
            LiveEventRaid = class LiveEventRaid extends LiveEvent {
                constructor(targetUrl, targetName, targetThumbnail) {
                    super(100);
                    this.targetUrl = targetUrl;
                    this.targetName = targetName;
                    this.targetThumbnail = targetThumbnail;
                }
            };
            ContentPager = class ContentPager {
                constructor(results, hasMore, context) {
                    this.plugin_type = "ContentPager";
                    this.results = results ?? [];
                    this.hasMore = hasMore ?? false;
                    this.context = context ?? {};
                }
                hasMorePagers() { return this.hasMore; }
                nextPage() { return new ContentPager([], false, this.context); }
            };
            VideoPager = class VideoPager {
                constructor(results, hasMore, context) {
                    this.plugin_type = "VideoPager";
                    this.results = results ?? [];
                    this.hasMore = hasMore ?? false;
                    this.context = context ?? {};
                }
                hasMorePagers() { return this.hasMore; }
                nextPage() { return new VideoPager([], false, this.context); }
            };
            ChannelPager = class ChannelPager {
                constructor(results, hasMore, context) {
                    this.plugin_type = "ChannelPager";
                    this.results = results ?? [];
                    this.hasMore = hasMore ?? false;
                    this.context = context ?? {};
                }
                hasMorePagers() { return this.hasMore; }
                nextPage() { return new Pager([], false, this.context); }
            };
            PlaylistPager = class PlaylistPager {
                constructor(results, hasMore, context) {
                    this.plugin_type = "PlaylistPager";
                    this.results = results ?? [];
                    this.hasMore = hasMore ?? false;
                    this.context = context ?? {};
                }
                hasMorePagers() { return this.hasMore; }
                nextPage() { return new Pager([], false, this.context); }
            };
            CommentPager = class CommentPager {
                constructor(results, hasMore, context) {
                    this.plugin_type = "CommentPager";
                    this.results = results ?? [];
                    this.hasMore = hasMore ?? false;
                    this.context = context ?? {};
                }
                hasMorePagers() { return this.hasMore; }
                nextPage() { return new Pager([], false, this.context); }
            };
            plugin = {
                config: {},
                settings: {}
            };
            source = {
                getHome() { return new ContentPager([], false, {}); },
                enable(config) { },
                disable() { },
                searchSuggestions(query) { return []; },
                getSearchCapabilities() { return { types: [], sorts: [] }; },
                search(query, type, order, filters) { return new ContentPager([], false, {}); },
                isChannelUrl(url) { return false; },
                getChannel(url) { return null; },
                getChannelCapabilities() { return { types: [], sorts: [] }; },
                getChannelContents(url, type, order, filters) { return new ContentPager([], false, {}); },
                isContentDetailsUrl(url) { return false; },
                getContentDetails(url) { },
            };
            URLSearchParams = class URLSearchParams {
                constructor(init) {
                    this._entries = {};
                    if (typeof init === 'string') {
                        if (init !== '') {
                            init = init.replace(/^\?/, '');
                            const attributes = init.split('&');
                            let attribute;
                            for (let i = 0; i < attributes.length; i++) {
                                attribute = attributes[i].split('=');
                                this.append(decodeURIComponent(attribute[0]), (attribute.length > 1) ? decodeURIComponent(attribute[1]) : '');
                            }
                        }
                    }
                    else if (init instanceof URLSearchParams) {
                        init.forEach((value, name) => {
                            this.append(value, name);
                        });
                    }
                }
                append(name, value) {
                    value = value.toString();
                    if (name in this._entries) {
                        this._entries[name].push(value);
                    }
                    else {
                        this._entries[name] = [value];
                    }
                }
                delete(name) {
                    delete this._entries[name];
                }
                get(name) {
                    return (name in this._entries) ? this._entries[name][0] : null;
                }
                getAll(name) {
                    return (name in this._entries) ? this._entries[name].slice(0) : [];
                }
                has(name) {
                    return (name in this._entries);
                }
                set(name, value) {
                    this._entries[name] = [value.toString()];
                }
                forEach(callback) {
                    let entries;
                    for (let name in this._entries) {
                        if (this._entries.hasOwnProperty(name)) {
                            entries = this._entries[name];
                            for (let i = 0; i < entries.length; i++) {
                                callback.call(this, entries[i], name, this);
                            }
                        }
                    }
                }
                keys() {
                    const items = [];
                    this.forEach((value, name) => { items.push(name); });
                    return createIterator(items);
                }
                values() {
                    const items = [];
                    this.forEach((value) => { items.push(value); });
                    return createIterator(items);
                }
                entries() {
                    const items = [];
                    this.forEach((value, name) => { items.push([value, name]); });
                    return createIterator(items);
                }
                toString() {
                    let searchString = '';
                    this.forEach((value, name) => {
                        if (searchString.length > 0)
                            searchString += '&';
                        searchString += encodeURIComponent(name) + '=' + encodeURIComponent(value);
                    });
                    return searchString;
                }
            };
            bridge = {
                buildFlavor: null,
                buildVersion: null,
                devSubmit: function (label, data) { },
                isLoggedIn: function () { },
                log: function (str) { },
                throwTest: function (str) { },
                toast: function (str) { },
            };
            http = {
                GET: function (url, headers, useAuth) { },
                POST: function (url, body, headers, useAuth) { },
                batch: function () { },
                getDefaultClient: function (withAuth) { },
                newClient: function (withAuth) { },
                request: function (method, url, headers, useAuth) { },
                requestWithBody: function (method, url, body, headers, useAuth) { },
                socket: function (url, headers, useAuth) { },
            };
            utility = {
                fromBase64: function (str) { },
                md5: function (arr) { },
                md5String: function (str) { },
                randomUUID: function () { },
                sha256: function (arr) { },
                sha256String: function (str) { },
                toBase64: function (arr) { },
            };
        }
    };
});
System.register("script", [], function (exports_8, context_8) {
    "use strict";
    var PLATFORM, PLATFORM_SHORT, LIMIT_VIDEOS, LIMIT_COMMENTS, ORDER_VIDEOS, ORDER_COMMENTS, STREAM_LANGUAGE, URL_BASE, URL_CHANNEL, URL_PROFILE, URL_API_CONFIG, URL_API_CHANNELS, URL_API_HOME, URL_API_PLAYLIST, URL_API_PLAYLISTS, URL_API_VIDEO_DETAILS, URL_API_VIDEO_PLAYER, URL_API_COMMENTS, URL_API_SEARCH, URL_ICON, URL_ICON_PNG, URL_BANNER, URL_BANNER_PNG, URL_PLACEHOLDER_AVATAR, REGEX_VIDEO_URL, REGEX_CHANNEL_URL, REGEX_PLAYLIST_URL, PSPROXY_SERVERS, HEADER_INTEGRITY, headerDict, channelIcons, cachedChannels, config, _settings, yt, errorLog, logErrors, Utils, utils, HomePager, PietsmietDECommentPager, Youtube;
    var __moduleName = context_8 && context_8.id;
    function hasIntegrity() {
        return headerDict.hasOwnProperty(HEADER_INTEGRITY) && !utils.isNullOrEmpty(headerDict[HEADER_INTEGRITY]);
    }
    function getPlatformId(id) {
        return new PlatformID(PLATFORM, id.toString(), config.id);
    }
    function parseChannelSlug(url) {
        const matches = REGEX_CHANNEL_URL.exec(url);
        return matches ? matches[1] : '';
    }
    function parsePlaylistSlug(url) {
        const matches = REGEX_PLAYLIST_URL.exec(url);
        return matches ? matches[1] : '';
    }
    function parseVideoSlug(url) {
        const matches = REGEX_VIDEO_URL.exec(url);
        return matches ? matches[1] : '';
    }
    function parseIdFromSlug(slug) {
        return parseInt(slug.split("-", 1)[0]);
    }
    function parseThumbnailVariations(variationsDict) {
        return new Thumbnails(variationsDict.map(y => new Thumbnail(y.url, y.height)));
    }
    function parseAuthor(videoDict) {
        const channel = videoDict.channels[0];
        const url = URL_CHANNEL + channel.url_slug;
        const cachedChannel = source.getChannel(url);
        return new PlatformAuthorLink(getPlatformId(channel.id), channel.title, url, channelIcons[channel.id], cachedChannel.subscribers);
    }
    function parseDate(date) {
        return parseInt((new Date(date)).getTime() / 1000);
    }
    function getPlaceholderAuthor() {
        return new PlatformAuthorLink(platformPlaylistId, PLATFORM, URL_BASE, channelIcons[37]);
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
    function getProtected(url_s) {
        if (!hasIntegrity()) {
            fetchIntegrityValue();
        }
        const response = utils.get(url_s, headerDict);
        if (!response.isOk) {
            utils.error(`Failed to get ${url_s} [${response.code}]`, null, true);
            if (response.status === 400)
                fetchIntegrityValue();
        }
        return response.body;
    }
    function getProtectedJson(url_s) {
        return utils.getJson(url_s, headerDict);
    }
    function fetchIntegrityValue() {
        const confResponse = utils.get(URL_API_CONFIG, {});
        if (!confResponse.isOk)
            utils.error(`Failed to get integrity value from ${URL_API_CONFIG} [${confResponse.code}]`, null, true);
        const results = JSON.parse(confResponse.body);
        headerDict[utils.atob(results.h)] = utils.atob(results.v);
    }
    function fetchChannels() {
        cachedChannels = getProtectedJson(URL_API_CHANNELS);
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
            url: URL_BASE + x.url,
            shareUrl: x.short_url,
            isLive: false
        }));
    }
    function getPlaylistDetailsFromId(id) {
        const url = URL_API_PLAYLIST + id;
        return getProtectedJson(url).playlist;
    }
    function getCommentResults(contextUrl, page) {
        const video_id = parseVideoSlug(contextUrl);
        const results = getProtectedJson(`${URL_API_COMMENTS}${video_id}&page=${page}`);
        const comments = results.data?.map(i => {
            const c = new Comment({
                contextUrl: contextUrl,
                author: new PlatformAuthorLink(getPlatformId(i.id), i.user.name ?? "", URL_PROFILE + i.user.url_slug, i.user.avatar?.variations[0]?.url ?? URL_PLACEHOLDER_AVATAR),
                message: i.text ?? "",
                date: Date.parse(i.created_at) / 1000,
                replyCount: i.count_replies,
                rating: new RatingLikesDislikes(i.likes_count, i.dislikes_count),
                context: { commentId: i.id }
            });
            return c;
        }) ?? [];
        const hasMore = results.meta.current_page < results.meta.last_page;
        return new PietsmietDECommentPager(comments, hasMore, contextUrl);
    }
    return {
        setters: [],
        execute: function () {
            PLATFORM = "PietsmietDE";
            PLATFORM_SHORT = "PSDE";
            LIMIT_VIDEOS = 500;
            LIMIT_COMMENTS = 100;
            ORDER_VIDEOS = "latest";
            ORDER_COMMENTS = "latest";
            STREAM_LANGUAGE = "German";
            URL_BASE = "https://www.pietsmiet.de";
            URL_CHANNEL = `${URL_BASE}/videos/channels/`;
            URL_PROFILE = `${URL_BASE}/profile/`;
            URL_API_CONFIG = `${URL_BASE}/api/v1/config/i`;
            URL_API_CHANNELS = `${URL_BASE}/api/v1/videos/channels?page=`;
            URL_API_HOME = `${URL_BASE}/api/v1/videos?limit=${LIMIT_VIDEOS}&order=${ORDER_VIDEOS}&prioritize_featured=0&page=`;
            URL_API_PLAYLIST = `${URL_BASE}/api/v1/videos/playlists/`;
            URL_API_PLAYLISTS = `${URL_BASE}/api/v1/videos/playlists?limit=${LIMIT_VIDEOS}&order=${ORDER_VIDEOS}&page=1`;
            URL_API_VIDEO_DETAILS = `${URL_BASE}/api/v1/videos/`;
            URL_API_VIDEO_PLAYER = `${URL_BASE}/api/v1/utility/player?preset=quality&video=`;
            URL_API_COMMENTS = `${URL_BASE}/api/v1/utility/comments?order=${ORDER_COMMENTS}&type=video&limit=${LIMIT_COMMENTS}&id=`;
            URL_API_SEARCH = `${URL_BASE}/api/v1/search?page=`;
            URL_ICON = `${URL_BASE}/assets/pietsmiet/brand/icon.svg`;
            URL_ICON_PNG = "https://i.vgy.me/CZ2jjB.png";
            URL_BANNER = `${URL_BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`;
            URL_BANNER_PNG = "https://i.imgur.com/8D68cRq.png";
            URL_PLACEHOLDER_AVATAR = `${URL_BASE}/assets/pietsmiet/placeholder-1-1.jpg`;
            REGEX_VIDEO_URL = /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/;
            REGEX_CHANNEL_URL = /https:\/\/www\.pietsmiet\.de\/videos\/channels\/(.*)/;
            REGEX_PLAYLIST_URL = /https:\/\/www\.pietsmiet\.de\/videos\/playlists\/(.*)/;
            PSPROXY_SERVERS = [
                "https://ytapi.minopia.de/",
                "https://ytapi2.minopia.de/"
            ];
            HEADER_INTEGRITY = 'X-Origin-Integrity';
            headerDict = {};
            channelIcons = {
                8: "https://yt3.googleusercontent.com/ytc/AIdro_nMgWqMfXY78nUTzabB0TvSF1OHeUtMc93WKpG2hnbRW3k=s176-c-k-c0x00ffffff-no-rj",
                9: "https://yt3.googleusercontent.com/qR-4gEbPO0XQlSEwHNgNt7EG5dB_sjQ5WVExWhT11D9ItY3G24l8Egw7isWZhcsUGYcfjaT4tg=s176-c-k-c0x00ffffff-no-rj",
                10: "https://yt3.googleusercontent.com/ytc/AIdro_nI1TZILbTDn38tNbzDb_K2rxe6c5V7UGn4hVjG2DX4jg=s176-c-k-c0x00ffffff-no-rj",
                12: "https://yt3.googleusercontent.com/ytc/AIdro_kej_tg4mojF1qht3fNepeKyR10sAlVK4oBwUYL2hAeSg=s176-c-k-c0x00ffffff-no-rj",
                37: URL_ICON_PNG,
                44: "https://yt3.googleusercontent.com/ytc/AIdro_nnAWki_jzSkHEzvkkT7TDlb-WxDBIc-rcqhFoEsp0tMg=s176-c-k-c0x00ffffff-no-rj"
            };
            cachedChannels = {};
            config = {
                "use_yt_proxy": true,
                "yt_proxy_server": 0,
                "merge_yt_metrics": true
            };
            _settings = {
                "use_yt_proxy": true,
                "yt_proxy_server": 0,
                "merge_yt_metrics": true
            };
            errorLog = "";
            logErrors = true;
            Utils = class Utils {
                error = (message, error, _throw = false) => {
                    const fmt = utils.log(`${message}: ${error} (${JSON.stringify(error)})`, true);
                    if (_throw) {
                        const log = errorLog;
                        errorLog = "";
                        throw new ScriptException(`${fmt}\n\n${log}`);
                    }
                };
                log = (message, toast = false) => {
                    message = JSON.stringify(message);
                    const formattedMessage = `[${new Date().toISOString()}] [${PLATFORM_SHORT}] ${message}`;
                    log(formattedMessage);
                    if (toast)
                        bridge.toast(message);
                    try {
                        if (logErrors)
                            errorLog += `${errorLog}\n${message}`;
                    }
                    catch (error) { }
                    return formattedMessage;
                };
                debug = (obj) => {
                    bridge.throwTest((utils.log(`Debug: ${JSON.stringify(obj)}`)));
                };
                getItemsByProp = (dict, prop, value) => {
                    let foundObjects = [];
                    for (let key in dict) {
                        if (dict[key][prop] === value) {
                            foundObjects.push(dict[key]);
                        }
                    }
                    return foundObjects;
                };
                getItemByProp = (dict, prop, value, defaultValue = null) => {
                    try {
                        const items = this.getItemsByProp(dict, prop, value);
                        return items.length > 0 ? items[0] : defaultValue;
                    }
                    catch (error) {
                        return defaultValue;
                    }
                };
                prepend = (array, value) => {
                    const newArray = array.slice();
                    newArray.unshift(value);
                    return newArray;
                };
                isNullOrEmpty = (str) => {
                    return str === null || str === "";
                };
                isObjectEmpty = (obj) => {
                    return obj !== null && Object.keys(obj).length === 0;
                };
                atob = (encodedData) => {
                    return String.fromCharCode(...utility.fromBase64(encodedData));
                };
                updateQueryStringParameter = (url, key, value) => {
                    let queryString = '';
                    if (url.indexOf('?') !== -1) {
                        const urlParts = url.split('?');
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
                        }
                        else {
                            paramsArray.push(`${key}=${value}`);
                        }
                        queryString = paramsArray.join('&');
                    }
                    else {
                        queryString = `?${key}=${value}`;
                    }
                    return `${url}${queryString}`;
                };
                getLastPart = (inputString, separator = '/') => {
                    if (!inputString)
                        return '';
                    const parts = inputString.split(separator);
                    return parts[parts.length - 1];
                };
                format = (input, ...args) => {
                    return input.replace(/(\{\d+\})/g, function (a) {
                        return args[+(a.substr(1, a.length - 2)) || 0];
                    });
                };
                clone = (obj) => {
                    return JSON.parse(JSON.stringify(obj));
                };
                get = (url_s, headers = {}, name = null) => {
                    url_s = Array.isArray(url_s) ? url_s : [url_s];
                    name = name ?? PLATFORM_SHORT;
                    for (let url of url_s) {
                        try {
                            utils.log(`GET ${url}`);
                            const response = http.GET(url, headers);
                            if (!response.isOk) {
                                utils.error(`Failed to get ${url} [${response.code}]`, null, true);
                            }
                            return response;
                        }
                        catch (error) {
                            utils.error(`Error fetching video info: ${url}:`, error, true);
                        }
                    }
                    utils.error(`${url_s.length} URLs failed to fetch`, null, true);
                };
                getJson = (url_s, headers = {}, name = null) => {
                    headers["Accept"] = "application/json";
                    const response = this.get(url_s, headers, name);
                    return JSON.parse(response.body);
                };
            };
            utils = new Utils();
            source.setSettings = function (settings) {
                _settings = (utils.isObjectEmpty(settings)) ? _settings : settings;
            };
            source.enable = function (conf, settings, savedState) {
                config = (utils.isObjectEmpty(conf)) ? config : conf;
                _settings = (utils.isObjectEmpty(settings)) ? _settings : settings;
                fetchIntegrityValue();
                fetchChannels();
                yt = new Youtube();
                let msg = `plugin enabled | ${HEADER_INTEGRITY}=${headerDict[HEADER_INTEGRITY]} | ${Object.keys(cachedChannels).length} channels | ${Object.keys(channelIcons).length} icons`;
                msg = utils.log(msg);
                return msg;
            };
            source.disable = function (conf, settings, savedState) {
                const msg = utils.log(`plugin disabled`);
                return msg;
            };
            source.getHome = function () {
                return new ContentPager(getVideoResults(1), true);
            };
            HomePager = class HomePager extends VideoPager {
                page;
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
            };
            source.getSearchCapabilities = () => {
                return {
                    types: [Type.Feed.Mixed],
                    sorts: [Type.Order.Chronological],
                    filters: []
                };
            };
            source.search = function (query, type, order, filters) {
                return new ContentPager([], false);
            };
            source.getSearchChannelContentsCapabilities = function () {
                return {
                    types: [Type.Feed.Mixed],
                    sorts: [Type.Order.Chronological],
                    filters: []
                };
            };
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
            source.isPlaylistUrl = function (url) {
                return REGEX_PLAYLIST_URL.test(url);
            };
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
                    author: firstVideoAuthor,
                    name: playlistDetails.title,
                    videoCount: playlistDetails.videos_count,
                    contents: new VideoPager(playlistVideos)
                });
            };
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
                };
                if (_settings["use_yt_proxy"]) {
                    try {
                        const ytdata = yt.get(video_id);
                        if (ytdata === null) {
                            utils.error(`Unable to fetch Youtube data for ${video_id}`, {}, false);
                            return new PlatformVideoDetails(pvd);
                        }
                        const yt_data = ytdata["youtube-data"]["items"][0];
                        const yt_dislikes = ytdata["youtube-dislike"];
                        const yt_video_id = yt_data["id"];
                        const yt_viewCount = parseInt(yt_data["statistics"]["viewCount"]);
                        const yt_likeCount = parseInt(yt_data["statistics"]["likeCount"]);
                        const yt_dislikeCount = yt_dislikes["dislikes"];
                        const yt_commentCount = parseInt(yt_data["statistics"]["commentCount"]);
                        const yt_subtitles = ytdata["youtube-transcripts"];
                        if (yt_subtitles) {
                            for (var [name, transcript] of Object.entries(yt_subtitles)) {
                                const transcript_url = transcript["url"] + "&format=vtt";
                                if (transcript["is_generated"] && !transcript["is_translatable"])
                                    name += " (auto-translated)";
                                pvd.subtitles.push({
                                    name: name,
                                    url: transcript_url,
                                    format: 'text/vtt',
                                    getSubtitles() {
                                        try {
                                            return utils.get(transcript_url)?.body ?? '';
                                        }
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
                            }
                            else {
                                pvd["rating"] = new RatingLikesDislikes(likeCount + yt_likeCount, yt_dislikeCount);
                            }
                            pvd["viewCount"] = yt_viewCount;
                        }
                        pvd["description"] =
                            `${detailResults.video.short_url}?ref=grayjay (Likes: ${detailResults.video.likes_count} Comments: ${detailResults.video.comments_count})<br/>` +
                                `https://youtu.be/${yt_video_id}?ref=grayjay (Views: ${yt_viewCount} Likes: ${yt_likeCount} Dislikes: ${yt_dislikeCount} Comments: ${yt_commentCount})<br/><br/>` +
                                pvd["description"];
                    }
                    catch (error) {
                        utils.error(`Unable to fetch Youtube data for ${video_id}: ${error}`, error, false);
                    }
                }
                return new PlatformVideoDetails(pvd);
            };
            source.getComments = function (url) {
                return getCommentResults(url, 1);
            };
            PietsmietDECommentPager = class PietsmietDECommentPager extends CommentPager {
                hasMore;
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
            };
            Youtube = class Youtube {
                headers;
                constructor() {
                    this.headers = {
                        'X-Powered-By': 'GrayJay',
                        'X-GrayJay-Source': PLATFORM_SHORT
                    };
                }
                get = (video_id) => {
                    try {
                        const prefered_server_index = _settings["yt_proxy_server"] ?? 0;
                        const prefered_server = PSPROXY_SERVERS[prefered_server_index];
                        const url = `${prefered_server}?videoId=${video_id}`;
                        utils.log(url, true);
                        const response = utils.getJson(url, this.headers, "YTProxy");
                        return response || null;
                    }
                    catch (error) {
                        utils.error(`[Youtube] ${video_id}: ${error?.message}`, error);
                        throw error;
                    }
                };
            };
            log("LOADED");
        }
    };
});
//# sourceMappingURL=script.ts.map