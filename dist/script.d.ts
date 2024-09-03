declare module "consts" {
    export interface PlatformConstants {
        PLATFORM: string;
        PLATFORM_SHORT: string;
    }
    export const platform: PlatformConstants;
    export interface LimitConstants {
        VIDEOS: number;
        COMMENTS: number;
    }
    export const limits: LimitConstants;
    export interface OrderConstants {
        VIDEOS: string;
        COMMENTS: string;
    }
    export const order: OrderConstants;
    export interface StreamConstants {
        LANGUAGE: string;
    }
    export const stream: StreamConstants;
    export interface UrlBaseConstants {
        BASE: string;
        CHANNEL: string;
        PROFILE: string;
    }
    export const urlBase: UrlBaseConstants;
    export interface ApiUrlConstants {
        CONFIG: string;
        CHANNELS: string;
        HOME: string;
        PLAYLIST: string;
        PLAYLISTS: string;
        VIDEO_DETAILS: string;
        VIDEO_PLAYER: string;
        COMMENTS: string;
        SEARCH: string;
    }
    export const apiUrl: ApiUrlConstants;
    export interface UrlConstants {
        ICON: string;
        ICON_PNG: string;
        BANNER: string;
        BANNER_PNG: string;
        PLACEHOLDER_AVATAR: string;
    }
    export const urls: UrlConstants;
    export interface RegexConstants {
        VIDEO_URL: RegExp;
        CHANNEL_URL: RegExp;
        PLAYLIST_URL: RegExp;
    }
    export const regex: RegexConstants;
    export interface PspProxyServers {
        SERVERS: string[];
    }
    export const pspProxyServers: PspProxyServers;
    export interface HeaderIntegrity {
        INTEGRITY: string;
    }
    export const headerIntegrity: HeaderIntegrity;
}
declare module "apis/pietsmiet.de/types" {
    export interface PSDEConstants {
        readonly API: Record<string, Record<string, any>>;
        readonly URLs: Record<string, string>;
        readonly Limits: Record<string, number>;
        readonly Orders: Record<string, string>;
        readonly Platform: Record<string, string>;
        readonly Stream: Record<string, string>;
        readonly ChannelIcons: Record<number, string>;
    }
    export const pietsmietDE: PSDEConstants;
}
declare module "apis/pietsmiet.de/index" {
    export * from "apis/pietsmiet.de/types";
}
declare module "apis/pietsmiet.de/responses/index" {
    export * from './channels.schema.d.ts';
    export * from './comments.schema.d.ts';
    export * from './config.schema.d.ts';
    export * from './home.schema.d.ts';
    export * from './playlist.schema.d.ts';
    export * from './playlists.schema.d.ts';
    export * from './search.schema.d.ts';
    export * from './video_details.schema.d.ts';
    export * from './video_player.schema.d.ts';
}
declare module "apis/ytapi.minopia.de/responses/index" {
    export * from './proxy.schema.d.ts';
}
declare module "index" {
    export * from "consts";
    export * from "apis/pietsmiet.de/index";
    export * from "apis/pietsmiet.de/responses/index";
    export * from "apis/ytapi.minopia.de/responses/index";
}
declare module "script.autocomplete" {
    export {};
}
declare module "script" { }
//# sourceMappingURL=script.d.ts.map