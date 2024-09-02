// consts.ts

export interface PietsmietDEConfig {
    readonly API: Record<string, Record<string, string>>;
    readonly URLs: Record<string, string>;
    readonly Limits: Record<string, number>;
    readonly Orders: Record<string, string>;
    readonly Platform: Record<string, string>;
    readonly Stream: Record<string, string>;
  }
  
  export const pietsmietDE: PietsmietDEConfig = {
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
  };
  
  // Helper functions to access nested properties
  function getProperty(obj: Record<string, any>, ...keys: string[]): any {
    return keys.reduce((acc, key) => acc && acc[key], obj);
  }