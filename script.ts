// region Defines
import { ScriptException } from 'grayjay-plugin-sdk';

const PLATFORM = "PietsmietDE";
const PLATFORM_SHORT = "PSDE";

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
const URL_API_PLAYLIST = `${URL_BASE}/api/v1/videos/playlists/`;
const URL_API_PLAYLISTS = `${URL_BASE}/api/v1/videos/playlists?limit=${LIMIT_VIDEOS}&order=${ORDER_VIDEOS}&page=1`;
const URL_API_VIDEO_DETAILS = `${URL_BASE}/api/v1/videos/`; // include[]=playlist
const URL_API_VIDEO_PLAYER = `${URL_BASE}/api/v1/utility/player?preset=quality&video=`;
const URL_API_COMMENTS = `${URL_BASE}/api/v1/utility/comments?order=${ORDER_COMMENTS}&type=video&limit=${LIMIT_COMMENTS}&id=`; // &include[]=replies
const URL_API_SEARCH = `${URL_BASE}/api/v1/search?page=`; // &query= &part=videos &part=playlists

const URL_ICON = `${URL_BASE}/assets/pietsmiet/brand/icon.svg`;
const URL_ICON_PNG = "https://i.vgy.me/CZ2jjB.png"; // Todo: Find png on their website or implement svg parsing into GrayJay @Kelvin-FUTO
const URL_BANNER = `${URL_BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`;
const URL_BANNER_PNG = "https://i.imgur.com/8D68cRq.png"; // Todo: Find png on their website or implement svg parsing into GrayJay @Kelvin-FUTO
const URL_PLACEHOLDER_AVATAR = `${URL_BASE}/assets/pietsmiet/placeholder-1-1.jpg`;

const REGEX_VIDEO_URL = /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/; // /https:\/\/www\.pietsmiet\.de\/videos\/(.*)/;
const REGEX_CHANNEL_URL = /https:\/\/www\.pietsmiet\.de\/videos\/channels\/(.*)/;
const REGEX_PLAYLIST_URL = /https:\/\/www\.pietsmiet\.de\/videos\/playlists\/(.*)/;

const PSPROXY_SERVERS = [
    "https://ytapi.minopia.de/",
    "https://ytapi2.minopia.de/"
];

const HEADER_INTEGRITY = 'X-Origin-Integrity';
let headerDict: Record<string, string> = {};

const channelIcons: Record<number, string> = {
    8: "https://yt3.googleusercontent.com/ytc/AIdro_nMgWqMfXY78nUTzabB0TvSF1OHeUtMc93WKpG2hnbRW3k=s176-c-k-c0x00ffffff-no-rj",
    9: "https://yt3.googleusercontent.com/qR-4gEbPO0XQlSEwHNgNt7EG5dB_sjQ5WVExWhT11D9ItY3G24l8Egw7isWZhcsUGYcfjaT4tg=s176-c-k-c0x00ffffff-no-rj",
    10: "https://yt3.googleusercontent.com/ytc/AIdro_nI1TZILbTDn38tNbzDb_K2rxe6c5V7UGn4hVjG2DX4jg=s176-c-k-c0x00ffffff-no-rj",
    12: "https://yt3.googleusercontent.com/ytc/AIdro_kej_tg4mojF1qht3fNepeKyR10sAlVK4oBwUYL2hAeSg=s176-c-k-c0x00ffffff-no-rj",
    37: URL_ICON_PNG,
    44: "https://yt3.googleusercontent.com/ytc/AIdro_nnAWki_jzSkHEzvkkT7TDlb-WxDBIc-rcqhFoEsp0tMg=s176-c-k-c0x00ffffff-no-rj"
};

let cachedChannels: Record<string, any> = {}; // filled in later

interface Config {
    use_yt_proxy: boolean;
    yt_proxy_server: number;
    merge_yt_metrics: boolean;
}

var config: Config = {
    "use_yt_proxy": true,
    "yt_proxy_server": 0,
    "merge_yt_metrics": true
};

var _settings: Config = {
    "use_yt_proxy": true,
    "yt_proxy_server": 0,
    "merge_yt_metrics": true
};

let yt: any;
let errorLog = "";
const logErrors = true;
// endregion Defines

// region Utils
class Utils {
    error(message: string, error: any, _throw = false): void {
        const fmt = this.log(`${message}: ${error} (${JSON.stringify(error)})`, true);
        if (_throw) {
            const log = errorLog;
            errorLog = "";
            throw new ScriptException(`${fmt}\n\n${log}`);
        }
    }

    log(message: any, toast = false): string {
        message = JSON.stringify(message);
        const formattedMessage = `[${new Date().toISOString()}] ${message}`;
        // Rest of the log function implementation...
        return formattedMessage;
    }

    // Add other utility methods here...
}

