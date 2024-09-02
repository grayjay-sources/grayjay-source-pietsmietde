// consts.ts

// Platform
export const PLATFORM = "PietsmietDE";
export const PLATFORM_SHORT = "PSDE";

// Limits
export const LIMIT_VIDEOS = 500;
export const LIMIT_COMMENTS = 100;

// Order
export const ORDER_VIDEOS = "latest";
export const ORDER_COMMENTS = "latest";

// Language
export const STREAM_LANGUAGE = "German";

// Base URL
export const URL_BASE = "https://www.pietsmiet.de";

// Channel URL
export const URL_CHANNEL = `${URL_BASE}/videos/channels/`;

// Profile URL
export const URL_PROFILE = `${URL_BASE}/profile/`;

// API URLs
export const URL_API_CONFIG = `${URL_BASE}/api/v1/config/i`;
export const URL_API_CHANNELS = `${URL_BASE}/api/v1/videos/channels?page=`;
export const URL_API_HOME = `${URL_BASE}/api/v1/videos?limit=${LIMIT_VIDEOS}&order=${ORDER_VIDEOS}&prioritize_featured=0&page=`;
export const URL_API_PLAYLIST = `${URL_BASE}/api/v1/videos/playlists/`;
export const URL_API_PLAYLISTS = `${URL_BASE}/api/v1/videos/playlists?limit=${LIMIT_VIDEOS}&order=${ORDER_VIDEOS}&page=1`;
export const URL_API_VIDEO_DETAILS = `${URL_BASE}/api/v1/videos/`;
export const URL_API_VIDEO_PLAYER = `${URL_BASE}/api/v1/utility/player?preset=quality&video=`;
export const URL_API_COMMENTS = `${URL_BASE}/api/v1/utility/comments?order=${ORDER_COMMENTS}&type=video&limit=${LIMIT_COMMENTS}&id=`;
export const URL_API_SEARCH = `${URL_BASE}/api/v1/search?page=`;

// Image URLs
export const URL_ICON = `${URL_BASE}/assets/pietsmiet/brand/icon.svg`;
export const URL_ICON_PNG = "https://i.vgy.me/CZ2jjB.png";
export const URL_BANNER = `${URL_BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`;
export const URL_BANNER_PNG = "https://i.imgur.com/8D68cRq.png";
export const URL_PLACEHOLDER_AVATAR = `${URL_BASE}/assets/pietsmiet/placeholder-1-1.jpg`;

// Regex
export const REGEX_VIDEO_URL = /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/;
export const REGEX_CHANNEL_URL = /https:\/\/www\.pietsmiet\.de\/videos\/channels\/(.*)/;
export const REGEX_PLAYLIST_URL = /https:\/\/www\.pietsmiet\.de\/videos\/playlists\/(.*)/';

// PSPROXY Servers
export const PSPROXY_SERVERS = [
  "https://ytapi.minopia.de/",
  "https://ytapi2.minopia.de/"
];

// Header Integrity
export const HEADER_INTEGRITY = 'X-Origin-Integrity';

// Channel Icons
export const channelIcons: { [key: number]: string } = {
  8: "https://yt3.googleusercontent.com/ytc/AIdro_nMgWqMfXY78nUTzabB0TvSF1OHeUtMc93WKpG2hnbRW3k=s176-c-k-c0x00ffffff-no-rj",
  9: "https://yt3.googleusercontent.com/qR-4gEbPO0XQlSEwHNgNt7EG5dB_sjQ5WVExWhT11D9ItY3G24l8Egw7isWZhcsUGYcfjaT4tg=s176-c-k-c0x00ffffff-no-rj",
  10: "https://yt3.googleusercontent.com/ytc/AIdro_nI1TZILbTDn38tNbzDb_K2rxe6c5V7UGn4hVjG2DX4jg=s176-c-k-c0x00ffffff-no-rj",
  12: "https://yt3.googleusercontent.com/ytc/AIdro_kej_tg4mojF1qht3fNepeKyR10sAlVK4oBwUYL2hAeSg=s176-c-k-c0x00ffffff-no-rj",
  37: URL_ICON_PNG,
  44: "https://yt3.googleusercontent.com/ytc/AIdro_nnAWki_jzSkHEzvkkT7TDlb-WxDBIc-rcqhFoEsp0tMg=s176-c-k-c0x00ffffff-no-rj"
};
