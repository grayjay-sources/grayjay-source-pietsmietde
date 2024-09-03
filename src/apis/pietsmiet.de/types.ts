// consts.ts

export interface PSDEConstants {
    readonly API: Record<string, Record<string, any>>;
    readonly URLs: Record<string, string>;
    readonly Limits: Record<string, number>;
    readonly Orders: Record<string, string>;
    readonly Platform: Record<string, string>;
    readonly Stream: Record<string, string>;
    readonly ChannelIcons: Record<number, string>;
}

export const pietsmietDE: PSDEConstants = {
    API: {
        Config: { URL: "${BASE_URL}", Response:  },
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
};

// Helper functions to access nested properties
function getProperty(obj: Record<string, any>, ...keys: string[]): any {
    return keys.reduce((acc, key) => acc && acc[key], obj);
}