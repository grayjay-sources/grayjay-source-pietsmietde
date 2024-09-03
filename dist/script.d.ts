declare module "dist/script" { }
declare module "scripts/merge-schemas" {
    export {};
}
declare module "src/consts" {
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
declare module "src/apis/pietsmiet.de/types" {
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
declare module "src/apis/pietsmiet.de/index" {
    export * from "src/apis/pietsmiet.de/types";
}
declare module "src/apis/pietsmiet.de/responses/index" {
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
declare module "src/apis/ytapi.minopia.de/responses/index" {
    export * from './proxy.schema.d.ts';
}
declare module "src/index" {
    export * from "src/consts";
    export * from "src/apis/pietsmiet.de/index";
    export * from "src/apis/pietsmiet.de/responses/index";
    export * from "src/apis/ytapi.minopia.de/responses/index";
}
declare module "src/script.autocomplete" {
    export {};
}
declare module "src/script" { }
declare module "tmp/pietsmiet.de/javascript-client-generated/src/ApiClient" {
    class ApiClient {
        static readonly CollectionFormatEnum: {
            CSV: string;
            SSV: string;
            TSV: string;
            PIPES: string;
            MULTI: string;
        };
        static parseDate(str: string): Date;
        static convertToType(data: (string | Object), type: (string | Array<string> | any | Function)): any;
        static constructFromObject(data: Object | any[], obj: Object | any[], itemType: any): void;
        basePath: string;
        authentications: Array<string>;
        defaultHeaders: Array<string>;
        timeout: number;
        cache: boolean;
        enableCookies: boolean;
        agent: any;
        requestAgent: any;
        paramToString(param: any): string;
        buildUrl(path: string, pathParams: Object): string;
        isJsonMime(contentType: string): boolean;
        jsonPreferredMime(contentTypes: Array<string>): string;
        isFileParam(param: any): boolean;
        normalizeParams(params: any): any;
        buildCollectionParam(param: any[], collectionFormat: any): string | any[];
        applyAuthToRequest(request: Object, authNames: Array<string>): void;
        deserialize(response: Object, returnType: (string | Array<string> | any | Function)): any;
        callApi(path: string, httpMethod: string, pathParams: any, queryParams: any, headerParams: any, formParams: any, bodyParam: Object, authNames: Array<string>, contentTypes: Array<string>, accepts: Array<string>, returnType: (string | any[] | ObjectFunction), callback: any): Object;
    }
    namespace ApiClient {
        let instance: any;
    }
    export default ApiClient;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Action" {
    export default class Action {
        static constructFromObject(data: Object, obj: any): any;
        title: any;
        url: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Advertising" {
    export default class Advertising {
        static constructFromObject(data: Object, obj: any): any;
        nugg: any;
        played: any;
        tag: any;
        time: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Analytics" {
    export default class Analytics {
        static constructFromObject(data: Object, obj: any): any;
        google: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum11ReadAt" {
    export default class AnyOfDatum11ReadAt {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum12SupportAddOn" {
    export default class AnyOfDatum12SupportAddOn {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum13ParticipantCount" {
    export default class AnyOfDatum13ParticipantCount {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum13ParticipantLineup" {
    export default class AnyOfDatum13ParticipantLineup {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum13ReferringTo" {
    export default class AnyOfDatum13ReferringTo {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum13Url" {
    export default class AnyOfDatum13Url {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum13UrlDomain" {
    export default class AnyOfDatum13UrlDomain {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum15Id" {
    export default class AnyOfDatum15Id {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum15PublishDate" {
    export default class AnyOfDatum15PublishDate {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum15Type" {
    export default class AnyOfDatum15Type {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum16Reply" {
    export default class AnyOfDatum16Reply {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum16Timestamp" {
    export default class AnyOfDatum16Timestamp {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum21Channel" {
    export default class AnyOfDatum21Channel {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum21FirstVideo" {
    export default class AnyOfDatum21FirstVideo {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum3RemoteUrl" {
    export default class AnyOfDatum3RemoteUrl {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum7DurationPretty" {
    export default class AnyOfDatum7DurationPretty {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum7FollowingsCount" {
    export default class AnyOfDatum7FollowingsCount {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum7MetaTags" {
    export default class AnyOfDatum7MetaTags {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum7RemoteUrl" {
    export default class AnyOfDatum7RemoteUrl {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum7VideosCount" {
    export default class AnyOfDatum7VideosCount {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum9Avatar" {
    export default class AnyOfDatum9Avatar {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum9Banner" {
    export default class AnyOfDatum9Banner {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum9Description" {
    export default class AnyOfDatum9Description {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfFeedRemoteUrl" {
    export default class AnyOfFeedRemoteUrl {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfFromName" {
    export default class AnyOfFromName {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfLatestVideoDurationPretty" {
    export default class AnyOfLatestVideoDurationPretty {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfLinkLabel" {
    export default class AnyOfLinkLabel {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfLinkUrl" {
    export default class AnyOfLinkUrl {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfLinksNext" {
    export default class AnyOfLinksNext {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfPerspectiveTitle" {
    export default class AnyOfPerspectiveTitle {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfThumbnailRemoteUrl" {
    export default class AnyOfThumbnailRemoteUrl {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfTrendingVideoPerspectiveTitle" {
    export default class AnyOfTrendingVideoPerspectiveTitle {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfUser4Avatar" {
    export default class AnyOfUser4Avatar {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfUser5Avatar" {
    export default class AnyOfUser5Avatar {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfVariation1Url" {
    export default class AnyOfVariation1Url {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/ArticlePreferences" {
    export default class ArticlePreferences {
        static constructFromObject(data: Object, obj: any): any;
        clips: any;
        comments: any;
        likes: any;
        shares: any;
        tags: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AuthorPreferences" {
    export default class AuthorPreferences {
        static constructFromObject(data: Object, obj: any): any;
        publicProfile: any;
        subscriptionEnableIdentification: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Author" {
    export default class Author {
        static constructFromObject(data: Object, obj: any): any;
        blocked: any;
        createdAt: any;
        description: any;
        id: any;
        name: any;
        namePossessive: any;
        preferences: any;
        publicProfile: any;
        reputation: any;
        reputationPretty: any;
        team: any;
        updatedAt: any;
        urlSlug: any;
        username: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Category" {
    export default class Category {
        static constructFromObject(data: Object, obj: any): any;
        description: any;
        id: any;
        slug: any;
        title: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Variation1" {
    export default class Variation1 {
        static constructFromObject(data: Object, obj: any): any;
        file: any;
        height: any;
        url: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Thumbnail" {
    class Thumbnail {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
    namespace Thumbnail {
        namespace CollectionEnum {
            let thumbnail: string;
        }
        type CollectionEnum = string;
    }
    export default Thumbnail;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Article" {
    export default class Article {
        static constructFromObject(data: Object, obj: any): any;
        author: any;
        categories: any;
        commentsCount: any;
        featured: any;
        id: any;
        intro: any;
        preferences: any;
        publishDate: any;
        slug: any;
        text: any;
        thumbnail: any;
        title: any;
        url: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AtedAt" {
    export default class AtedAt {
        static constructFromObject(data: Object, obj: any): any;
        _date: any;
        timezone: any;
        timezoneType: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/AvatarVariation" {
    class AvatarVariation {
        static constructFromObject(data: Object, obj: any): any;
        file: any;
        height: any;
        url: any;
    }
    namespace AvatarVariation {
        namespace FileEnum {
            let _05070b3df9dfba0ef3a825b50e79252ac5793876Jpg: string;
            let _91b805d14533d253e88168777efc515de2471d8bJpg: string;
            let _337eac33e9b9611cfc558e3264d3ac0089a15599Jpg: string;
            let _023fddb697b8202d6553bd37c2da79e305ae8aa7Jpg: string;
            let d02e2cf8f3f219db3b8ff3b3a6d0d185356c7512Jpg: string;
            let cf2ec2474cc540d3612f0754c1f5e9306fc61c79Jpg: string;
            let _8c0602d1ab5c896c18310e4cfac691e8cbe97497Jpg: string;
            let _2f8a2ce60431ad7eb060157e15e6a7272721d7ceJpg: string;
            let _324cfb7b3fd72cbe2c31d04fad1574551cadab39Jpg: string;
            let cc3c3279e4f763ba17471684800f6f695176ada8Jpg: string;
            let ea73de55528a4a8329e6b8b87a3e26acb1c581d8Jpg: string;
            let _0653935b38b2737823aa946acf19e85b685ae38cJpg: string;
            let f37394ce42cd9d5fb5ecdc04a15ee4fcdf2ae0e9Jpg: string;
            let _43661dea23ff214917ed39709d4e027bcee40d1cJpg: string;
            let _1ba264d2e2f0bad7f1c817e67ff470539534f616Jpg: string;
            let d84fcf7a59c9e05dfd8b39905037de661389b386Jpg: string;
            let bd52b49d401a94a2cbc0d1381f1641f59cc90fa1Jpg: string;
            let a02f1cf239d45b92edc9123d75108c1d832bf00cJpg: string;
            let cca3c488a674bc30a00b9908270c9d0d67e7cbb8Jpg: string;
            let _8eaa6b0988867d4e44b2078ba611399287bc4fdbJpg: string;
        }
        type FileEnum = string;
    }
    export default AvatarVariation;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Avatar" {
    class Avatar {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
    namespace Avatar {
        namespace CollectionEnum {
            let avatar: string;
        }
        type CollectionEnum = string;
    }
    export default Avatar;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Variation" {
    export default class Variation {
        static constructFromObject(data: Object, obj: any): any;
        file: any;
        height: any;
        url: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Avatar1" {
    export default class Avatar1 {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Discount" {
    export default class Discount {
        static constructFromObject(data: Object, obj: any): any;
        amount: any;
        currentBillingCycle: any;
        id: any;
        name: any;
        neverExpires: any;
        numberOfBillingCycles: any;
        quantity: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Braintree" {
    export default class Braintree {
        static constructFromObject(data: Object, obj: any): any;
        addOns: any;
        billingDayOfMonth: any;
        billingPeriodEndDate: any;
        billingPeriodStartDate: any;
        currentBillingCycle: any;
        daysPastDue: any;
        discounts: any;
        failureCount: any;
        firstBillingDate: any;
        neverExpires: any;
        nextBillAmount: any;
        nextBillingDate: any;
        nextBillingPeriodAmount: any;
        numberOfBillingCycles: any;
        price: any;
        status: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/BraintreePlan" {
    export default class BraintreePlan {
        static constructFromObject(data: Object, obj: any): any;
        addOns: any;
        billingDayOfMonth: any;
        billingFrequency: any;
        createdAt: any;
        currencyIsoCode: any;
        description: any;
        discounts: any;
        id: any;
        merchantId: any;
        name: any;
        numberOfBillingCycles: any;
        plans: any;
        price: any;
        trialDuration: any;
        trialDurationUnit: any;
        trialPeriod: any;
        updatedAt: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Brand" {
    class Brand {
        static constructFromObject(data: Object, obj: any): any;
        color: any;
        link: any;
        logo: any;
    }
    namespace Brand {
        namespace ColorEnum {
            let _039a45: string;
        }
        type ColorEnum = string;
    }
    export default Brand;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/CategoryElement" {
    export default class CategoryElement {
        static constructFromObject(data: Object, obj: any): any;
        description: any;
        id: any;
        slug: any;
        title: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Channel" {
    export default class Channel {
        static constructFromObject(data: Object, obj: any): any;
        description: any;
        followingsCount: any;
        id: any;
        slug: any;
        title: any;
        urlSlug: any;
        videosCount: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/ChannelVideoCountGetRequest" {
    export default class ChannelVideoCountGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        channel: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Channels" {
    export default class Channels {
        static constructFromObject(data: Object, obj: any): any;
        viaMail: any;
        viaWebsite: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Chromecast" {
    export default class Chromecast {
        static constructFromObject(data: Object, obj: any): any;
        enabled: any;
        receiverApplicationId: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestArticlePreferences" {
    export default class LatestArticlePreferences {
        static constructFromObject(data: Object, obj: any): any;
        clips: any;
        comments: any;
        likes: any;
        shares: any;
        tags: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestVideoPerspective" {
    class LatestVideoPerspective {
        static constructFromObject(data: Object, obj: any): any;
        id: any;
        main: any;
        title: any;
        titlePluralized: any;
    }
    namespace LatestVideoPerspective {
        namespace TitlePluralizedEnum {
            let s: string;
            let brammens: string;
            let chris: string;
            let peters: string;
            let seps: string;
            let jules: string;
            let svens: string;
            let hauptsichts: string;
        }
        type TitlePluralizedEnum = string;
    }
    export default LatestVideoPerspective;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Video" {
    export default class Video {
        static constructFromObject(data: Object, obj: any): any;
        commentsCount: any;
        description: any;
        duration: any;
        durationPretty: any;
        featured: any;
        id: any;
        likesCount: any;
        perspectives: any;
        preferences: any;
        publishDate: any;
        remote: any;
        remoteUrl: any;
        shortUrl: any;
        slug: any;
        title: any;
        url: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Clip" {
    export default class Clip {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        duration: any;
        durationPretty: any;
        finished: any;
        id: any;
        slug: any;
        timeEnd: any;
        timeStart: any;
        title: any;
        updatedAt: any;
        video: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SubjectPreferences" {
    export default class SubjectPreferences {
        static constructFromObject(data: Object, obj: any): any;
        clips: any;
        comments: any;
        likes: any;
        shares: any;
        tags: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Subject1" {
    export default class Subject1 {
        static constructFromObject(data: Object, obj: any): any;
        commentsCount: any;
        description: any;
        featured: any;
        id: any;
        likesCount: any;
        preferences: any;
        publishDate: any;
        remote: any;
        remoteUrl: any;
        shortUrl: any;
        slug: any;
        title: any;
        url: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UserPreferences" {
    export default class UserPreferences {
        static constructFromObject(data: Object, obj: any): any;
        publicProfile: any;
        subscriptionEnableIdentification: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/User2" {
    export default class User2 {
        static constructFromObject(data: Object, obj: any): any;
        avatar: any;
        banner: any;
        blocked: any;
        createdAt: any;
        description: any;
        id: any;
        name: any;
        namePossessive: any;
        preferences: any;
        publicProfile: any;
        reputation: any;
        reputationPretty: any;
        team: any;
        updatedAt: any;
        urlSlug: any;
        username: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Comment" {
    export default class Comment {
        static constructFromObject(data: Object, obj: any): any;
        approved: any;
        countReplies: any;
        createdAt: any;
        dislikesCount: any;
        id: any;
        isReply: any;
        likesCount: any;
        pinned: any;
        reply: any;
        subject: any;
        text: any;
        timestamp: any;
        user: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Status" {
    export default class Status {
        static constructFromObject(data: Object, obj: any): any;
        colorBg: any;
        colorText: any;
        createdAt: any;
        isClosed: any;
        name: any;
        reason: any;
        title: any;
        updatedAt: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Preferences1" {
    export default class Preferences1 {
        static constructFromObject(data: Object, obj: any): any;
        commentsOrderOwnFirst: any;
        commentsOrderPopular: any;
        country: any;
        enableDarkmode: any;
        enableDarkmodeSchedule: any;
        enableSpoilers: any;
        publicProfile: any;
        scrollTopRouteChange: any;
        showInPresence: any;
        showInSubscribedUsers: any;
        subscribeNewsletter: any;
        subscriptionEnableIdentification: any;
        subscriptionKeepAds: any;
        timezone: any;
        useGravatar: any;
        videosAutocontinue: any;
        videosAutoplay: any;
        videosPlayerFloating: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/User" {
    export default class User {
        static constructFromObject(data: Object, obj: any): any;
        blocked: any;
        createdAt: any;
        description: any;
        id: any;
        name: any;
        namePossessive: any;
        preferences: any;
        publicProfile: any;
        reputation: any;
        reputationPretty: any;
        team: any;
        updatedAt: any;
        urlSlug: any;
        username: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum13" {
    export default class Datum13 {
        static constructFromObject(data: Object, obj: any): any;
        commentsCount: any;
        createdAt: any;
        description: any;
        descriptionRaw: any;
        dislikesCount: any;
        id: any;
        likesCount: any;
        participantCount: any;
        participantLineup: any;
        participantLineupDescription: any;
        referringTo: any;
        slug: any;
        status: any;
        title: any;
        type: any;
        typeDescription: any;
        updatedAt: any;
        url: any;
        urlDomain: any;
        urlSlug: any;
        user: any;
        voteable: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Links" {
    export default class Links {
        static constructFromObject(data: Object, obj: any): any;
        first: any;
        last: any;
        next: any;
        prev: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Link" {
    export default class Link {
        static constructFromObject(data: Object, obj: any): any;
        active: any;
        label: any;
        url: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Meta" {
    export default class Meta {
        static constructFromObject(data: Object, obj: any): any;
        currentPage: any;
        from: any;
        lastPage: any;
        links: any;
        path: any;
        perPage: any;
        to: any;
        total: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/CommunitySuggestionsGetRequest" {
    export default class CommunitySuggestionsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/ConfigAssetVersionGetRequest" {
    export default class ConfigAssetVersionGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        hash: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum1" {
    export default class Datum1 {
        static constructFromObject(data: Object, obj: any): any;
        code: any;
        flatUrl: any;
        localizedName: any;
        name: any;
        tax: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/ConfigEnumerationsCountriesGetRequest" {
    export default class ConfigEnumerationsCountriesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/ConfigOriginIntegrityHeader" {
    class ConfigOriginIntegrityHeader {
        static constructFromObject(data: Object, obj: any): any;
        h: any;
        v: any;
    }
    namespace ConfigOriginIntegrityHeader {
        namespace HEnum {
            let xOriginIntegrity: string;
            let wC1PcmlnaW4tSW50ZWdyaXR5: string;
        }
        type HEnum = string;
    }
    export default ConfigOriginIntegrityHeader;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Counts" {
    export default class Counts {
        static constructFromObject(data: Object, obj: any): any;
        articles: any;
        channels: any;
        playlists: any;
        podcasts: any;
        suggestions: any;
        tags: any;
        videos: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Dash" {
    class Dash {
        static constructFromObject(data: Object, obj: any): any;
        labels: any;
        labelsBitrate: any;
        src: any;
        type: any;
    }
    namespace Dash {
        namespace TypeEnum {
            let applicationdashxml: string;
        }
        type TypeEnum = string;
    }
    export default Dash;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Data" {
    export default class Data {
        static constructFromObject(data: Object, obj: any): any;
        notifications: any;
        actions: any;
        icon: any;
        text: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/PurpleVariation" {
    class PurpleVariation {
        static constructFromObject(data: Object, obj: any): any;
        file: any;
        height: any;
        url: any;
    }
    namespace PurpleVariation {
        namespace FileEnum {
            let _3d796cb90e82457ad489898ed177ff91a3e42489Jpg: string;
            let _7b66d92e821f3d530670a7be04e63ecf933dc983Jpg: string;
            let _3815d8c9c15175150fcdbcd5d1fe66fb62aab967Jpg: string;
            let c0048e53b61f4c9976688778a9bd8abe4750513fJpg: string;
            let b0140ea74a478863ab8fd52cfb5399bbd04bf215Jpg: string;
            let _6c259457ad9942473f4c9d1cb0562d58a86a5955Jpg: string;
            let b2bda99459cec7fcb94136afd7807270e7cf9fd2Jpg: string;
            let _8dd4a663b31368722f6cbbd68c7aa6d6a2f9174bJpg: string;
            let d95a05416032ad0230e68f2ff9ae7158cc22a4b5Jpg: string;
            let _403f21b09b5ac9711d6029f1b616ac4bff4e2d5bJpg: string;
            let de8c10a358da1921713a29c9c4a0128b388f2dc9Jpg: string;
            let _0fbf12a2a59313fb10054a111bc383b09bbb7944Jpg: string;
            let _8fcb08375de48178e73c2fcf6061c25cfd641fadJpg: string;
            let _92a305e37f5bc8f686ca0875bf2d0106e08364beJpg: string;
            let _9e8d374aa0e75e85390d577fe69c93d2bb27bc48Jpg: string;
        }
        type FileEnum = string;
    }
    export default PurpleVariation;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestArticleThumbnail" {
    class LatestArticleThumbnail {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
    namespace LatestArticleThumbnail {
        namespace CollectionEnum {
            let thumbnail: string;
        }
        type CollectionEnum = string;
    }
    export default LatestArticleThumbnail;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestArticle" {
    class LatestArticle {
        static constructFromObject(data: Object, obj: any): any;
        author: any;
        categories: any;
        commentsCount: any;
        featured: any;
        id: any;
        intro: any;
        preferences: any;
        publishDate: any;
        slug: any;
        text: any;
        thumbnail: any;
        title: any;
        url: any;
        urlSlug: any;
    }
    namespace LatestArticle {
        namespace IntroEnum {
            let stimmtJetztBerDieNchsteFolgeAb: string;
            let reichtEureVorschlgeEin: string;
            let unsereTermineAufDerGamescom: string;
            let mitDiesenTippsMachtIhrUnsDasLebenLeichter: string;
            let einKleinerLeitfadenUmEuchUndUnsDasLebenZuErleichtern: string;
        }
        type IntroEnum = string;
        namespace SlugEnum {
            let retroBattleUmfrage: string;
            let dieGoldeneEmma2024EinreichungDezemberBisJuli: string;
            let gamescom2024HierKonntIhrDieJungsTreffen: string;
            let soErhohtIhrDieChanceDassWirEureSpielshowsSpielen: string;
            let _50FragenSoSendetIhrEureQuizshowRichtigEin: string;
        }
        type SlugEnum = string;
        namespace TitleEnum {
            let retroBattleUmfrage_1: string;
            export { retroBattleUmfrage_1 as retroBattleUmfrage };
            let dieGoldeneEmma2024EinreichungDezemberBisJuli_1: string;
            export { dieGoldeneEmma2024EinreichungDezemberBisJuli_1 as dieGoldeneEmma2024EinreichungDezemberBisJuli };
            export let gamescom2024HierKnntIhrDieJungsTreffen: string;
            export let soErhhtIhrDieChanceDassWirEureSpielshowsSpielen: string;
            let _50FragenSoSendetIhrEureQuizshowRichtigEin_1: string;
            export { _50FragenSoSendetIhrEureQuizshowRichtigEin_1 as _50FragenSoSendetIhrEureQuizshowRichtigEin };
        }
        type TitleEnum = string;
        namespace UrlSlugEnum {
            let _8586RetroBattleUmfrage: string;
            let _8585DieGoldeneEmma2024EinreichungDezemberBisJuli: string;
            let _8584Gamescom2024HierKonntIhrDieJungsTreffen: string;
            let _8582SoErhohtIhrDieChanceDassWirEureSpielshowsSpielen: string;
            let _858150FragenSoSendetIhrEureQuizshowRichtigEin: string;
        }
        type UrlSlugEnum = string;
    }
    export default LatestArticle;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/FluffyVariation" {
    class FluffyVariation {
        static constructFromObject(data: Object, obj: any): any;
        file: any;
        height: any;
        url: any;
    }
    namespace FluffyVariation {
        namespace FileEnum {
            let b99baf2ccecdd32b02a8d79a1ce5476fc7767e80Jpg: string;
            let _18933a5a8b21d2b4dfb74da7c94b07c334675921Jpg: string;
            let cdd651b0a4993a4785382d09160ab833d13a407cJpg: string;
            let _3f2cfcba822db50cd16fc191f6de5b5fd3113f17Jpg: string;
            let d06a09c68edb490d73d79b4de199b513600b09f2Jpg: string;
            let bdf7325121b52beb12a985055221cced0744962aJpg: string;
            let df1bf23f13b052bb3f6bd7e0e20061d6a4f987e9Jpg: string;
            let c0cde6698b20f26f58ee045da7f4eda09cada6afJpg: string;
            let e62c29bbc90a2ddb04713b1d8641e040d8aff343Jpg: string;
            let e1ce2ef937633fc8a0eb575b2b46db15f0224503Jpg: string;
            let _34703e0a4d8f2f62ecf9042b93af01fa4cf0607dJpg: string;
            let _3c099c436b466a43c5e49d979ba6b4233651fdc9Jpg: string;
            let _36518189eecf89bbf392c5ce1d7bea07c810d960Jpg: string;
            let _634ade16c38d39d29e1cb446d0b026ee3fcbc6a5Jpg: string;
            let _5b3602d16e26e26cc28480ba6bf8374274eee339Jpg: string;
        }
        type FileEnum = string;
    }
    export default FluffyVariation;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/FirstVideoThumbnail" {
    class FirstVideoThumbnail {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
    namespace FirstVideoThumbnail {
        namespace CollectionEnum {
            let thumbnail: string;
        }
        type CollectionEnum = string;
    }
    export default FirstVideoThumbnail;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/FirstVideo" {
    export default class FirstVideo {
        static constructFromObject(data: Object, obj: any): any;
        commentsCount: any;
        description: any;
        featured: any;
        id: any;
        likesCount: any;
        preferences: any;
        publishDate: any;
        remote: any;
        remoteUrl: any;
        shortUrl: any;
        slug: any;
        thumbnail: any;
        title: any;
        url: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestPlaylist" {
    class LatestPlaylist {
        static constructFromObject(data: Object, obj: any): any;
        channel: any;
        description: any;
        firstVideo: any;
        followingsCount: any;
        id: any;
        metaTags: any;
        publishDate: any;
        slug: any;
        title: any;
        type: any;
        urlSlug: any;
        videosCount: any;
    }
    namespace LatestPlaylist {
        namespace SlugEnum {
            let retroBattle: string;
            let betrayalBeach: string;
            let backToSchool: string;
            let abcQuiz: string;
            let upnDown: string;
        }
        type SlugEnum = string;
        namespace TitleEnum {
            let retroBattle_1: string;
            export { retroBattle_1 as retroBattle };
            let betrayalBeach_1: string;
            export { betrayalBeach_1 as betrayalBeach };
            let backToSchool_1: string;
            export { backToSchool_1 as backToSchool };
            export let aBCQuiz: string;
            export let UPN_DOWN: string;
        }
        type TitleEnum = string;
        namespace UrlSlugEnum {
            let _155942RetroBattle: string;
            let _155893BetrayalBeach: string;
            let _155866BackToSchool: string;
            let _155762AbcQuiz: string;
            let _155689UpnDown: string;
        }
        type UrlSlugEnum = string;
    }
    export default LatestPlaylist;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/TentacledVariation" {
    export default class TentacledVariation {
        static constructFromObject(data: Object, obj: any): any;
        file: any;
        height: any;
        url: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestPodcastThumbnail" {
    class LatestPodcastThumbnail {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
    namespace LatestPodcastThumbnail {
        namespace CollectionEnum {
            let thumbnail: string;
        }
        type CollectionEnum = string;
    }
    export default LatestPodcastThumbnail;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestPodcast" {
    class LatestPodcast {
        static constructFromObject(data: Object, obj: any): any;
        commentsCount: any;
        description: any;
        duration: any;
        durationPretty: any;
        id: any;
        metaTags: any;
        mime: any;
        publishDate: any;
        size: any;
        slug: any;
        sourceUrl: any;
        thumbnail: any;
        title: any;
        urlSlug: any;
    }
    namespace LatestPodcast {
        namespace MimeEnum {
            let audiompeg: string;
        }
        type MimeEnum = string;
        namespace SlugEnum {
            let pietcast447SoWarDieGamescom: string;
        }
        type SlugEnum = string;
        namespace TitleEnum {
            let pietCast447SoWarDieGamescom: string;
        }
        type TitleEnum = string;
        namespace UrlSlugEnum {
            let _3336Pietcast447SoWarDieGamescom: string;
        }
        type UrlSlugEnum = string;
    }
    export default LatestPodcast;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/StickyVariation" {
    class StickyVariation {
        static constructFromObject(data: Object, obj: any): any;
        file: any;
        height: any;
        url: any;
    }
    namespace StickyVariation {
        namespace FileEnum {
            let a37f22cc1c294615315453d10420d384a037b9a8Jpg: string;
            let _3480e67586d0daabc165d448844de7e67ec04b91Jpg: string;
            let _45c7f7651f41747982aae27026f76a5b07708862Jpg: string;
            let b221874d544a4ebb588442178d337cca705e1158Jpg: string;
            let dbc76769b2f9c0226224e1f315393c9516b5cfb5Jpg: string;
            let _539e3fa2e06fc6ffcc7cdcd71884fc027b844217Jpg: string;
            let _0cedb2ab18cce454668b951348f4b774cbfd6cfeJpg: string;
            let _3bfc902e4b23fe5e63d6aedd1c40ebd6f75b4622Jpg: string;
            let _3c86a022ef10f9fbb71ea9c8c23b9a185227675cJpg: string;
            let _252de33ddbaa5d4b526a065bf0326ad8194ca35aJpg: string;
            let _2273ded24ce70bdae4f9305ee6d2599f7abd34c8Jpg: string;
            let e5ecea3160a7185fab907bd040c4e150d19ef972Jpg: string;
            let abbe986319a2292c1b2e2b3add96244088183007Jpg: string;
            let _14321df522fc69d36f9112ddc531338415ab51f1Jpg: string;
            let _1e0c8cec5d89c4e5558a8e57e9404b2c12064facJpg: string;
        }
        type FileEnum = string;
    }
    export default StickyVariation;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestVideoThumbnail" {
    class LatestVideoThumbnail {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
    namespace LatestVideoThumbnail {
        namespace CollectionEnum {
            let thumbnail: string;
        }
        type CollectionEnum = string;
    }
    export default LatestVideoThumbnail;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestVideo" {
    class LatestVideo {
        static constructFromObject(data: Object, obj: any): any;
        channels: any;
        commentsCount: any;
        description: any;
        duration: any;
        durationPretty: any;
        featured: any;
        id: any;
        likesCount: any;
        perspectives: any;
        preferences: any;
        publishDate: any;
        remote: any;
        remoteUrl: any;
        shortUrl: any;
        slug: any;
        thumbnail: any;
        title: any;
        url: any;
        urlSlug: any;
    }
    namespace LatestVideo {
        namespace SlugEnum {
            let rentnerTestenDieBlackOps6Beta: string;
            let montyMaulwurfMvpWormsClanWars: string;
            let reactDasIstBerlin: string;
            let beschreibeEsInWortenJackboxGamesBlatherRound: string;
            let minecraftMeetsTerrariaPietsmietProbiertCoreKeeper10: string;
        }
        type SlugEnum = string;
        namespace TitleEnum {
            let rentnerTestenDieBlackOps6Beta_1: string;
            export { rentnerTestenDieBlackOps6Beta_1 as rentnerTestenDieBlackOps6Beta };
            export let montyMaulwurfMVPWormsClanWars: string;
            export let reactDasIstBerlin56: string;
            export let bESCHREIBEEsInWORTENJackboxGamesBlatherRound: string;
            export let minecraftMeetsTerrariaPietSmietProbiertCoreKeeper10: string;
        }
        type TitleEnum = string;
        namespace UrlSlugEnum {
            let _79656RentnerTestenDieBlackOps6Beta: string;
            let _79538MontyMaulwurfMvpWormsClanWars: string;
            let _79573ReactDasIstBerlin: string;
            let _79569BeschreibeEsInWortenJackboxGamesBlatherRound: string;
            let _79651MinecraftMeetsTerrariaPietsmietProbiertCoreKeeper10: string;
        }
        type UrlSlugEnum = string;
    }
    export default LatestVideo;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/TypeDefinition" {
    class TypeDefinition {
        static constructFromObject(data: Object, obj: any): any;
        title: any;
    }
    namespace TypeDefinition {
        namespace TitleEnum {
            let video: string;
        }
        type TitleEnum = string;
    }
    export default TypeDefinition;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Item" {
    export default class Item {
        static constructFromObject(data: Object, obj: any): any;
        description: any;
        externalUrl: any;
        externalUrlPlatform: any;
        publishDate: any;
        publishDateSecondary: any;
        title: any;
        type: any;
        typeDefinition: any;
        video: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/IndigoVariation" {
    class IndigoVariation {
        static constructFromObject(data: Object, obj: any): any;
        file: any;
        height: any;
        url: any;
    }
    namespace IndigoVariation {
        namespace FileEnum {
            let _98a4dbc8a467110ac6fc68ddfe81706158ef5b5cJpg: string;
            let _58f09a0bc9473e6cf72bcc00ece09ddda0955a37Jpg: string;
            let _525ce5d7d1efa88885b2d2dc0a7b477c224ad845Jpg: string;
        }
        type FileEnum = string;
    }
    export default IndigoVariation;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/ScheduleThumbnail" {
    class ScheduleThumbnail {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
    namespace ScheduleThumbnail {
        namespace CollectionEnum {
            let thumbnail: string;
        }
        type CollectionEnum = string;
    }
    export default ScheduleThumbnail;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Schedule" {
    export default class Schedule {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        _date: any;
        description: any;
        full: any;
        id: any;
        intro: any;
        items: any;
        thumbnail: any;
        updatedAt: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/TopUser" {
    export default class TopUser {
        static constructFromObject(data: Object, obj: any): any;
        avatar: any;
        banner: any;
        blocked: any;
        createdAt: any;
        description: any;
        id: any;
        name: any;
        namePossessive: any;
        preferences: any;
        publicProfile: any;
        reputation: any;
        reputationPretty: any;
        team: any;
        updatedAt: any;
        urlSlug: any;
        username: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/TrendingVideoPerspective" {
    export default class TrendingVideoPerspective {
        static constructFromObject(data: Object, obj: any): any;
        id: any;
        main: any;
        title: any;
        titlePluralized: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/IndecentVariation" {
    class IndecentVariation {
        static constructFromObject(data: Object, obj: any): any;
        file: any;
        height: any;
        url: any;
    }
    namespace IndecentVariation {
        namespace FileEnum {
            let b78b5abff75c856c08b28bb11d423d2c86dde046Jpg: string;
            let a843cc105d578e12b30b4accc7cf1ecc5b2102ccJpg: string;
            let ad96a1d917e7171a11061665f936b121f7173454Jpg: string;
            let e33f8287fb06e285111cf1d976ab66581f3ed391Jpg: string;
            let _2a60c0a63033499fbbe44f43071497a1672a4e31Jpg: string;
            let _18278b24157e067754fba80f7471beea060cb405Jpg: string;
            let _618b16d0439124438f18508fdba1edb367db265fJpg: string;
            let _6ceb0e1f94107cfad26920c57e186d70f2056a8eJpg: string;
            let _03a764aa435fe1e529b1e138dcd5811b603c362eJpg: string;
            let _893de32a745b377292b2b1db7530c06552c0db17Jpg: string;
            let _1dfa9e2c54da4dc537d1db62c7df034a474bdde9Jpg: string;
            let _361550a272222bbf27b723194e018fa80aeaee2eJpg: string;
            let _3c44c0da15981f3758110466522507122c96426cJpg: string;
            let b7824013fcbeebf2e7a16f556d660d53d34fc04eJpg: string;
            let _3062aea303b1bae6babf5c7512537486410cee61Jpg: string;
        }
        type FileEnum = string;
    }
    export default IndecentVariation;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/TrendingVideoThumbnail" {
    class TrendingVideoThumbnail {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
    namespace TrendingVideoThumbnail {
        namespace CollectionEnum {
            let thumbnail: string;
        }
        type CollectionEnum = string;
    }
    export default TrendingVideoThumbnail;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/TrendingVideo" {
    class TrendingVideo {
        static constructFromObject(data: Object, obj: any): any;
        channels: any;
        commentsCount: any;
        description: any;
        duration: any;
        durationPretty: any;
        featured: any;
        id: any;
        likesCount: any;
        perspectives: any;
        preferences: any;
        publishDate: any;
        remote: any;
        remoteUrl: any;
        shortUrl: any;
        slug: any;
        thumbnail: any;
        title: any;
        url: any;
        urlSlug: any;
    }
    namespace TrendingVideo {
        namespace DurationPrettyEnum {
            let _3217: string;
            let _4922: string;
            let _4723: string;
            let _3832: string;
            let _2334: string;
        }
        type DurationPrettyEnum = string;
        namespace SlugEnum {
            let daWurdeJaKeinerRunterfallenOderTtt: string;
            let ichMussHierRausPerfectHeist2: string;
            let trackmaniaMinecraft: string;
            let valvesHypeSpielDeadlock: string;
            let guessTheGame3gg3Special: string;
        }
        type SlugEnum = string;
        namespace TitleEnum {
            let daWrdeJaKeinerRUNTERFALLENOderTTT: string;
            let iCHMUSSRAUSPerfectHeist2: string;
            let bESSERWIRDSNICHTMEHRTrackmaniaXMinecraft: string;
            let vALVESHYPESPIELDeadlock: string;
            let guessTheGame3gg3SPECIAL: string;
        }
        type TitleEnum = string;
        namespace UrlEnum {
            let _79620DaWurdeJaKeinerRunterfallenOderTtt: string;
            let _79622IchMussHierRausPerfectHeist2: string;
            let _79618TrackmaniaMinecraft: string;
            let _79632ValvesHypeSpielDeadlock: string;
            let _79636GuessTheGame3gg3Special: string;
        }
        type UrlEnum = string;
        namespace UrlSlugEnum {
            let _79620DaWurdeJaKeinerRunterfallenOderTtt_1: string;
            export { _79620DaWurdeJaKeinerRunterfallenOderTtt_1 as _79620DaWurdeJaKeinerRunterfallenOderTtt };
            let _79622IchMussHierRausPerfectHeist2_1: string;
            export { _79622IchMussHierRausPerfectHeist2_1 as _79622IchMussHierRausPerfectHeist2 };
            let _79618TrackmaniaMinecraft_1: string;
            export { _79618TrackmaniaMinecraft_1 as _79618TrackmaniaMinecraft };
            let _79632ValvesHypeSpielDeadlock_1: string;
            export { _79632ValvesHypeSpielDeadlock_1 as _79632ValvesHypeSpielDeadlock };
            let _79636GuessTheGame3gg3Special_1: string;
            export { _79636GuessTheGame3gg3Special_1 as _79636GuessTheGame3gg3Special };
        }
        type UrlSlugEnum = string;
    }
    export default TrendingVideo;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Data1" {
    export default class Data1 {
        static constructFromObject(data: Object, obj: any): any;
        latestArticles: any;
        latestPlaylists: any;
        latestPodcasts: any;
        latestVideos: any;
        schedules: any;
        topUsers: any;
        trendingVideos: any;
        upcomingSchedules: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Data3" {
    export default class Data3 {
        static constructFromObject(data: Object, obj: any): any;
        qr: any;
        secret: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum" {
    export default class Datum {
        static constructFromObject(data: Object, obj: any): any;
        clientId: any;
        createdAt: any;
        expiresAt: any;
        id: any;
        ip: any;
        lastSeen: any;
        name: any;
        revoked: any;
        scopes: any;
        tfaVerifiedAt: any;
        ua: any;
        uaBrowser: any;
        uaDevice: any;
        uaOs: any;
        updatedAt: any;
        userId: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/DatumPreferences" {
    export default class DatumPreferences {
        static constructFromObject(data: Object, obj: any): any;
        clips: any;
        comments: any;
        likes: any;
        shares: any;
        tags: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum10" {
    export default class Datum10 {
        static constructFromObject(data: Object, obj: any): any;
        author: any;
        categories: any;
        commentsCount: any;
        featured: any;
        id: any;
        intro: any;
        preferences: any;
        publishDate: any;
        slug: any;
        text: any;
        thumbnail: any;
        title: any;
        url: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum11" {
    class Datum11 {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        data: any;
        id: any;
        notifiableId: any;
        notifiableType: any;
        read: any;
        readAt: any;
        type: any;
        updatedAt: any;
    }
    namespace Datum11 {
        namespace NotifiableTypeEnum {
            let user: string;
        }
        type NotifiableTypeEnum = string;
        namespace TypeEnum {
            let userTwoFactorDisabled: string;
            let userTwoFactorEnabled: string;
            let userPasswordChanged: string;
        }
        type TypeEnum = string;
    }
    export default Datum11;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Detail" {
    export default class Detail {
        static constructFromObject(data: Object, obj: any): any;
        text: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/URL" {
    export default class URL {
        static constructFromObject(data: Object, obj: any): any;
        href: any;
        replace: any;
        search: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SupportPerk" {
    export default class SupportPerk {
        static constructFromObject(data: Object, obj: any): any;
        text: any;
        urls: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Details" {
    export default class Details {
        static constructFromObject(data: Object, obj: any): any;
        color: any;
        details: any;
        perks: any;
        subTitle: any;
        supportPerks: any;
        title: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Options1" {
    export default class Options1 {
        static constructFromObject(data: Object, obj: any): any;
        max: any;
        months: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum12" {
    export default class Datum12 {
        static constructFromObject(data: Object, obj: any): any;
        braintreeId: any;
        braintreePlan: any;
        details: any;
        enabled: any;
        id: any;
        options: any;
        supportAddOn: any;
        type: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum14" {
    export default class Datum14 {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        externalUrl: any;
        id: any;
        live: any;
        service: any;
        streamGame: any;
        streamId: any;
        streamStartedAt: any;
        streamThumbnail: any;
        streamTitle: any;
        streamViewerCount: any;
        type: any;
        updatedAt: any;
        userAvatar: any;
        userBanner: any;
        userDescription: any;
        userDisplayName: any;
        userId: any;
        userName: any;
        userType: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum15" {
    export default class Datum15 {
        static constructFromObject(data: Object, obj: any): any;
        ad: any;
        id: any;
        publishDate: any;
        title: any;
        type: any;
        url: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/User4" {
    export default class User4 {
        static constructFromObject(data: Object, obj: any): any;
        avatar: any;
        banner: any;
        blocked: any;
        createdAt: any;
        description: any;
        giftedSubscriptionsCount: any;
        id: any;
        name: any;
        namePossessive: any;
        preferences: any;
        publicProfile: any;
        reputation: any;
        reputationPretty: any;
        subscribed: any;
        subscriptionStreak: any;
        subscriptionSupporter: any;
        team: any;
        updatedAt: any;
        urlSlug: any;
        username: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum16" {
    export default class Datum16 {
        static constructFromObject(data: Object, obj: any): any;
        approved: any;
        countReplies: any;
        createdAt: any;
        dislikesCount: any;
        id: any;
        isReply: any;
        likesCount: any;
        pinned: any;
        reply: any;
        text: any;
        timestamp: any;
        user: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum17" {
    class Datum17 {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        id: any;
        objectId: any;
        objectType: any;
        timestamp: any;
        timestampPretty: any;
        updatedAt: any;
        userId: any;
    }
    namespace Datum17 {
        namespace ObjectTypeEnum {
            let video: string;
            let podcastEpisode: string;
        }
        type ObjectTypeEnum = string;
    }
    export default Datum17;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum18" {
    export default class Datum18 {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        _date: any;
        description: any;
        full: any;
        id: any;
        intro: any;
        items: any;
        thumbnail: any;
        updatedAt: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum19" {
    export default class Datum19 {
        static constructFromObject(data: Object, obj: any): any;
        _date: any;
        id: any;
        pending: any;
        status: any;
        statusColor: any;
        statusDescription: any;
        total: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum2" {
    export default class Datum2 {
        static constructFromObject(data: Object, obj: any): any;
        description: any;
        firstVideo: any;
        followingsCount: any;
        id: any;
        slug: any;
        thumbnail: any;
        title: any;
        urlSlug: any;
        videosCount: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum20" {
    export default class Datum20 {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        id: any;
        subjectId: any;
        subjectType: any;
        updatedAt: any;
        userId: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum21" {
    export default class Datum21 {
        static constructFromObject(data: Object, obj: any): any;
        channel: any;
        description: any;
        firstVideo: any;
        followingsCount: any;
        id: any;
        metaTags: any;
        publishDate: any;
        slug: any;
        title: any;
        type: any;
        urlSlug: any;
        videosCount: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/DatumThumbnail" {
    class DatumThumbnail {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
    namespace DatumThumbnail {
        namespace CollectionEnum {
            let thumbnail: string;
        }
        type CollectionEnum = string;
    }
    export default DatumThumbnail;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum22" {
    export default class Datum22 {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        duration: any;
        durationPretty: any;
        finished: any;
        id: any;
        slug: any;
        thumbnail: any;
        timeEnd: any;
        timeStart: any;
        title: any;
        updatedAt: any;
        user: any;
        video: any;
        viewsCount: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum23" {
    class Datum23 {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        id: any;
        subjectId: any;
        subjectType: any;
        updatedAt: any;
        userId: any;
    }
    namespace Datum23 {
        namespace SubjectTypeEnum {
            let comment: string;
            let video: string;
            let tag: string;
            let suggestion: string;
        }
        type SubjectTypeEnum = string;
    }
    export default Datum23;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/OtherCategory" {
    export default class OtherCategory {
        static constructFromObject(data: Object, obj: any): any;
        cumulative: any;
        description: any;
        episodesCount: any;
        id: any;
        remoteUrl: any;
        slug: any;
        spotifyUrl: any;
        title: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum24" {
    class Datum24 {
        static constructFromObject(data: Object, obj: any): any;
        category: any;
        commentsCount: any;
        description: any;
        duration: any;
        durationPretty: any;
        id: any;
        metaTags: any;
        mime: any;
        publishDate: any;
        size: any;
        slug: any;
        sourceUrl: any;
        thumbnail: any;
        title: any;
        urlSlug: any;
    }
    namespace Datum24 {
        namespace MimeEnum {
            let audiompeg: string;
        }
        type MimeEnum = string;
    }
    export default Datum24;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Feed" {
    export default class Feed {
        static constructFromObject(data: Object, obj: any): any;
        id: any;
        note: any;
        remoteUrl: any;
        slug: any;
        title: any;
        url: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum3" {
    export default class Datum3 {
        static constructFromObject(data: Object, obj: any): any;
        cumulative: any;
        description: any;
        episodesCount: any;
        feed: any;
        id: any;
        remoteUrl: any;
        slug: any;
        spotifyUrl: any;
        title: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum4" {
    export default class Datum4 {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        extra: any;
        icon: any;
        id: any;
        title: any;
        type: any;
        updatedAt: any;
        userId: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Perspective" {
    export default class Perspective {
        static constructFromObject(data: Object, obj: any): any;
        id: any;
        main: any;
        title: any;
        titlePluralized: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Preferences" {
    export default class Preferences {
        static constructFromObject(data: Object, obj: any): any;
        clips: any;
        comments: any;
        likes: any;
        shares: any;
        tags: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum5" {
    export default class Datum5 {
        static constructFromObject(data: Object, obj: any): any;
        channels: any;
        commentsCount: any;
        description: any;
        duration: any;
        durationPretty: any;
        featured: any;
        id: any;
        likesCount: any;
        perspectives: any;
        preferences: any;
        publishDate: any;
        remote: any;
        remoteUrl: any;
        shortUrl: any;
        slug: any;
        thumbnail: any;
        title: any;
        url: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Options" {
    export default class Options {
        static constructFromObject(data: Object, obj: any): any;
        months: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SupportAddOn" {
    export default class SupportAddOn {
        static constructFromObject(data: Object, obj: any): any;
        id: any;
        max: any;
        min: any;
        title: any;
        titleLong: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Product" {
    export default class Product {
        static constructFromObject(data: Object, obj: any): any;
        braintreeId: any;
        braintreePlan: any;
        details: any;
        enabled: any;
        id: any;
        options: any;
        supportAddOn: any;
        type: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum6" {
    export default class Datum6 {
        static constructFromObject(data: Object, obj: any): any;
        active: any;
        braintree: any;
        cancelled: any;
        createdAt: any;
        endsAt: any;
        gifted: any;
        id: any;
        name: any;
        onGracePeriod: any;
        onTrial: any;
        product: any;
        sponsored: any;
        trialEndsAt: any;
        updatedAt: any;
        valid: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/PurpleCategory" {
    class PurpleCategory {
        static constructFromObject(data: Object, obj: any): any;
        cumulative: any;
        description: any;
        episodesCount: any;
        id: any;
        remoteUrl: any;
        slug: any;
        spotifyUrl: any;
        title: any;
        urlSlug: any;
    }
    namespace PurpleCategory {
        namespace SlugEnum {
            let peterheisstpodcast: string;
            let pietcast: string;
        }
        type SlugEnum = string;
        namespace TitleEnum {
            let peterHeitPodcast: string;
            let pietCast: string;
        }
        type TitleEnum = string;
        namespace UrlSlugEnum {
            let _36Peterheisstpodcast: string;
            let _31Pietcast: string;
        }
        type UrlSlugEnum = string;
    }
    export default PurpleCategory;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum7" {
    class Datum7 {
        static constructFromObject(data: Object, obj: any): any;
        author: any;
        categories: any;
        category: any;
        channels: any;
        commentsCount: any;
        description: any;
        duration: any;
        durationPretty: any;
        featured: any;
        followingsCount: any;
        id: any;
        intro: any;
        likesCount: any;
        metaTags: any;
        mime: any;
        preferences: any;
        publishDate: any;
        remote: any;
        remoteUrl: any;
        shortUrl: any;
        size: any;
        slug: any;
        sourceUrl: any;
        text: any;
        thumbnail: any;
        title: any;
        type: any;
        url: any;
        urlSlug: any;
        videosCount: any;
    }
    namespace Datum7 {
        namespace MimeEnum {
            let audiompeg: string;
        }
        type MimeEnum = string;
    }
    export default Datum7;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum8" {
    class Datum8 {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        dislikesCount: any;
        id: any;
        likesCount: any;
        slug: any;
        taggableId: any;
        taggableType: any;
        title: any;
        total: any;
        updatedAt: any;
        user: any;
    }
    namespace Datum8 {
        namespace TaggableTypeEnum {
            let video: string;
        }
        type TaggableTypeEnum = string;
    }
    export default Datum8;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/ServiceDefinition" {
    class ServiceDefinition {
        static constructFromObject(data: Object, obj: any): any;
        color: any;
        title: any;
    }
    namespace ServiceDefinition {
        namespace ColorEnum {
            let blue: string;
            let purple: string;
            let orange: string;
            let pink: string;
            let red: string;
        }
        type ColorEnum = string;
        namespace TitleEnum {
            let twitter: string;
            let twitch: string;
            let instagram: string;
            let tikTok: string;
            let youTube: string;
        }
        type TitleEnum = string;
    }
    export default ServiceDefinition;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/PublicSocialAccount" {
    class PublicSocialAccount {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        externalUrl: any;
        id: any;
        name: any;
        service: any;
        serviceDefinition: any;
        socialId: any;
        updatedAt: any;
        username: any;
    }
    namespace PublicSocialAccount {
        namespace ServiceEnum {
            let twitter: string;
            let twitch: string;
            let instagram: string;
            let tiktok: string;
            let youtube: string;
        }
        type ServiceEnum = string;
    }
    export default PublicSocialAccount;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum9" {
    export default class Datum9 {
        static constructFromObject(data: Object, obj: any): any;
        avatar: any;
        banner: any;
        description: any;
        followingsCount: any;
        id: any;
        name: any;
        publicSocialAccounts: any;
        team: any;
        urlSlug: any;
        username: any;
        videosCount: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Dislike" {
    export default class Dislike {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        id: any;
        subjectId: any;
        subjectType: any;
        updatedAt: any;
        userId: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Episode" {
    export default class Episode {
        static constructFromObject(data: Object, obj: any): any;
        category: any;
        commentsCount: any;
        description: any;
        duration: any;
        durationPretty: any;
        id: any;
        metaTags: any;
        mime: any;
        publishDate: any;
        size: any;
        slug: any;
        sourceUrl: any;
        thumbnail: any;
        title: any;
        urlSlug: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Errors" {
    export default class Errors {
        static constructFromObject(data: Object, obj: any): any;
        currentPassword: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/From" {
    export default class From {
        static constructFromObject(data: Object, obj: any): any;
        name: any;
        path: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/To" {
    export default class To {
        static constructFromObject(data: Object, obj: any): any;
        name: any;
        path: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Properties" {
    class Properties {
        static constructFromObject(data: Object, obj: any): any;
        from: any;
        id: any;
        timestamp: any;
        to: any;
        type: any;
        video: any;
    }
    namespace Properties {
        namespace TypeEnum {
            let video: string;
            let podcastEpisode: string;
            let newsArticle: string;
            let videoPlaylist: string;
        }
        type TypeEnum = string;
    }
    export default Properties;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Event" {
    class Event {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        properties: any;
        type: any;
    }
    namespace Event {
        namespace TypeEnum {
            let navigation: string;
            let view: string;
            let playerPlay: string;
            let playerFirstPlay: string;
            let playerPause: string;
            let userView: string;
        }
        type TypeEnum = string;
    }
    export default Event;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Subject" {
    export default class Subject {
        static constructFromObject(data: Object, obj: any): any;
        description: any;
        followingsCount: any;
        id: any;
        slug: any;
        title: any;
        urlSlug: any;
        videosCount: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Follow" {
    export default class Follow {
        static constructFromObject(data: Object, obj: any): any;
        id: any;
        subject: any;
        subjectType: any;
        userId: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Generic" {
    export default class Generic {
        static constructFromObject(data: Object, obj: any): any;
        analytics: any;
        autoplay: any;
        chromecast: any;
        controls: any;
        loop: any;
        muted: any;
        playbackRates: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/HLS" {
    class HLS {
        static constructFromObject(data: Object, obj: any): any;
        labels: any;
        labelsBitrate: any;
        src: any;
        type: any;
    }
    namespace HLS {
        namespace TypeEnum {
            let applicationxMpegurl: string;
        }
        type TypeEnum = string;
    }
    export default HLS;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/HeadlinesGetRequest" {
    export default class HeadlinesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Like" {
    export default class Like {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        id: any;
        subjectId: any;
        subjectType: any;
        updatedAt: any;
        userId: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/LivestreamsGetRequest" {
    export default class LivestreamsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/ModulesGetRequest" {
    export default class ModulesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/NewsArticlesGetRequest" {
    export default class NewsArticlesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/NewsArticlesIDGetRequest" {
    export default class NewsArticlesIDGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        article: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/NewsCategories34GetRequest" {
    export default class NewsCategories34GetRequest {
        static constructFromObject(data: Object, obj: any): any;
        category: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Notifiable" {
    export default class Notifiable {
        static constructFromObject(data: Object, obj: any): any;
        blocked: any;
        createdAt: any;
        description: any;
        id: any;
        name: any;
        namePossessive: any;
        preferences: any;
        publicProfile: any;
        reputation: any;
        reputationPretty: any;
        team: any;
        updatedAt: any;
        urlSlug: any;
        username: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Notification" {
    export default class Notification {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        data: any;
        id: any;
        notifiable: any;
        notifiableId: any;
        notifiableType: any;
        read: any;
        readAt: any;
        type: any;
        updatedAt: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Quality" {
    export default class Quality {
        static constructFromObject(data: Object, obj: any): any;
        bitrate: any;
        framerate: any;
        label: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Sources" {
    export default class Sources {
        static constructFromObject(data: Object, obj: any): any;
        dash: any;
        hls: any;
        mp4: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Track" {
    export default class Track {
        static constructFromObject(data: Object, obj: any): any;
        fullTitle: any;
        id: any;
        main: any;
        pluralizedTitle: any;
        qualities: any;
        sources: any;
        title: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Visual" {
    export default class Visual {
        static constructFromObject(data: Object, obj: any): any;
        aspectRatio: any;
        brand: any;
        fluid: any;
        responsive: any;
        thumbnail: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Options2" {
    export default class Options2 {
        static constructFromObject(data: Object, obj: any): any;
        generic: any;
        tracks: any;
        visual: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Playlist" {
    export default class Playlist {
        static constructFromObject(data: Object, obj: any): any;
        description: any;
        followingsCount: any;
        id: any;
        metaTags: any;
        publishDate: any;
        slug: any;
        title: any;
        type: any;
        urlSlug: any;
        videosCount: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/PodcastCategoriesGetRequest" {
    export default class PodcastCategoriesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/PodcastEpisodesGetRequest" {
    export default class PodcastEpisodesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/PodcastEpisodesIDGetRequest" {
    export default class PodcastEpisodesIDGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        episode: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/PollsGetRequest" {
    export default class PollsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/PollsVotesGetRequest" {
    export default class PollsVotesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/PromotionsGetRequest" {
    export default class PromotionsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SchedulesGetRequest" {
    export default class SchedulesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SchedulesUpcomingGetRequest" {
    export default class SchedulesUpcomingGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SearchGetRequest" {
    export default class SearchGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        counts: any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/ServiceDefinition1" {
    export default class ServiceDefinition1 {
        static constructFromObject(data: Object, obj: any): any;
        color: any;
        title: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SettingsAssetsBody" {
    export default class SettingsAssetsBody {
        static constructFromObject(data: Object, obj: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SocialAccount" {
    export default class SocialAccount {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        externalUrl: any;
        id: any;
        name: any;
        service: any;
        serviceDefinition: any;
        socialId: any;
        updatedAt: any;
        username: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SocialAccount1" {
    class SocialAccount1 {
        static constructFromObject(data: Object, obj: any): any;
        createdAt: any;
        externalUrl: any;
        id: any;
        name: any;
        service: any;
        serviceDefinition: any;
        socialId: any;
        updatedAt: any;
        username: any;
    }
    namespace SocialAccount1 {
        namespace NameEnum {
            let blu: string;
            let userNameLP: string;
            let userName_: string;
        }
        type NameEnum = string;
        namespace ServiceEnum {
            let discord: string;
            let twitch: string;
        }
        type ServiceEnum = string;
        namespace UsernameEnum {
            export let blu4340: string;
            let userNameLP_1: string;
            export { userNameLP_1 as userNameLP };
            export let userName0: string;
        }
        type UsernameEnum = string;
    }
    export default SocialAccount1;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SubscriptionsDiscountsGetRequest" {
    export default class SubscriptionsDiscountsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/SubscriptionsProductsGetRequest" {
    export default class SubscriptionsProductsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/TagsGetRequest" {
    export default class TagsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Token" {
    export default class Token {
        static constructFromObject(data: Object, obj: any): any;
        clientId: any;
        createdAt: any;
        expiresAt: any;
        id: any;
        ip: any;
        lastSeen: any;
        name: any;
        revoked: any;
        scopes: any;
        tfaVerifiedAt: any;
        ua: any;
        uaBrowser: any;
        uaDevice: any;
        uaOs: any;
        updatedAt: any;
        user: any;
        userId: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Traits" {
    export default class Traits {
        static constructFromObject(data: Object, obj: any): any;
        c: any;
        h: any;
        v: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Type" {
    class Type {
        static constructFromObject(data: Object, obj: any): any;
        channels: any;
        description: any;
        key: any;
    }
    namespace Type {
        namespace DescriptionEnum {
            let tglicheVideozusammenfassung: string;
            let wchentlicheVideozusammenfassung: string;
            let antwortAufKommentar: string;
            let kommentarIstBeliebt: string;
            let erwhnungInEinemKommentar: string;
            let neueArtikel: string;
        }
        type DescriptionEnum = string;
        namespace KeyEnum {
            let VIDEO_SUMMARY_DAILY: string;
            let VIDEO_SUMMARY_WEEKLY: string;
            let COMMENT_REPLIED: string;
            let COMMENT_IS_POPULAR: string;
            let COMMENT_MENTIONED: string;
            let NEW_NEWS_ARTICLES: string;
        }
        type KeyEnum = string;
    }
    export default Type;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/Type1" {
    export default class Type1 {
        static constructFromObject(data: Object, obj: any): any;
        channels: any;
        description: any;
        key: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/TypeDefinition1" {
    export default class TypeDefinition1 {
        static constructFromObject(data: Object, obj: any): any;
        title: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/User3" {
    export default class User3 {
        static constructFromObject(data: Object, obj: any): any;
        avatar: any;
        banner: any;
        blocked: any;
        createdAt: any;
        description: any;
        email: any;
        id: any;
        name: any;
        namePossessive: any;
        notificationsCount: any;
        preferences: any;
        publicProfile: any;
        publicSocialAccounts: any;
        reacceptTerms: any;
        readNotificationsCount: any;
        reputation: any;
        reputationPretty: any;
        socialAccounts: any;
        taxPercentage: any;
        team: any;
        twoFactorEnabled: any;
        unreadNotificationsCount: any;
        updatedAt: any;
        urlSlug: any;
        username: any;
        verified: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/User5" {
    class User5 {
        static constructFromObject(data: Object, obj: any): any;
        avatar: any;
        banner: any;
        blocked: any;
        createdAt: any;
        description: any;
        email: any;
        id: any;
        name: any;
        namePossessive: any;
        notificationsCount: any;
        preferences: any;
        publicProfile: any;
        publicSocialAccounts: any;
        reacceptTerms: any;
        readNotificationsCount: any;
        recoveryCodes: any;
        recoveryCodesUsed: any;
        reputation: any;
        reputationPretty: any;
        socialAccounts: any;
        taxPercentage: any;
        team: any;
        twoFactorEnabled: any;
        unreadNotificationsCount: any;
        updatedAt: any;
        urlSlug: any;
        username: any;
        verified: any;
    }
    namespace User5 {
        namespace EmailEnum {
            let emailexampleCom: string;
        }
        type EmailEnum = string;
        namespace NameEnum {
            let userName: string;
            let displayName: string;
        }
        type NameEnum = string;
        namespace NamePossessiveEnum {
            let userNames: string;
            let displayNames: string;
        }
        type NamePossessiveEnum = string;
        namespace UrlSlugEnum {
            let userIdUserName: string;
        }
        type UrlSlugEnum = string;
        namespace UsernameEnum {
            let userName_1: string;
            export { userName_1 as userName };
        }
        type UsernameEnum = string;
    }
    export default User5;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDAchievementsGetRequest" {
    export default class UsersIDAchievementsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDDislikesGetRequest" {
    export default class UsersIDDislikesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDDislikesPostRequest" {
    export default class UsersIDDislikesPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        id: any;
        type: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDDislikesPostRequest1" {
    export default class UsersIDDislikesPostRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        dislike: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDFollowingsGetRequest" {
    export default class UsersIDFollowingsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDGetRequest" {
    export default class UsersIDGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
        user: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDInvoicesGetRequest" {
    export default class UsersIDInvoicesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDLikesGetRequest" {
    export default class UsersIDLikesGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDLikesPostRequest" {
    export default class UsersIDLikesPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        id: any;
        type: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDLikesPostRequest1" {
    export default class UsersIDLikesPostRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        like: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDNotificationsGetRequest" {
    export default class UsersIDNotificationsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDNotificationsUUIDPatchRequest" {
    export default class UsersIDNotificationsUUIDPatchRequest {
        static constructFromObject(data: Object, obj: any): any;
        read: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDNotificationsUUIDPatchRequest1" {
    export default class UsersIDNotificationsUUIDPatchRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        notification: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsAssetsPostRequest" {
    export default class UsersIDSettingsAssetsPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsDataRequestPostRequest" {
    export default class UsersIDSettingsDataRequestPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsNotificationsGetRequest" {
    export default class UsersIDSettingsNotificationsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
        types: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsNotificationsPatchRequest" {
    export default class UsersIDSettingsNotificationsPatchRequest {
        static constructFromObject(data: Object, obj: any): any;
        channels: any;
        key: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsNotificationsPatchRequest1" {
    export default class UsersIDSettingsNotificationsPatchRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
        types: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsPasswordPatchRequest" {
    export default class UsersIDSettingsPasswordPatchRequest {
        static constructFromObject(data: Object, obj: any): any;
        currentPassword: any;
        password: any;
        passwordConfirmation: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsPasswordPatchRequest1" {
    export default class UsersIDSettingsPasswordPatchRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsPasswordPatchRequest2" {
    export default class UsersIDSettingsPasswordPatchRequest2 {
        static constructFromObject(data: Object, obj: any): any;
        errors: any;
        message: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsPreferencesPatchRequest" {
    export default class UsersIDSettingsPreferencesPatchRequest {
        static constructFromObject(data: Object, obj: any): any;
        commentsOrderOwnFirst: any;
        commentsOrderPopular: any;
        country: any;
        enableDarkmode: any;
        enableSpoilers: any;
        publicProfile: any;
        scrollTopRouteChange: any;
        showInPresence: any;
        subscribeNewsletter: any;
        videosAutocontinue: any;
        videosAutoplay: any;
        videosPlayerFloating: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsPreferencesPatchRequest1" {
    export default class UsersIDSettingsPreferencesPatchRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        preferences: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsProfilePatchRequest" {
    export default class UsersIDSettingsProfilePatchRequest {
        static constructFromObject(data: Object, obj: any): any;
        email: any;
        name: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsProfilePatchRequest1" {
    export default class UsersIDSettingsProfilePatchRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        preferences: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsTwofactorResetPostRequest" {
    export default class UsersIDSettingsTwofactorResetPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        otp: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsTwofactorResetPostRequest1" {
    export default class UsersIDSettingsTwofactorResetPostRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsTwofactorSetupGetRequest" {
    export default class UsersIDSettingsTwofactorSetupGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsTwofactorSetupPostRequest" {
    export default class UsersIDSettingsTwofactorSetupPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        otp: any;
        secret: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsTwofactorSetupPostRequest1" {
    export default class UsersIDSettingsTwofactorSetupPostRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        recoveryCodes: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSubscriptionsGetRequest" {
    export default class UsersIDSubscriptionsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDTokensGetRequest" {
    export default class UsersIDTokensGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDTokensTokenDeleteRequest" {
    export default class UsersIDTokensTokenDeleteRequest {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
        token: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDViewsGetRequest" {
    export default class UsersIDViewsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersMeGetRequest" {
    export default class UsersMeGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
        user: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersObject20ObjectTokensDeleteRequest" {
    export default class UsersObject20ObjectTokensDeleteRequest {
        static constructFromObject(data: Object, obj: any): any;
        message: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityAutobahnPostRequest" {
    export default class UtilityAutobahnPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        events: any;
        traits: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityAutobahnPostRequest1" {
    export default class UtilityAutobahnPostRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityCommentsGetRequest" {
    export default class UtilityCommentsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityCommentsIDReportsPostRequest" {
    export default class UtilityCommentsIDReportsPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityCommentsPostRequest" {
    export default class UtilityCommentsPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        id: any;
        reply: any;
        text: any;
        timestamp: any;
        type: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityCommentsPostRequest1" {
    export default class UtilityCommentsPostRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        comment: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityFollowsDeleteRequest" {
    export default class UtilityFollowsDeleteRequest {
        static constructFromObject(data: Object, obj: any): any;
        follow: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityFollowsGetRequest" {
    export default class UtilityFollowsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityFollowsPostRequest" {
    export default class UtilityFollowsPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        id: any;
        type: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityFollowsPostRequest1" {
    export default class UtilityFollowsPostRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        follow: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityHighlightsPostRequest" {
    export default class UtilityHighlightsPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        position: any;
        video: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityHighlightsPostRequest1" {
    export default class UtilityHighlightsPostRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityPlayerGetRequest" {
    export default class UtilityPlayerGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        advertising: any;
        options: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideoPreferences" {
    export default class VideoPreferences {
        static constructFromObject(data: Object, obj: any): any;
        clips: any;
        comments: any;
        likes: any;
        shares: any;
        tags: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideoThumbnail" {
    class VideoThumbnail {
        static constructFromObject(data: Object, obj: any): any;
        collection: any;
        id: any;
        remoteUrl: any;
        variations: any;
    }
    namespace VideoThumbnail {
        namespace CollectionEnum {
            let thumbnail: string;
        }
        type CollectionEnum = string;
    }
    export default VideoThumbnail;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosAuthorsGetRequest" {
    export default class VideosAuthorsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosChannels12GetRequest" {
    export default class VideosChannels12GetRequest {
        static constructFromObject(data: Object, obj: any): any;
        channel: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosChannelsGetRequest" {
    export default class VideosChannelsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosClipsGetRequest" {
    export default class VideosClipsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosClipsPostRequest" {
    export default class VideosClipsPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        perspective: any;
        position: any;
        video: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosClipsPostRequest1" {
    export default class VideosClipsPostRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        clip: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosGetRequest" {
    export default class VideosGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosIDGetRequest" {
    export default class VideosIDGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
        video: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosIDNextGetRequest" {
    export default class VideosIDNextGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        success: any;
        video: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosPlaylistsGetRequest" {
    export default class VideosPlaylistsGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        data: any;
        links: any;
        meta: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosPlaylistsIDGetRequest" {
    export default class VideosPlaylistsIDGetRequest {
        static constructFromObject(data: Object, obj: any): any;
        playlist: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosPlaylistsIDPostRequest" {
    export default class VideosPlaylistsIDPostRequest {
        static constructFromObject(data: Object, obj: any): any;
        video: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosPlaylistsIDPostRequest1" {
    export default class VideosPlaylistsIDPostRequest1 {
        static constructFromObject(data: Object, obj: any): any;
        playlist: any;
        success: any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/CommunityApi" {
    export default class CommunityApi {
        constructor(apiClient?: any);
        apiClient: any;
        getCommunitySuggestions(opts: {
            page: string;
            limit: string;
            order: string;
            statuses: string;
        }, callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/ConfigApi" {
    export default class ConfigApi {
        constructor(apiClient?: any);
        apiClient: any;
        getConfigAssetVersion(callback: any): any;
        getConfigEnumerationsCountries(callback: any): any;
        getXOriginIntegrityHeader(callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/HeadlinesApi" {
    export default class HeadlinesApi {
        constructor(apiClient?: any);
        apiClient: any;
        getHeadlines(callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/LivestreamsApi" {
    export default class LivestreamsApi {
        constructor(apiClient?: any);
        apiClient: any;
        getLivestreams(callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/ModulesApi" {
    export default class ModulesApi {
        constructor(apiClient?: any);
        apiClient: any;
        getModules(callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/NewsApi" {
    export default class NewsApi {
        constructor(apiClient?: any);
        apiClient: any;
        getNewsArticles(opts: {
            limit: string;
            order: string;
            categories: string;
            page: string;
            category: string;
        }, callback: any): any;
        getNewsArticlesById(id: number, callback: any): any;
        getNewsCategoriesId(id: number, callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/PodcastApi" {
    export default class PodcastApi {
        constructor(apiClient?: any);
        apiClient: any;
        getPodcastCategories(callback: any): any;
        getPodcastEpisodes(opts: {
            page: string;
            limit: string;
        }, callback: any): any;
        getPodcastEpisodesById(id: number, callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/PollsApi" {
    export default class PollsApi {
        constructor(apiClient?: any);
        apiClient: any;
        getPolls(opts: {
            id: string;
            type: string;
        }, callback: any): any;
        getPollsVotes(callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/PromotionsApi" {
    export default class PromotionsApi {
        constructor(apiClient?: any);
        apiClient: any;
        getPromotions(opts: {
            ab: string;
        }, callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/SchedulesApi" {
    export default class SchedulesApi {
        constructor(apiClient?: any);
        apiClient: any;
        getSchedules(callback: any): any;
        getSchedulesUpcoming(callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/SearchApi" {
    export default class SearchApi {
        constructor(apiClient?: any);
        apiClient: any;
        getSearch(opts: {
            query: string;
            part: string;
            page: string;
            priority: string;
        }, callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/SubscriptionsApi" {
    export default class SubscriptionsApi {
        constructor(apiClient?: any);
        apiClient: any;
        getSubscriptionsDiscounts(callback: any): any;
        getSubscriptionsProducts(callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/TagsApi" {
    export default class TagsApi {
        constructor(apiClient?: any);
        apiClient: any;
        getTags(opts: {
            id: string;
            type: string;
        }, callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/UsersApi" {
    export default class UsersApi {
        constructor(apiClient?: any);
        apiClient: any;
        deleteUsersByIdTokensId(id: string, token: number, opts: {
            priority: string;
        }, callback: any): any;
        deleteUsersObject20ObjectTokens(id: number, opts: {
            priority: string;
        }, callback: any): any;
        getUsersById(id: number, callback: any): any;
        getUsersByIdAchievements(id: number, callback: any): any;
        getUsersByIdDislikes(id: number, callback: any): any;
        getUsersByIdFollowings(id: number, callback: any): any;
        getUsersByIdInvoices(id: number, callback: any): any;
        getUsersByIdLikes(id: number, callback: any): any;
        getUsersByIdNotifications(id: number, callback: any): any;
        getUsersByIdSettingsNotifications(id: number, callback: any): any;
        getUsersByIdSettingsTwofactorSetup(id: number, opts: {
            priority: string;
        }, callback: any): any;
        getUsersByIdSubscriptions(id: number, opts: {
            include: string;
        }, callback: any): any;
        getUsersByIdTokens(id: number, callback: any): any;
        getUsersByIdViews(id: number, callback: any): any;
        getUsersMe(callback: any): any;
        patchUsersByIdNotificationsByUuid(body: any, id: number, uuid: string, opts: {
            priority: string;
        }, callback: any): any;
        patchUsersByIdSettingsNotifications(body: any, id: number, opts: {
            priority: string;
        }, callback: any): any;
        patchUsersByIdSettingsPassword(body: any, id: number, opts: {
            priority: string;
        }, callback: any): any;
        patchUsersByIdSettingsPreferences(body: any, id: number, opts: {
            priority: string;
        }, callback: any): any;
        patchUsersByIdSettingsProfile(body: any, id: number, opts: {
            priority: string;
        }, callback: any): any;
        postUsersByIdDislikes(body: any, id: number, opts: {
            priority: string;
        }, callback: any): any;
        postUsersByIdLikes(body: any, id: number, opts: {
            priority: string;
        }, callback: any): any;
        postUsersByIdSettingsAssets(id: number, opts: {
            priority: string;
        }, callback: any): any;
        postUsersByIdSettingsDataRequest(id: number, opts: {
            priority: string;
        }, callback: any): any;
        postUsersByIdSettingsTwofactorReset(body: any, id: number, opts: {
            priority: string;
        }, callback: any): any;
        postUsersByIdSettingsTwofactorSetup(body: any, id: number, opts: {
            priority: string;
        }, callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/UtilityApi" {
    export default class UtilityApi {
        constructor(apiClient?: any);
        apiClient: any;
        deleteUtilityFollows(opts: {
            type: string;
            id: string;
            priority: string;
        }, callback: any): any;
        getUtilityComments(opts: {
            order: string;
            id: string;
            type: string;
            page: string;
            limit: string;
            include: string;
            orderOwn: string;
            u: string;
            byUser: string;
        }, callback: any): any;
        getUtilityFollows(opts: {
            type: string;
            id: string;
        }, callback: any): any;
        getUtilityPlayer(opts: {
            video: string;
            preset: string;
            priority: string;
        }, callback: any): any;
        postUtilityAutobahn(body: any, callback: any): any;
        postUtilityComments(body: any, opts: {
            priority: string;
        }, callback: any): any;
        postUtilityCommentsByIdReports(id: number, opts: {
            priority: string;
        }, callback: any): any;
        postUtilityFollows(body: any, opts: {
            priority: string;
        }, callback: any): any;
        postUtilityHighlights(body: any, opts: {
            priority: string;
        }, callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/api/VideosApi" {
    export default class VideosApi {
        constructor(apiClient?: any);
        apiClient: any;
        getChannelVideoCount(id: number, callback: any): any;
        getVideos(opts: {
            limit: string;
            order: string;
            prioritizeFeatured: string;
            page: string;
            likedBy: string;
            viewedBy: string;
            priority: string;
            followedBy: string;
            playlists: string;
            u: string;
            channels: string;
            playlistVideo: string;
        }, callback: any): any;
        getVideosAuthors(callback: any): any;
        getVideosById(id: number, opts: {
            include: string;
        }, callback: any): any;
        getVideosByIdNext(id: number, opts: {
            playlist: string;
            channel: string;
        }, callback: any): any;
        getVideosChannels(opts: {
            page: string;
            order: string;
        }, callback: any): any;
        getVideosClips(opts: {
            video: string;
            limit: string;
            order: string;
            page: string;
        }, callback: any): any;
        getVideosPlaylists(opts: {
            user: string;
            page: string;
            order: string;
            limit: string;
        }, callback: any): any;
        getVideosPlaylistsById(id: number, callback: any): any;
        postVideosClips(body: any, opts: {
            priority: string;
        }, callback: any): any;
        postVideosPlaylistsById(body: any, id: number, opts: {
            priority: string;
        }, callback: any): any;
    }
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/index" {
    import ApiClient from "tmp/pietsmiet.de/javascript-client-generated/src/ApiClient";
    import Action from "tmp/pietsmiet.de/javascript-client-generated/src/model/Action";
    import Advertising from "tmp/pietsmiet.de/javascript-client-generated/src/model/Advertising";
    import Analytics from "tmp/pietsmiet.de/javascript-client-generated/src/model/Analytics";
    import AnyOfDatum11ReadAt from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum11ReadAt";
    import AnyOfDatum12SupportAddOn from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum12SupportAddOn";
    import AnyOfDatum13ParticipantCount from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum13ParticipantCount";
    import AnyOfDatum13ParticipantLineup from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum13ParticipantLineup";
    import AnyOfDatum13ReferringTo from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum13ReferringTo";
    import AnyOfDatum13Url from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum13Url";
    import AnyOfDatum13UrlDomain from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum13UrlDomain";
    import AnyOfDatum15Id from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum15Id";
    import AnyOfDatum15PublishDate from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum15PublishDate";
    import AnyOfDatum15Type from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum15Type";
    import AnyOfDatum16Reply from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum16Reply";
    import AnyOfDatum16Timestamp from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum16Timestamp";
    import AnyOfDatum21Channel from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum21Channel";
    import AnyOfDatum21FirstVideo from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum21FirstVideo";
    import AnyOfDatum3RemoteUrl from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum3RemoteUrl";
    import AnyOfDatum7DurationPretty from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum7DurationPretty";
    import AnyOfDatum7FollowingsCount from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum7FollowingsCount";
    import AnyOfDatum7MetaTags from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum7MetaTags";
    import AnyOfDatum7RemoteUrl from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum7RemoteUrl";
    import AnyOfDatum7VideosCount from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum7VideosCount";
    import AnyOfDatum9Avatar from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum9Avatar";
    import AnyOfDatum9Banner from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum9Banner";
    import AnyOfDatum9Description from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfDatum9Description";
    import AnyOfFeedRemoteUrl from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfFeedRemoteUrl";
    import AnyOfFromName from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfFromName";
    import AnyOfLatestVideoDurationPretty from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfLatestVideoDurationPretty";
    import AnyOfLinkLabel from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfLinkLabel";
    import AnyOfLinkUrl from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfLinkUrl";
    import AnyOfLinksNext from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfLinksNext";
    import AnyOfPerspectiveTitle from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfPerspectiveTitle";
    import AnyOfThumbnailRemoteUrl from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfThumbnailRemoteUrl";
    import AnyOfTrendingVideoPerspectiveTitle from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfTrendingVideoPerspectiveTitle";
    import AnyOfUser4Avatar from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfUser4Avatar";
    import AnyOfUser5Avatar from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfUser5Avatar";
    import AnyOfVariation1Url from "tmp/pietsmiet.de/javascript-client-generated/src/model/AnyOfVariation1Url";
    import Article from "tmp/pietsmiet.de/javascript-client-generated/src/model/Article";
    import ArticlePreferences from "tmp/pietsmiet.de/javascript-client-generated/src/model/ArticlePreferences";
    import AtedAt from "tmp/pietsmiet.de/javascript-client-generated/src/model/AtedAt";
    import Author from "tmp/pietsmiet.de/javascript-client-generated/src/model/Author";
    import AuthorPreferences from "tmp/pietsmiet.de/javascript-client-generated/src/model/AuthorPreferences";
    import Avatar from "tmp/pietsmiet.de/javascript-client-generated/src/model/Avatar";
    import Avatar1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Avatar1";
    import AvatarVariation from "tmp/pietsmiet.de/javascript-client-generated/src/model/AvatarVariation";
    import Braintree from "tmp/pietsmiet.de/javascript-client-generated/src/model/Braintree";
    import BraintreePlan from "tmp/pietsmiet.de/javascript-client-generated/src/model/BraintreePlan";
    import Brand from "tmp/pietsmiet.de/javascript-client-generated/src/model/Brand";
    import Category from "tmp/pietsmiet.de/javascript-client-generated/src/model/Category";
    import CategoryElement from "tmp/pietsmiet.de/javascript-client-generated/src/model/CategoryElement";
    import Channel from "tmp/pietsmiet.de/javascript-client-generated/src/model/Channel";
    import ChannelVideoCountGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/ChannelVideoCountGetRequest";
    import Channels from "tmp/pietsmiet.de/javascript-client-generated/src/model/Channels";
    import Chromecast from "tmp/pietsmiet.de/javascript-client-generated/src/model/Chromecast";
    import Clip from "tmp/pietsmiet.de/javascript-client-generated/src/model/Clip";
    import Comment from "tmp/pietsmiet.de/javascript-client-generated/src/model/Comment";
    import CommunitySuggestionsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/CommunitySuggestionsGetRequest";
    import ConfigAssetVersionGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/ConfigAssetVersionGetRequest";
    import ConfigEnumerationsCountriesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/ConfigEnumerationsCountriesGetRequest";
    import ConfigOriginIntegrityHeader from "tmp/pietsmiet.de/javascript-client-generated/src/model/ConfigOriginIntegrityHeader";
    import Counts from "tmp/pietsmiet.de/javascript-client-generated/src/model/Counts";
    import Dash from "tmp/pietsmiet.de/javascript-client-generated/src/model/Dash";
    import Data from "tmp/pietsmiet.de/javascript-client-generated/src/model/Data";
    import Data1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Data1";
    import Data3 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Data3";
    import Datum from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum";
    import Datum1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum1";
    import Datum10 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum10";
    import Datum11 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum11";
    import Datum12 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum12";
    import Datum13 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum13";
    import Datum14 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum14";
    import Datum15 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum15";
    import Datum16 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum16";
    import Datum17 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum17";
    import Datum18 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum18";
    import Datum19 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum19";
    import Datum2 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum2";
    import Datum20 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum20";
    import Datum21 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum21";
    import Datum22 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum22";
    import Datum23 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum23";
    import Datum24 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum24";
    import Datum3 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum3";
    import Datum4 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum4";
    import Datum5 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum5";
    import Datum6 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum6";
    import Datum7 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum7";
    import Datum8 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum8";
    import Datum9 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Datum9";
    import DatumPreferences from "tmp/pietsmiet.de/javascript-client-generated/src/model/DatumPreferences";
    import DatumThumbnail from "tmp/pietsmiet.de/javascript-client-generated/src/model/DatumThumbnail";
    import Detail from "tmp/pietsmiet.de/javascript-client-generated/src/model/Detail";
    import Details from "tmp/pietsmiet.de/javascript-client-generated/src/model/Details";
    import Discount from "tmp/pietsmiet.de/javascript-client-generated/src/model/Discount";
    import Dislike from "tmp/pietsmiet.de/javascript-client-generated/src/model/Dislike";
    import Episode from "tmp/pietsmiet.de/javascript-client-generated/src/model/Episode";
    import Errors from "tmp/pietsmiet.de/javascript-client-generated/src/model/Errors";
    import Event from "tmp/pietsmiet.de/javascript-client-generated/src/model/Event";
    import Feed from "tmp/pietsmiet.de/javascript-client-generated/src/model/Feed";
    import FirstVideo from "tmp/pietsmiet.de/javascript-client-generated/src/model/FirstVideo";
    import FirstVideoThumbnail from "tmp/pietsmiet.de/javascript-client-generated/src/model/FirstVideoThumbnail";
    import FluffyVariation from "tmp/pietsmiet.de/javascript-client-generated/src/model/FluffyVariation";
    import Follow from "tmp/pietsmiet.de/javascript-client-generated/src/model/Follow";
    import From from "tmp/pietsmiet.de/javascript-client-generated/src/model/From";
    import Generic from "tmp/pietsmiet.de/javascript-client-generated/src/model/Generic";
    import HLS from "tmp/pietsmiet.de/javascript-client-generated/src/model/HLS";
    import HeadlinesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/HeadlinesGetRequest";
    import IndecentVariation from "tmp/pietsmiet.de/javascript-client-generated/src/model/IndecentVariation";
    import IndigoVariation from "tmp/pietsmiet.de/javascript-client-generated/src/model/IndigoVariation";
    import Item from "tmp/pietsmiet.de/javascript-client-generated/src/model/Item";
    import LatestArticle from "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestArticle";
    import LatestArticlePreferences from "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestArticlePreferences";
    import LatestArticleThumbnail from "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestArticleThumbnail";
    import LatestPlaylist from "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestPlaylist";
    import LatestPodcast from "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestPodcast";
    import LatestPodcastThumbnail from "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestPodcastThumbnail";
    import LatestVideo from "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestVideo";
    import LatestVideoPerspective from "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestVideoPerspective";
    import LatestVideoThumbnail from "tmp/pietsmiet.de/javascript-client-generated/src/model/LatestVideoThumbnail";
    import Like from "tmp/pietsmiet.de/javascript-client-generated/src/model/Like";
    import Link from "tmp/pietsmiet.de/javascript-client-generated/src/model/Link";
    import Links from "tmp/pietsmiet.de/javascript-client-generated/src/model/Links";
    import LivestreamsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/LivestreamsGetRequest";
    import Meta from "tmp/pietsmiet.de/javascript-client-generated/src/model/Meta";
    import ModulesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/ModulesGetRequest";
    import NewsArticlesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/NewsArticlesGetRequest";
    import NewsArticlesIDGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/NewsArticlesIDGetRequest";
    import NewsCategories34GetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/NewsCategories34GetRequest";
    import Notifiable from "tmp/pietsmiet.de/javascript-client-generated/src/model/Notifiable";
    import Notification from "tmp/pietsmiet.de/javascript-client-generated/src/model/Notification";
    import Options from "tmp/pietsmiet.de/javascript-client-generated/src/model/Options";
    import Options1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Options1";
    import Options2 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Options2";
    import OtherCategory from "tmp/pietsmiet.de/javascript-client-generated/src/model/OtherCategory";
    import Perspective from "tmp/pietsmiet.de/javascript-client-generated/src/model/Perspective";
    import Playlist from "tmp/pietsmiet.de/javascript-client-generated/src/model/Playlist";
    import PodcastCategoriesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/PodcastCategoriesGetRequest";
    import PodcastEpisodesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/PodcastEpisodesGetRequest";
    import PodcastEpisodesIDGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/PodcastEpisodesIDGetRequest";
    import PollsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/PollsGetRequest";
    import PollsVotesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/PollsVotesGetRequest";
    import Preferences from "tmp/pietsmiet.de/javascript-client-generated/src/model/Preferences";
    import Preferences1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Preferences1";
    import Product from "tmp/pietsmiet.de/javascript-client-generated/src/model/Product";
    import PromotionsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/PromotionsGetRequest";
    import Properties from "tmp/pietsmiet.de/javascript-client-generated/src/model/Properties";
    import PublicSocialAccount from "tmp/pietsmiet.de/javascript-client-generated/src/model/PublicSocialAccount";
    import PurpleCategory from "tmp/pietsmiet.de/javascript-client-generated/src/model/PurpleCategory";
    import PurpleVariation from "tmp/pietsmiet.de/javascript-client-generated/src/model/PurpleVariation";
    import Quality from "tmp/pietsmiet.de/javascript-client-generated/src/model/Quality";
    import Schedule from "tmp/pietsmiet.de/javascript-client-generated/src/model/Schedule";
    import ScheduleThumbnail from "tmp/pietsmiet.de/javascript-client-generated/src/model/ScheduleThumbnail";
    import SchedulesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/SchedulesGetRequest";
    import SchedulesUpcomingGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/SchedulesUpcomingGetRequest";
    import SearchGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/SearchGetRequest";
    import ServiceDefinition from "tmp/pietsmiet.de/javascript-client-generated/src/model/ServiceDefinition";
    import ServiceDefinition1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/ServiceDefinition1";
    import SettingsAssetsBody from "tmp/pietsmiet.de/javascript-client-generated/src/model/SettingsAssetsBody";
    import SocialAccount from "tmp/pietsmiet.de/javascript-client-generated/src/model/SocialAccount";
    import SocialAccount1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/SocialAccount1";
    import Sources from "tmp/pietsmiet.de/javascript-client-generated/src/model/Sources";
    import Status from "tmp/pietsmiet.de/javascript-client-generated/src/model/Status";
    import StickyVariation from "tmp/pietsmiet.de/javascript-client-generated/src/model/StickyVariation";
    import Subject from "tmp/pietsmiet.de/javascript-client-generated/src/model/Subject";
    import Subject1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Subject1";
    import SubjectPreferences from "tmp/pietsmiet.de/javascript-client-generated/src/model/SubjectPreferences";
    import SubscriptionsDiscountsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/SubscriptionsDiscountsGetRequest";
    import SubscriptionsProductsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/SubscriptionsProductsGetRequest";
    import SupportAddOn from "tmp/pietsmiet.de/javascript-client-generated/src/model/SupportAddOn";
    import SupportPerk from "tmp/pietsmiet.de/javascript-client-generated/src/model/SupportPerk";
    import TagsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/TagsGetRequest";
    import TentacledVariation from "tmp/pietsmiet.de/javascript-client-generated/src/model/TentacledVariation";
    import Thumbnail from "tmp/pietsmiet.de/javascript-client-generated/src/model/Thumbnail";
    import To from "tmp/pietsmiet.de/javascript-client-generated/src/model/To";
    import Token from "tmp/pietsmiet.de/javascript-client-generated/src/model/Token";
    import TopUser from "tmp/pietsmiet.de/javascript-client-generated/src/model/TopUser";
    import Track from "tmp/pietsmiet.de/javascript-client-generated/src/model/Track";
    import Traits from "tmp/pietsmiet.de/javascript-client-generated/src/model/Traits";
    import TrendingVideo from "tmp/pietsmiet.de/javascript-client-generated/src/model/TrendingVideo";
    import TrendingVideoPerspective from "tmp/pietsmiet.de/javascript-client-generated/src/model/TrendingVideoPerspective";
    import TrendingVideoThumbnail from "tmp/pietsmiet.de/javascript-client-generated/src/model/TrendingVideoThumbnail";
    import Type from "tmp/pietsmiet.de/javascript-client-generated/src/model/Type";
    import Type1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Type1";
    import TypeDefinition from "tmp/pietsmiet.de/javascript-client-generated/src/model/TypeDefinition";
    import TypeDefinition1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/TypeDefinition1";
    import URL from "tmp/pietsmiet.de/javascript-client-generated/src/model/URL";
    import User from "tmp/pietsmiet.de/javascript-client-generated/src/model/User";
    import User2 from "tmp/pietsmiet.de/javascript-client-generated/src/model/User2";
    import User3 from "tmp/pietsmiet.de/javascript-client-generated/src/model/User3";
    import User4 from "tmp/pietsmiet.de/javascript-client-generated/src/model/User4";
    import User5 from "tmp/pietsmiet.de/javascript-client-generated/src/model/User5";
    import UserPreferences from "tmp/pietsmiet.de/javascript-client-generated/src/model/UserPreferences";
    import UsersIDAchievementsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDAchievementsGetRequest";
    import UsersIDDislikesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDDislikesGetRequest";
    import UsersIDDislikesPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDDislikesPostRequest";
    import UsersIDDislikesPostRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDDislikesPostRequest1";
    import UsersIDFollowingsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDFollowingsGetRequest";
    import UsersIDGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDGetRequest";
    import UsersIDInvoicesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDInvoicesGetRequest";
    import UsersIDLikesGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDLikesGetRequest";
    import UsersIDLikesPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDLikesPostRequest";
    import UsersIDLikesPostRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDLikesPostRequest1";
    import UsersIDNotificationsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDNotificationsGetRequest";
    import UsersIDNotificationsUUIDPatchRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDNotificationsUUIDPatchRequest";
    import UsersIDNotificationsUUIDPatchRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDNotificationsUUIDPatchRequest1";
    import UsersIDSettingsAssetsPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsAssetsPostRequest";
    import UsersIDSettingsDataRequestPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsDataRequestPostRequest";
    import UsersIDSettingsNotificationsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsNotificationsGetRequest";
    import UsersIDSettingsNotificationsPatchRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsNotificationsPatchRequest";
    import UsersIDSettingsNotificationsPatchRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsNotificationsPatchRequest1";
    import UsersIDSettingsPasswordPatchRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsPasswordPatchRequest";
    import UsersIDSettingsPasswordPatchRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsPasswordPatchRequest1";
    import UsersIDSettingsPasswordPatchRequest2 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsPasswordPatchRequest2";
    import UsersIDSettingsPreferencesPatchRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsPreferencesPatchRequest";
    import UsersIDSettingsPreferencesPatchRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsPreferencesPatchRequest1";
    import UsersIDSettingsProfilePatchRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsProfilePatchRequest";
    import UsersIDSettingsProfilePatchRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsProfilePatchRequest1";
    import UsersIDSettingsTwofactorResetPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsTwofactorResetPostRequest";
    import UsersIDSettingsTwofactorResetPostRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsTwofactorResetPostRequest1";
    import UsersIDSettingsTwofactorSetupGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsTwofactorSetupGetRequest";
    import UsersIDSettingsTwofactorSetupPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsTwofactorSetupPostRequest";
    import UsersIDSettingsTwofactorSetupPostRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSettingsTwofactorSetupPostRequest1";
    import UsersIDSubscriptionsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDSubscriptionsGetRequest";
    import UsersIDTokensGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDTokensGetRequest";
    import UsersIDTokensTokenDeleteRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDTokensTokenDeleteRequest";
    import UsersIDViewsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersIDViewsGetRequest";
    import UsersMeGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersMeGetRequest";
    import UsersObject20ObjectTokensDeleteRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UsersObject20ObjectTokensDeleteRequest";
    import UtilityAutobahnPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityAutobahnPostRequest";
    import UtilityAutobahnPostRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityAutobahnPostRequest1";
    import UtilityCommentsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityCommentsGetRequest";
    import UtilityCommentsIDReportsPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityCommentsIDReportsPostRequest";
    import UtilityCommentsPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityCommentsPostRequest";
    import UtilityCommentsPostRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityCommentsPostRequest1";
    import UtilityFollowsDeleteRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityFollowsDeleteRequest";
    import UtilityFollowsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityFollowsGetRequest";
    import UtilityFollowsPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityFollowsPostRequest";
    import UtilityFollowsPostRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityFollowsPostRequest1";
    import UtilityHighlightsPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityHighlightsPostRequest";
    import UtilityHighlightsPostRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityHighlightsPostRequest1";
    import UtilityPlayerGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/UtilityPlayerGetRequest";
    import Variation from "tmp/pietsmiet.de/javascript-client-generated/src/model/Variation";
    import Variation1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/Variation1";
    import Video from "tmp/pietsmiet.de/javascript-client-generated/src/model/Video";
    import VideoPreferences from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideoPreferences";
    import VideoThumbnail from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideoThumbnail";
    import VideosAuthorsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosAuthorsGetRequest";
    import VideosChannels12GetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosChannels12GetRequest";
    import VideosChannelsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosChannelsGetRequest";
    import VideosClipsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosClipsGetRequest";
    import VideosClipsPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosClipsPostRequest";
    import VideosClipsPostRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosClipsPostRequest1";
    import VideosGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosGetRequest";
    import VideosIDGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosIDGetRequest";
    import VideosIDNextGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosIDNextGetRequest";
    import VideosPlaylistsGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosPlaylistsGetRequest";
    import VideosPlaylistsIDGetRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosPlaylistsIDGetRequest";
    import VideosPlaylistsIDPostRequest from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosPlaylistsIDPostRequest";
    import VideosPlaylistsIDPostRequest1 from "tmp/pietsmiet.de/javascript-client-generated/src/model/VideosPlaylistsIDPostRequest1";
    import Visual from "tmp/pietsmiet.de/javascript-client-generated/src/model/Visual";
    import CommunityApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/CommunityApi";
    import ConfigApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/ConfigApi";
    import HeadlinesApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/HeadlinesApi";
    import LivestreamsApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/LivestreamsApi";
    import ModulesApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/ModulesApi";
    import NewsApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/NewsApi";
    import PodcastApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/PodcastApi";
    import PollsApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/PollsApi";
    import PromotionsApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/PromotionsApi";
    import SchedulesApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/SchedulesApi";
    import SearchApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/SearchApi";
    import SubscriptionsApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/SubscriptionsApi";
    import TagsApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/TagsApi";
    import UsersApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/UsersApi";
    import UtilityApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/UtilityApi";
    import VideosApi from "tmp/pietsmiet.de/javascript-client-generated/src/api/VideosApi";
    export { ApiClient, Action, Advertising, Analytics, AnyOfDatum11ReadAt, AnyOfDatum12SupportAddOn, AnyOfDatum13ParticipantCount, AnyOfDatum13ParticipantLineup, AnyOfDatum13ReferringTo, AnyOfDatum13Url, AnyOfDatum13UrlDomain, AnyOfDatum15Id, AnyOfDatum15PublishDate, AnyOfDatum15Type, AnyOfDatum16Reply, AnyOfDatum16Timestamp, AnyOfDatum21Channel, AnyOfDatum21FirstVideo, AnyOfDatum3RemoteUrl, AnyOfDatum7DurationPretty, AnyOfDatum7FollowingsCount, AnyOfDatum7MetaTags, AnyOfDatum7RemoteUrl, AnyOfDatum7VideosCount, AnyOfDatum9Avatar, AnyOfDatum9Banner, AnyOfDatum9Description, AnyOfFeedRemoteUrl, AnyOfFromName, AnyOfLatestVideoDurationPretty, AnyOfLinkLabel, AnyOfLinkUrl, AnyOfLinksNext, AnyOfPerspectiveTitle, AnyOfThumbnailRemoteUrl, AnyOfTrendingVideoPerspectiveTitle, AnyOfUser4Avatar, AnyOfUser5Avatar, AnyOfVariation1Url, Article, ArticlePreferences, AtedAt, Author, AuthorPreferences, Avatar, Avatar1, AvatarVariation, Braintree, BraintreePlan, Brand, Category, CategoryElement, Channel, ChannelVideoCountGetRequest, Channels, Chromecast, Clip, Comment, CommunitySuggestionsGetRequest, ConfigAssetVersionGetRequest, ConfigEnumerationsCountriesGetRequest, ConfigOriginIntegrityHeader, Counts, Dash, Data, Data1, Data3, Datum, Datum1, Datum10, Datum11, Datum12, Datum13, Datum14, Datum15, Datum16, Datum17, Datum18, Datum19, Datum2, Datum20, Datum21, Datum22, Datum23, Datum24, Datum3, Datum4, Datum5, Datum6, Datum7, Datum8, Datum9, DatumPreferences, DatumThumbnail, Detail, Details, Discount, Dislike, Episode, Errors, Event, Feed, FirstVideo, FirstVideoThumbnail, FluffyVariation, Follow, From, Generic, HLS, HeadlinesGetRequest, IndecentVariation, IndigoVariation, Item, LatestArticle, LatestArticlePreferences, LatestArticleThumbnail, LatestPlaylist, LatestPodcast, LatestPodcastThumbnail, LatestVideo, LatestVideoPerspective, LatestVideoThumbnail, Like, Link, Links, LivestreamsGetRequest, Meta, ModulesGetRequest, NewsArticlesGetRequest, NewsArticlesIDGetRequest, NewsCategories34GetRequest, Notifiable, Notification, Options, Options1, Options2, OtherCategory, Perspective, Playlist, PodcastCategoriesGetRequest, PodcastEpisodesGetRequest, PodcastEpisodesIDGetRequest, PollsGetRequest, PollsVotesGetRequest, Preferences, Preferences1, Product, PromotionsGetRequest, Properties, PublicSocialAccount, PurpleCategory, PurpleVariation, Quality, Schedule, ScheduleThumbnail, SchedulesGetRequest, SchedulesUpcomingGetRequest, SearchGetRequest, ServiceDefinition, ServiceDefinition1, SettingsAssetsBody, SocialAccount, SocialAccount1, Sources, Status, StickyVariation, Subject, Subject1, SubjectPreferences, SubscriptionsDiscountsGetRequest, SubscriptionsProductsGetRequest, SupportAddOn, SupportPerk, TagsGetRequest, TentacledVariation, Thumbnail, To, Token, TopUser, Track, Traits, TrendingVideo, TrendingVideoPerspective, TrendingVideoThumbnail, Type, Type1, TypeDefinition, TypeDefinition1, URL, User, User2, User3, User4, User5, UserPreferences, UsersIDAchievementsGetRequest, UsersIDDislikesGetRequest, UsersIDDislikesPostRequest, UsersIDDislikesPostRequest1, UsersIDFollowingsGetRequest, UsersIDGetRequest, UsersIDInvoicesGetRequest, UsersIDLikesGetRequest, UsersIDLikesPostRequest, UsersIDLikesPostRequest1, UsersIDNotificationsGetRequest, UsersIDNotificationsUUIDPatchRequest, UsersIDNotificationsUUIDPatchRequest1, UsersIDSettingsAssetsPostRequest, UsersIDSettingsDataRequestPostRequest, UsersIDSettingsNotificationsGetRequest, UsersIDSettingsNotificationsPatchRequest, UsersIDSettingsNotificationsPatchRequest1, UsersIDSettingsPasswordPatchRequest, UsersIDSettingsPasswordPatchRequest1, UsersIDSettingsPasswordPatchRequest2, UsersIDSettingsPreferencesPatchRequest, UsersIDSettingsPreferencesPatchRequest1, UsersIDSettingsProfilePatchRequest, UsersIDSettingsProfilePatchRequest1, UsersIDSettingsTwofactorResetPostRequest, UsersIDSettingsTwofactorResetPostRequest1, UsersIDSettingsTwofactorSetupGetRequest, UsersIDSettingsTwofactorSetupPostRequest, UsersIDSettingsTwofactorSetupPostRequest1, UsersIDSubscriptionsGetRequest, UsersIDTokensGetRequest, UsersIDTokensTokenDeleteRequest, UsersIDViewsGetRequest, UsersMeGetRequest, UsersObject20ObjectTokensDeleteRequest, UtilityAutobahnPostRequest, UtilityAutobahnPostRequest1, UtilityCommentsGetRequest, UtilityCommentsIDReportsPostRequest, UtilityCommentsPostRequest, UtilityCommentsPostRequest1, UtilityFollowsDeleteRequest, UtilityFollowsGetRequest, UtilityFollowsPostRequest, UtilityFollowsPostRequest1, UtilityHighlightsPostRequest, UtilityHighlightsPostRequest1, UtilityPlayerGetRequest, Variation, Variation1, Video, VideoPreferences, VideoThumbnail, VideosAuthorsGetRequest, VideosChannels12GetRequest, VideosChannelsGetRequest, VideosClipsGetRequest, VideosClipsPostRequest, VideosClipsPostRequest1, VideosGetRequest, VideosIDGetRequest, VideosIDNextGetRequest, VideosPlaylistsGetRequest, VideosPlaylistsIDGetRequest, VideosPlaylistsIDPostRequest, VideosPlaylistsIDPostRequest1, Visual, CommunityApi, ConfigApi, HeadlinesApi, LivestreamsApi, ModulesApi, NewsApi, PodcastApi, PollsApi, PromotionsApi, SchedulesApi, SearchApi, SubscriptionsApi, TagsApi, UsersApi, UtilityApi, VideosApi };
}
declare module "tmp/pietsmiet.de/javascript-client-generated/src/app" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/assert-equals" {
    function _exports(expected: any, actual: any, ptr: any): void;
    export = _exports;
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/CommunityApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/ConfigApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/HeadlinesApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/LivestreamsApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/ModulesApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/NewsApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/PodcastApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/PollsApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/PromotionsApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/SchedulesApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/SearchApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/SubscriptionsApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/TagsApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/UsersApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/UtilityApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/api/VideosApi.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Action.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Advertising.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Analytics.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum11ReadAt.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum12SupportAddOn.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum13ParticipantCount.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum13ParticipantLineup.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum13ReferringTo.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum13Url.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum13UrlDomain.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum15Id.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum15PublishDate.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum15Type.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum16Reply.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum16Timestamp.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum21Channel.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum21FirstVideo.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum3RemoteUrl.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum7DurationPretty.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum7FollowingsCount.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum7MetaTags.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum7RemoteUrl.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum7VideosCount.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum9Avatar.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum9Banner.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfDatum9Description.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfFeedRemoteUrl.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfFromName.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfLatestVideoDurationPretty.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfLinkLabel.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfLinkUrl.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfLinksNext.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfPerspectiveTitle.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfThumbnailRemoteUrl.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfTrendingVideoPerspectiveTitle.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfUser4Avatar.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfUser5Avatar.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AnyOfVariation1Url.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Article.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/ArticlePreferences.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AtedAt.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Author.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AuthorPreferences.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Avatar.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Avatar1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/AvatarVariation.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Braintree.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/BraintreePlan.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Brand.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Category.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/CategoryElement.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Channel.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/ChannelVideoCountGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Channels.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Chromecast.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Clip.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Comment.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/CommunitySuggestionsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/ConfigAssetVersionGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/ConfigEnumerationsCountriesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/ConfigOriginIntegrityHeader.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Counts.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Dash.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Data.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Data1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Data3.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum10.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum11.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum12.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum13.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum14.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum15.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum16.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum17.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum18.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum19.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum2.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum20.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum21.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum22.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum23.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum24.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum3.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum4.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum5.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum6.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum7.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum8.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Datum9.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/DatumPreferences.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/DatumThumbnail.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Detail.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Details.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Discount.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Dislike.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Episode.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Errors.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Event.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Feed.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/FirstVideo.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/FirstVideoThumbnail.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/FluffyVariation.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Follow.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/From.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Generic.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/HLS.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/HeadlinesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/IndecentVariation.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/IndigoVariation.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Item.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/LatestArticle.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/LatestArticlePreferences.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/LatestArticleThumbnail.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/LatestPlaylist.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/LatestPodcast.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/LatestPodcastThumbnail.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/LatestVideo.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/LatestVideoPerspective.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/LatestVideoThumbnail.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Like.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Link.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Links.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/LivestreamsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Meta.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/ModulesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/NewsArticlesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/NewsArticlesIDGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/NewsCategories34GetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Notifiable.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Notification.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Options.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Options1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Options2.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/OtherCategory.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Perspective.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Playlist.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/PodcastCategoriesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/PodcastEpisodesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/PodcastEpisodesIDGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/PollsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/PollsVotesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Preferences.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Preferences1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Product.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/PromotionsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Properties.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/PublicSocialAccount.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/PurpleCategory.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/PurpleVariation.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Quality.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Schedule.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/ScheduleThumbnail.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SchedulesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SchedulesUpcomingGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SearchGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/ServiceDefinition.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/ServiceDefinition1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SettingsAssetsBody.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SocialAccount.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SocialAccount1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Sources.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Status.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/StickyVariation.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Subject.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Subject1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SubjectPreferences.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SubscriptionsDiscountsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SubscriptionsProductsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SupportAddOn.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/SupportPerk.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/TagsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/TentacledVariation.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Thumbnail.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/To.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Token.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/TopUser.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Track.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Traits.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/TrendingVideo.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/TrendingVideoPerspective.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/TrendingVideoThumbnail.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Type.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Type1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/TypeDefinition.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/TypeDefinition1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/URL.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/User.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/User2.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/User3.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/User4.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/User5.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UserPreferences.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDAchievementsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDDislikesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDDislikesPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDDislikesPostRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDFollowingsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDInvoicesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDLikesGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDLikesPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDLikesPostRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDNotificationsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDNotificationsUUIDPatchRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDNotificationsUUIDPatchRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsAssetsPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsDataRequestPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsNotificationsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsNotificationsPatchRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsNotificationsPatchRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsPasswordPatchRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsPasswordPatchRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsPasswordPatchRequest2.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsPreferencesPatchRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsPreferencesPatchRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsProfilePatchRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsProfilePatchRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsTwofactorResetPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsTwofactorResetPostRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsTwofactorSetupGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsTwofactorSetupPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSettingsTwofactorSetupPostRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDSubscriptionsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDTokensGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDTokensTokenDeleteRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersIDViewsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersMeGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UsersObject20ObjectTokensDeleteRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityAutobahnPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityAutobahnPostRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityCommentsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityCommentsIDReportsPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityCommentsPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityCommentsPostRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityFollowsDeleteRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityFollowsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityFollowsPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityFollowsPostRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityHighlightsPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityHighlightsPostRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/UtilityPlayerGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Variation.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Variation1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Video.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideoPreferences.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideoThumbnail.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosAuthorsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosChannels12GetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosChannelsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosClipsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosClipsPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosClipsPostRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosIDGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosIDNextGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosPlaylistsGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosPlaylistsIDGetRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosPlaylistsIDPostRequest.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/VideosPlaylistsIDPostRequest1.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/javascript-client-generated/test/model/Visual.spec" {
    export {};
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/configuration" {
    export interface ConfigurationParameters {
        apiKeys?: {
            [key: string]: string;
        };
        username?: string;
        password?: string;
        accessToken?: string | (() => string);
        basePath?: string;
        withCredentials?: boolean;
    }
    export class Configuration {
        apiKeys?: {
            [key: string]: string;
        };
        username?: string;
        password?: string;
        accessToken?: string | (() => string);
        basePath?: string;
        withCredentials?: boolean;
        constructor(configurationParameters?: ConfigurationParameters);
        selectHeaderContentType(contentTypes: string[]): string | undefined;
        selectHeaderAccept(accepts: string[]): string | undefined;
        isJsonMime(mime: string): boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/encoder" {
    import { HttpUrlEncodingCodec } from '@angular/common/http';
    export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
        encodeKey(k: string): string;
        encodeValue(v: string): string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/status" {
    export interface Status {
        colorBg?: string;
        colorText?: string;
        createdAt?: Date;
        isClosed?: boolean;
        name?: string;
        reason?: any;
        title?: string;
        updatedAt?: Date;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences1" {
    export interface Preferences1 {
        commentsOrderOwnFirst?: boolean;
        commentsOrderPopular?: boolean;
        country?: string;
        enableDarkmode?: boolean;
        enableDarkmodeSchedule?: boolean;
        enableSpoilers?: boolean;
        publicProfile?: boolean;
        scrollTopRouteChange?: boolean;
        showInPresence?: boolean;
        showInSubscribedUsers?: boolean;
        subscribeNewsletter?: boolean;
        subscriptionEnableIdentification?: boolean;
        subscriptionKeepAds?: boolean;
        timezone?: string;
        useGravatar?: boolean;
        videosAutocontinue?: boolean;
        videosAutoplay?: boolean;
        videosPlayerFloating?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/user" {
    import { Preferences1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences1";
    export interface User {
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: Preferences1;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum13" {
    import { Status } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/status";
    import { User } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user";
    export interface Datum13 {
        commentsCount?: number;
        createdAt?: Date;
        description?: string;
        descriptionRaw?: string;
        dislikesCount?: number;
        id?: number;
        likesCount?: number;
        participantCount?: number;
        participantLineup?: number;
        participantLineupDescription?: string;
        referringTo?: string;
        slug?: string;
        status?: Status;
        title?: string;
        type?: number;
        typeDescription?: string;
        updatedAt?: Date;
        url?: string;
        urlDomain?: string;
        urlSlug?: string;
        user?: User;
        voteable?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/links" {
    export interface Links {
        first?: string;
        last?: string;
        next?: string;
        prev?: any;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/link" {
    export interface Link {
        active?: boolean;
        label?: string;
        url?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta" {
    import { Link } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/link";
    export interface Meta {
        currentPage?: number;
        from?: number;
        lastPage?: number;
        links?: Array<Link>;
        path?: string;
        perPage?: number;
        to?: number;
        total?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/communitySuggestionsGetRequest" {
    import { Datum13 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum13";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface CommunitySuggestionsGetRequest {
        data?: Array<Datum13>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/variables" {
    export const BASE_PATH: any;
    export const COLLECTION_FORMATS: {
        csv: string;
        tsv: string;
        ssv: string;
        pipes: string;
    };
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/community.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { CommunitySuggestionsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/communitySuggestionsGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class CommunityService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getCommunitySuggestions(page?: string, limit?: string, order?: string, statuses?: string, observe?: 'body', reportProgress?: boolean): Observable<CommunitySuggestionsGetRequest>;
        getCommunitySuggestions(page?: string, limit?: string, order?: string, statuses?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommunitySuggestionsGetRequest>>;
        getCommunitySuggestions(page?: string, limit?: string, order?: string, statuses?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommunitySuggestionsGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/configAssetVersionGetRequest" {
    export interface ConfigAssetVersionGetRequest {
        hash?: string;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum1" {
    export interface Datum1 {
        code?: string;
        flatUrl?: string;
        localizedName?: string;
        name?: string;
        tax?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/configEnumerationsCountriesGetRequest" {
    import { Datum1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum1";
    export interface ConfigEnumerationsCountriesGetRequest {
        data?: Array<Datum1>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/configOriginIntegrityHeader" {
    export interface ConfigOriginIntegrityHeader {
        h?: ConfigOriginIntegrityHeader.HEnum;
        v?: string;
    }
    export namespace ConfigOriginIntegrityHeader {
        type HEnum = 'X-Origin-Integrity' | 'WC1PcmlnaW4tSW50ZWdyaXR5';
        const HEnum: {
            XOriginIntegrity: HEnum;
            WC1PcmlnaW4tSW50ZWdyaXR5: HEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/config.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { ConfigAssetVersionGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/configAssetVersionGetRequest";
    import { ConfigEnumerationsCountriesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/configEnumerationsCountriesGetRequest";
    import { ConfigOriginIntegrityHeader } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/configOriginIntegrityHeader";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class ConfigService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getConfigAssetVersion(observe?: 'body', reportProgress?: boolean): Observable<ConfigAssetVersionGetRequest>;
        getConfigAssetVersion(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConfigAssetVersionGetRequest>>;
        getConfigAssetVersion(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConfigAssetVersionGetRequest>>;
        getConfigEnumerationsCountries(observe?: 'body', reportProgress?: boolean): Observable<ConfigEnumerationsCountriesGetRequest>;
        getConfigEnumerationsCountries(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConfigEnumerationsCountriesGetRequest>>;
        getConfigEnumerationsCountries(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConfigEnumerationsCountriesGetRequest>>;
        getXOriginIntegrityHeader(observe?: 'body', reportProgress?: boolean): Observable<ConfigOriginIntegrityHeader>;
        getXOriginIntegrityHeader(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConfigOriginIntegrityHeader>>;
        getXOriginIntegrityHeader(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConfigOriginIntegrityHeader>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum15" {
    export interface Datum15 {
        ad?: boolean;
        id?: number | string;
        publishDate?: Date;
        title?: string;
        type?: string;
        url?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/headlinesGetRequest" {
    import { Datum15 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum15";
    export interface HeadlinesGetRequest {
        data?: Array<Datum15>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/headlines.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { HeadlinesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/headlinesGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class HeadlinesService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getHeadlines(observe?: 'body', reportProgress?: boolean): Observable<HeadlinesGetRequest>;
        getHeadlines(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<HeadlinesGetRequest>>;
        getHeadlines(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<HeadlinesGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum14" {
    export interface Datum14 {
        createdAt?: Date;
        externalUrl?: string;
        id?: number;
        live?: number;
        service?: number;
        streamGame?: any;
        streamId?: string;
        streamStartedAt?: Date;
        streamThumbnail?: string;
        streamTitle?: string;
        streamViewerCount?: number;
        type?: number;
        updatedAt?: Date;
        userAvatar?: string;
        userBanner?: string;
        userDescription?: string;
        userDisplayName?: string;
        userId?: number;
        userName?: string;
        userType?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/livestreamsGetRequest" {
    import { Datum14 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum14";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface LivestreamsGetRequest {
        data?: Array<Datum14>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/livestreams.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { LivestreamsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/livestreamsGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class LivestreamsService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getLivestreams(observe?: 'body', reportProgress?: boolean): Observable<LivestreamsGetRequest>;
        getLivestreams(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LivestreamsGetRequest>>;
        getLivestreams(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LivestreamsGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/authorPreferences" {
    export interface AuthorPreferences {
        publicProfile?: boolean;
        subscriptionEnableIdentification?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/author" {
    import { AuthorPreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/authorPreferences";
    export interface Author {
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: AuthorPreferences;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/category" {
    export interface Category {
        description?: any;
        id?: number;
        slug?: string;
        title?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticlePreferences" {
    export interface LatestArticlePreferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/purpleVariation" {
    export interface PurpleVariation {
        file?: PurpleVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace PurpleVariation {
        type FileEnum = '3d796cb90e82457ad489898ed177ff91a3e42489.jpg' | '7b66d92e821f3d530670a7be04e63ecf933dc983.jpg' | '3815d8c9c15175150fcdbcd5d1fe66fb62aab967.jpg' | 'c0048e53b61f4c9976688778a9bd8abe4750513f.jpg' | 'b0140ea74a478863ab8fd52cfb5399bbd04bf215.jpg' | '6c259457ad9942473f4c9d1cb0562d58a86a5955.jpg' | 'b2bda99459cec7fcb94136afd7807270e7cf9fd2.jpg' | '8dd4a663b31368722f6cbbd68c7aa6d6a2f9174b.jpg' | 'd95a05416032ad0230e68f2ff9ae7158cc22a4b5.jpg' | '403f21b09b5ac9711d6029f1b616ac4bff4e2d5b.jpg' | 'de8c10a358da1921713a29c9c4a0128b388f2dc9.jpg' | '0fbf12a2a59313fb10054a111bc383b09bbb7944.jpg' | '8fcb08375de48178e73c2fcf6061c25cfd641fad.jpg' | '92a305e37f5bc8f686ca0875bf2d0106e08364be.jpg' | '9e8d374aa0e75e85390d577fe69c93d2bb27bc48.jpg';
        const FileEnum: {
            _3d796cb90e82457ad489898ed177ff91a3e42489Jpg: FileEnum;
            _7b66d92e821f3d530670a7be04e63ecf933dc983Jpg: FileEnum;
            _3815d8c9c15175150fcdbcd5d1fe66fb62aab967Jpg: FileEnum;
            C0048e53b61f4c9976688778a9bd8abe4750513fJpg: FileEnum;
            B0140ea74a478863ab8fd52cfb5399bbd04bf215Jpg: FileEnum;
            _6c259457ad9942473f4c9d1cb0562d58a86a5955Jpg: FileEnum;
            B2bda99459cec7fcb94136afd7807270e7cf9fd2Jpg: FileEnum;
            _8dd4a663b31368722f6cbbd68c7aa6d6a2f9174bJpg: FileEnum;
            D95a05416032ad0230e68f2ff9ae7158cc22a4b5Jpg: FileEnum;
            _403f21b09b5ac9711d6029f1b616ac4bff4e2d5bJpg: FileEnum;
            De8c10a358da1921713a29c9c4a0128b388f2dc9Jpg: FileEnum;
            _0fbf12a2a59313fb10054a111bc383b09bbb7944Jpg: FileEnum;
            _8fcb08375de48178e73c2fcf6061c25cfd641fadJpg: FileEnum;
            _92a305e37f5bc8f686ca0875bf2d0106e08364beJpg: FileEnum;
            _9e8d374aa0e75e85390d577fe69c93d2bb27bc48Jpg: FileEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticleThumbnail" {
    import { PurpleVariation } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/purpleVariation";
    export interface LatestArticleThumbnail {
        collection?: LatestArticleThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<PurpleVariation>;
    }
    export namespace LatestArticleThumbnail {
        type CollectionEnum = 'thumbnail';
        const CollectionEnum: {
            Thumbnail: CollectionEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticle" {
    import { Author } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/author";
    import { Category } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/category";
    import { LatestArticlePreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticlePreferences";
    import { LatestArticleThumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticleThumbnail";
    export interface LatestArticle {
        author?: Author;
        categories?: Array<Category>;
        commentsCount?: any;
        featured?: boolean;
        id?: number;
        intro?: LatestArticle.IntroEnum;
        preferences?: LatestArticlePreferences;
        publishDate?: Date;
        slug?: LatestArticle.SlugEnum;
        text?: any;
        thumbnail?: LatestArticleThumbnail;
        title?: LatestArticle.TitleEnum;
        url?: string;
        urlSlug?: LatestArticle.UrlSlugEnum;
    }
    export namespace LatestArticle {
        type IntroEnum = 'Stimmt jetzt über die nächste Folge ab!' | 'Reicht eure Vorschläge ein!' | 'Unsere Termine auf der gamescom' | 'Mit diesen Tipps macht ihr uns das Leben leichter' | 'Ein kleiner Leitfaden, um euch und uns das Leben zu erleichtern';
        const IntroEnum: {
            StimmtJetztBerDieNchsteFolgeAb: IntroEnum;
            ReichtEureVorschlgeEin: IntroEnum;
            UnsereTermineAufDerGamescom: IntroEnum;
            MitDiesenTippsMachtIhrUnsDasLebenLeichter: IntroEnum;
            EinKleinerLeitfadenUmEuchUndUnsDasLebenZuErleichtern: IntroEnum;
        };
        type SlugEnum = 'retro-battle-umfrage' | 'die-goldene-emma-2024-einreichung-dezember-bis-juli' | 'gamescom-2024-hier-konnt-ihr-die-jungs-treffen' | 'so-erhoht-ihr-die-chance-dass-wir-eure-spielshows-spielen' | '50-fragen-so-sendet-ihr-eure-quizshow-richtig-ein';
        const SlugEnum: {
            RetroBattleUmfrage: SlugEnum;
            DieGoldeneEmma2024EinreichungDezemberBisJuli: SlugEnum;
            Gamescom2024HierKonntIhrDieJungsTreffen: SlugEnum;
            SoErhohtIhrDieChanceDassWirEureSpielshowsSpielen: SlugEnum;
            _50FragenSoSendetIhrEureQuizshowRichtigEin: SlugEnum;
        };
        type TitleEnum = 'Retro Battle: Umfrage' | 'Die goldene Emma 2024: Einreichung Dezember bis Juli' | 'gamescom 2024: Hier könnt ihr die Jungs treffen' | 'So erhöht ihr die Chance, dass wir eure Spielshows spielen!' | '50 Fragen: So sendet ihr eure Quizshow richtig ein';
        const TitleEnum: {
            RetroBattleUmfrage: TitleEnum;
            DieGoldeneEmma2024EinreichungDezemberBisJuli: TitleEnum;
            Gamescom2024HierKnntIhrDieJungsTreffen: TitleEnum;
            SoErhhtIhrDieChanceDassWirEureSpielshowsSpielen: TitleEnum;
            _50FragenSoSendetIhrEureQuizshowRichtigEin: TitleEnum;
        };
        type UrlSlugEnum = '8586-retro-battle-umfrage' | '8585-die-goldene-emma-2024-einreichung-dezember-bis-juli' | '8584-gamescom-2024-hier-konnt-ihr-die-jungs-treffen' | '8582-so-erhoht-ihr-die-chance-dass-wir-eure-spielshows-spielen' | '8581-50-fragen-so-sendet-ihr-eure-quizshow-richtig-ein';
        const UrlSlugEnum: {
            _8586RetroBattleUmfrage: UrlSlugEnum;
            _8585DieGoldeneEmma2024EinreichungDezemberBisJuli: UrlSlugEnum;
            _8584Gamescom2024HierKonntIhrDieJungsTreffen: UrlSlugEnum;
            _8582SoErhohtIhrDieChanceDassWirEureSpielshowsSpielen: UrlSlugEnum;
            _858150FragenSoSendetIhrEureQuizshowRichtigEin: UrlSlugEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/channel" {
    export interface Channel {
        description?: any;
        followingsCount?: any;
        id?: number;
        slug?: string;
        title?: string;
        urlSlug?: string;
        videosCount?: any;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/fluffyVariation" {
    export interface FluffyVariation {
        file?: FluffyVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace FluffyVariation {
        type FileEnum = 'b99baf2ccecdd32b02a8d79a1ce5476fc7767e80.jpg' | '18933a5a8b21d2b4dfb74da7c94b07c334675921.jpg' | 'cdd651b0a4993a4785382d09160ab833d13a407c.jpg' | '3f2cfcba822db50cd16fc191f6de5b5fd3113f17.jpg' | 'd06a09c68edb490d73d79b4de199b513600b09f2.jpg' | 'bdf7325121b52beb12a985055221cced0744962a.jpg' | 'df1bf23f13b052bb3f6bd7e0e20061d6a4f987e9.jpg' | 'c0cde6698b20f26f58ee045da7f4eda09cada6af.jpg' | 'e62c29bbc90a2ddb04713b1d8641e040d8aff343.jpg' | 'e1ce2ef937633fc8a0eb575b2b46db15f0224503.jpg' | '34703e0a4d8f2f62ecf9042b93af01fa4cf0607d.jpg' | '3c099c436b466a43c5e49d979ba6b4233651fdc9.jpg' | '36518189eecf89bbf392c5ce1d7bea07c810d960.jpg' | '634ade16c38d39d29e1cb446d0b026ee3fcbc6a5.jpg' | '5b3602d16e26e26cc28480ba6bf8374274eee339.jpg';
        const FileEnum: {
            B99baf2ccecdd32b02a8d79a1ce5476fc7767e80Jpg: FileEnum;
            _18933a5a8b21d2b4dfb74da7c94b07c334675921Jpg: FileEnum;
            Cdd651b0a4993a4785382d09160ab833d13a407cJpg: FileEnum;
            _3f2cfcba822db50cd16fc191f6de5b5fd3113f17Jpg: FileEnum;
            D06a09c68edb490d73d79b4de199b513600b09f2Jpg: FileEnum;
            Bdf7325121b52beb12a985055221cced0744962aJpg: FileEnum;
            Df1bf23f13b052bb3f6bd7e0e20061d6a4f987e9Jpg: FileEnum;
            C0cde6698b20f26f58ee045da7f4eda09cada6afJpg: FileEnum;
            E62c29bbc90a2ddb04713b1d8641e040d8aff343Jpg: FileEnum;
            E1ce2ef937633fc8a0eb575b2b46db15f0224503Jpg: FileEnum;
            _34703e0a4d8f2f62ecf9042b93af01fa4cf0607dJpg: FileEnum;
            _3c099c436b466a43c5e49d979ba6b4233651fdc9Jpg: FileEnum;
            _36518189eecf89bbf392c5ce1d7bea07c810d960Jpg: FileEnum;
            _634ade16c38d39d29e1cb446d0b026ee3fcbc6a5Jpg: FileEnum;
            _5b3602d16e26e26cc28480ba6bf8374274eee339Jpg: FileEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/firstVideoThumbnail" {
    import { FluffyVariation } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/fluffyVariation";
    export interface FirstVideoThumbnail {
        collection?: FirstVideoThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<FluffyVariation>;
    }
    export namespace FirstVideoThumbnail {
        type CollectionEnum = 'thumbnail';
        const CollectionEnum: {
            Thumbnail: CollectionEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/firstVideo" {
    import { FirstVideoThumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/firstVideoThumbnail";
    import { LatestArticlePreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticlePreferences";
    export interface FirstVideo {
        commentsCount?: any;
        description?: any;
        featured?: boolean;
        id?: number;
        likesCount?: any;
        preferences?: LatestArticlePreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: string;
        thumbnail?: FirstVideoThumbnail;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestPlaylist" {
    import { Channel } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channel";
    import { FirstVideo } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/firstVideo";
    export interface LatestPlaylist {
        channel?: Channel;
        description?: any;
        firstVideo?: FirstVideo;
        followingsCount?: number;
        id?: number;
        metaTags?: any;
        publishDate?: Date;
        slug?: LatestPlaylist.SlugEnum;
        title?: LatestPlaylist.TitleEnum;
        type?: number;
        urlSlug?: LatestPlaylist.UrlSlugEnum;
        videosCount?: number;
    }
    export namespace LatestPlaylist {
        type SlugEnum = 'retro-battle' | 'betrayal-beach' | 'back-to-school' | 'abc-quiz' | 'upn-down';
        const SlugEnum: {
            RetroBattle: SlugEnum;
            BetrayalBeach: SlugEnum;
            BackToSchool: SlugEnum;
            AbcQuiz: SlugEnum;
            UpnDown: SlugEnum;
        };
        type TitleEnum = 'Retro Battle' | 'Betrayal Beach' | 'Back to School' | 'ABC Quiz' | 'UP\"N DOWN';
        const TitleEnum: {
            RetroBattle: TitleEnum;
            BetrayalBeach: TitleEnum;
            BackToSchool: TitleEnum;
            ABCQuiz: TitleEnum;
            UPNDOWN: TitleEnum;
        };
        type UrlSlugEnum = '155942-retro-battle' | '155893-betrayal-beach' | '155866-back-to-school' | '155762-abc-quiz' | '155689-upn-down';
        const UrlSlugEnum: {
            _155942RetroBattle: UrlSlugEnum;
            _155893BetrayalBeach: UrlSlugEnum;
            _155866BackToSchool: UrlSlugEnum;
            _155762AbcQuiz: UrlSlugEnum;
            _155689UpnDown: UrlSlugEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/tentacledVariation" {
    export interface TentacledVariation {
        file?: string;
        height?: number;
        url?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestPodcastThumbnail" {
    import { TentacledVariation } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/tentacledVariation";
    export interface LatestPodcastThumbnail {
        collection?: LatestPodcastThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<TentacledVariation>;
    }
    export namespace LatestPodcastThumbnail {
        type CollectionEnum = 'thumbnail';
        const CollectionEnum: {
            Thumbnail: CollectionEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestPodcast" {
    import { LatestPodcastThumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestPodcastThumbnail";
    export interface LatestPodcast {
        commentsCount?: any;
        description?: any;
        duration?: number;
        durationPretty?: any;
        id?: number;
        metaTags?: any;
        mime?: LatestPodcast.MimeEnum;
        publishDate?: Date;
        size?: number;
        slug?: LatestPodcast.SlugEnum;
        sourceUrl?: string;
        thumbnail?: LatestPodcastThumbnail;
        title?: LatestPodcast.TitleEnum;
        urlSlug?: LatestPodcast.UrlSlugEnum;
    }
    export namespace LatestPodcast {
        type MimeEnum = 'audio/mpeg';
        const MimeEnum: {
            Audiompeg: MimeEnum;
        };
        type SlugEnum = 'pietcast-447-so-war-die-gamescom';
        const SlugEnum: {
            Pietcast447SoWarDieGamescom: SlugEnum;
        };
        type TitleEnum = 'PietCast #447 - So war die Gamescom';
        const TitleEnum: {
            PietCast447SoWarDieGamescom: TitleEnum;
        };
        type UrlSlugEnum = '3336-pietcast-447-so-war-die-gamescom';
        const UrlSlugEnum: {
            _3336Pietcast447SoWarDieGamescom: UrlSlugEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestVideoPerspective" {
    export interface LatestVideoPerspective {
        id?: number;
        main?: boolean;
        title?: any;
        titlePluralized?: LatestVideoPerspective.TitlePluralizedEnum;
    }
    export namespace LatestVideoPerspective {
        type TitlePluralizedEnum = 's' | 'Brammens' | 'Chris' | 'Peters' | 'Seps' | 'Jules' | 'Svens' | 'Hauptsichts';
        const TitlePluralizedEnum: {
            S: TitlePluralizedEnum;
            Brammens: TitlePluralizedEnum;
            Chris: TitlePluralizedEnum;
            Peters: TitlePluralizedEnum;
            Seps: TitlePluralizedEnum;
            Jules: TitlePluralizedEnum;
            Svens: TitlePluralizedEnum;
            Hauptsichts: TitlePluralizedEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/stickyVariation" {
    export interface StickyVariation {
        file?: StickyVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace StickyVariation {
        type FileEnum = 'a37f22cc1c294615315453d10420d384a037b9a8.jpg' | '3480e67586d0daabc165d448844de7e67ec04b91.jpg' | '45c7f7651f41747982aae27026f76a5b07708862.jpg' | 'b221874d544a4ebb588442178d337cca705e1158.jpg' | 'dbc76769b2f9c0226224e1f315393c9516b5cfb5.jpg' | '539e3fa2e06fc6ffcc7cdcd71884fc027b844217.jpg' | '0cedb2ab18cce454668b951348f4b774cbfd6cfe.jpg' | '3bfc902e4b23fe5e63d6aedd1c40ebd6f75b4622.jpg' | '3c86a022ef10f9fbb71ea9c8c23b9a185227675c.jpg' | '252de33ddbaa5d4b526a065bf0326ad8194ca35a.jpg' | '2273ded24ce70bdae4f9305ee6d2599f7abd34c8.jpg' | 'e5ecea3160a7185fab907bd040c4e150d19ef972.jpg' | 'abbe986319a2292c1b2e2b3add96244088183007.jpg' | '14321df522fc69d36f9112ddc531338415ab51f1.jpg' | '1e0c8cec5d89c4e5558a8e57e9404b2c12064fac.jpg';
        const FileEnum: {
            A37f22cc1c294615315453d10420d384a037b9a8Jpg: FileEnum;
            _3480e67586d0daabc165d448844de7e67ec04b91Jpg: FileEnum;
            _45c7f7651f41747982aae27026f76a5b07708862Jpg: FileEnum;
            B221874d544a4ebb588442178d337cca705e1158Jpg: FileEnum;
            Dbc76769b2f9c0226224e1f315393c9516b5cfb5Jpg: FileEnum;
            _539e3fa2e06fc6ffcc7cdcd71884fc027b844217Jpg: FileEnum;
            _0cedb2ab18cce454668b951348f4b774cbfd6cfeJpg: FileEnum;
            _3bfc902e4b23fe5e63d6aedd1c40ebd6f75b4622Jpg: FileEnum;
            _3c86a022ef10f9fbb71ea9c8c23b9a185227675cJpg: FileEnum;
            _252de33ddbaa5d4b526a065bf0326ad8194ca35aJpg: FileEnum;
            _2273ded24ce70bdae4f9305ee6d2599f7abd34c8Jpg: FileEnum;
            E5ecea3160a7185fab907bd040c4e150d19ef972Jpg: FileEnum;
            Abbe986319a2292c1b2e2b3add96244088183007Jpg: FileEnum;
            _14321df522fc69d36f9112ddc531338415ab51f1Jpg: FileEnum;
            _1e0c8cec5d89c4e5558a8e57e9404b2c12064facJpg: FileEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestVideoThumbnail" {
    import { StickyVariation } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/stickyVariation";
    export interface LatestVideoThumbnail {
        collection?: LatestVideoThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<StickyVariation>;
    }
    export namespace LatestVideoThumbnail {
        type CollectionEnum = 'thumbnail';
        const CollectionEnum: {
            Thumbnail: CollectionEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestVideo" {
    import { Channel } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channel";
    import { LatestArticlePreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticlePreferences";
    import { LatestVideoPerspective } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestVideoPerspective";
    import { LatestVideoThumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestVideoThumbnail";
    export interface LatestVideo {
        channels?: Array<Channel>;
        commentsCount?: any;
        description?: any;
        duration?: number;
        durationPretty?: string;
        featured?: boolean;
        id?: number;
        likesCount?: any;
        perspectives?: Array<LatestVideoPerspective>;
        preferences?: LatestArticlePreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: LatestVideo.SlugEnum;
        thumbnail?: LatestVideoThumbnail;
        title?: LatestVideo.TitleEnum;
        url?: string;
        urlSlug?: LatestVideo.UrlSlugEnum;
    }
    export namespace LatestVideo {
        type SlugEnum = 'rentner-testen-die-black-ops-6-beta' | 'monty-maulwurf-mvp-worms-clan-wars' | 'react-das-ist-berlin' | 'beschreibe-es-in-worten-jackbox-games-blather-round' | 'minecraft-meets-terraria-pietsmiet-probiert-core-keeper-10';
        const SlugEnum: {
            RentnerTestenDieBlackOps6Beta: SlugEnum;
            MontyMaulwurfMvpWormsClanWars: SlugEnum;
            ReactDasIstBerlin: SlugEnum;
            BeschreibeEsInWortenJackboxGamesBlatherRound: SlugEnum;
            MinecraftMeetsTerrariaPietsmietProbiertCoreKeeper10: SlugEnum;
        };
        type TitleEnum = 'Rentner testen die Black Ops 6 Beta' | 'Monty-Maulwurf MVP | Worms Clan Wars' | 'React: Das ist Berlin #56' | 'BESCHREIBE es in WORTEN! | Jackbox Games Blather \"Round' | 'Minecraft meets Terraria | PietSmiet probiert Core Keeper 1.0';
        const TitleEnum: {
            RentnerTestenDieBlackOps6Beta: TitleEnum;
            MontyMaulwurfMVPWormsClanWars: TitleEnum;
            ReactDasIstBerlin56: TitleEnum;
            BESCHREIBEEsInWORTENJackboxGamesBlatherRound: TitleEnum;
            MinecraftMeetsTerrariaPietSmietProbiertCoreKeeper10: TitleEnum;
        };
        type UrlSlugEnum = '79656-rentner-testen-die-black-ops-6-beta' | '79538-monty-maulwurf-mvp-worms-clan-wars' | '79573-react-das-ist-berlin' | '79569-beschreibe-es-in-worten-jackbox-games-blather-round' | '79651-minecraft-meets-terraria-pietsmiet-probiert-core-keeper-10';
        const UrlSlugEnum: {
            _79656RentnerTestenDieBlackOps6Beta: UrlSlugEnum;
            _79538MontyMaulwurfMvpWormsClanWars: UrlSlugEnum;
            _79573ReactDasIstBerlin: UrlSlugEnum;
            _79569BeschreibeEsInWortenJackboxGamesBlatherRound: UrlSlugEnum;
            _79651MinecraftMeetsTerrariaPietsmietProbiertCoreKeeper10: UrlSlugEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/typeDefinition" {
    export interface TypeDefinition {
        title?: TypeDefinition.TitleEnum;
    }
    export namespace TypeDefinition {
        type TitleEnum = 'Video';
        const TitleEnum: {
            Video: TitleEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/video" {
    import { LatestArticlePreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticlePreferences";
    import { LatestVideoPerspective } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestVideoPerspective";
    export interface Video {
        commentsCount?: any;
        description?: any;
        duration?: number;
        durationPretty?: string;
        featured?: boolean;
        id?: number;
        likesCount?: any;
        perspectives?: Array<LatestVideoPerspective>;
        preferences?: LatestArticlePreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: string;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/item" {
    import { TypeDefinition } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/typeDefinition";
    import { Video } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/video";
    export interface Item {
        description?: any;
        externalUrl?: any;
        externalUrlPlatform?: any;
        publishDate?: Date;
        publishDateSecondary?: Date;
        title?: string;
        type?: number;
        typeDefinition?: TypeDefinition;
        video?: Video;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/indigoVariation" {
    export interface IndigoVariation {
        file?: IndigoVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace IndigoVariation {
        type FileEnum = '98a4dbc8a467110ac6fc68ddfe81706158ef5b5c.jpg' | '58f09a0bc9473e6cf72bcc00ece09ddda0955a37.jpg' | '525ce5d7d1efa88885b2d2dc0a7b477c224ad845.jpg';
        const FileEnum: {
            _98a4dbc8a467110ac6fc68ddfe81706158ef5b5cJpg: FileEnum;
            _58f09a0bc9473e6cf72bcc00ece09ddda0955a37Jpg: FileEnum;
            _525ce5d7d1efa88885b2d2dc0a7b477c224ad845Jpg: FileEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/scheduleThumbnail" {
    import { IndigoVariation } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/indigoVariation";
    export interface ScheduleThumbnail {
        collection?: ScheduleThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<IndigoVariation>;
    }
    export namespace ScheduleThumbnail {
        type CollectionEnum = 'thumbnail';
        const CollectionEnum: {
            Thumbnail: CollectionEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/schedule" {
    import { Item } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/item";
    import { ScheduleThumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/scheduleThumbnail";
    export interface Schedule {
        createdAt?: Date;
        date?: string;
        description?: string;
        full?: boolean;
        id?: number;
        intro?: any;
        items?: Array<Item>;
        thumbnail?: ScheduleThumbnail;
        updatedAt?: Date;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/avatarVariation" {
    export interface AvatarVariation {
        file?: AvatarVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace AvatarVariation {
        type FileEnum = '05070b3df9dfba0ef3a825b50e79252ac5793876.jpg' | '91b805d14533d253e88168777efc515de2471d8b.jpg' | '337eac33e9b9611cfc558e3264d3ac0089a15599.jpg' | '023fddb697b8202d6553bd37c2da79e305ae8aa7.jpg' | 'd02e2cf8f3f219db3b8ff3b3a6d0d185356c7512.jpg' | 'cf2ec2474cc540d3612f0754c1f5e9306fc61c79.jpg' | '8c0602d1ab5c896c18310e4cfac691e8cbe97497.jpg' | '2f8a2ce60431ad7eb060157e15e6a7272721d7ce.jpg' | '324cfb7b3fd72cbe2c31d04fad1574551cadab39.jpg' | 'cc3c3279e4f763ba17471684800f6f695176ada8.jpg' | 'ea73de55528a4a8329e6b8b87a3e26acb1c581d8.jpg' | '0653935b38b2737823aa946acf19e85b685ae38c.jpg' | 'f37394ce42cd9d5fb5ecdc04a15ee4fcdf2ae0e9.jpg' | '43661dea23ff214917ed39709d4e027bcee40d1c.jpg' | '1ba264d2e2f0bad7f1c817e67ff470539534f616.jpg' | 'd84fcf7a59c9e05dfd8b39905037de661389b386.jpg' | 'bd52b49d401a94a2cbc0d1381f1641f59cc90fa1.jpg' | 'a02f1cf239d45b92edc9123d75108c1d832bf00c.jpg' | 'cca3c488a674bc30a00b9908270c9d0d67e7cbb8.jpg' | '8eaa6b0988867d4e44b2078ba611399287bc4fdb.jpg';
        const FileEnum: {
            _05070b3df9dfba0ef3a825b50e79252ac5793876Jpg: FileEnum;
            _91b805d14533d253e88168777efc515de2471d8bJpg: FileEnum;
            _337eac33e9b9611cfc558e3264d3ac0089a15599Jpg: FileEnum;
            _023fddb697b8202d6553bd37c2da79e305ae8aa7Jpg: FileEnum;
            D02e2cf8f3f219db3b8ff3b3a6d0d185356c7512Jpg: FileEnum;
            Cf2ec2474cc540d3612f0754c1f5e9306fc61c79Jpg: FileEnum;
            _8c0602d1ab5c896c18310e4cfac691e8cbe97497Jpg: FileEnum;
            _2f8a2ce60431ad7eb060157e15e6a7272721d7ceJpg: FileEnum;
            _324cfb7b3fd72cbe2c31d04fad1574551cadab39Jpg: FileEnum;
            Cc3c3279e4f763ba17471684800f6f695176ada8Jpg: FileEnum;
            Ea73de55528a4a8329e6b8b87a3e26acb1c581d8Jpg: FileEnum;
            _0653935b38b2737823aa946acf19e85b685ae38cJpg: FileEnum;
            F37394ce42cd9d5fb5ecdc04a15ee4fcdf2ae0e9Jpg: FileEnum;
            _43661dea23ff214917ed39709d4e027bcee40d1cJpg: FileEnum;
            _1ba264d2e2f0bad7f1c817e67ff470539534f616Jpg: FileEnum;
            D84fcf7a59c9e05dfd8b39905037de661389b386Jpg: FileEnum;
            Bd52b49d401a94a2cbc0d1381f1641f59cc90fa1Jpg: FileEnum;
            A02f1cf239d45b92edc9123d75108c1d832bf00cJpg: FileEnum;
            Cca3c488a674bc30a00b9908270c9d0d67e7cbb8Jpg: FileEnum;
            _8eaa6b0988867d4e44b2078ba611399287bc4fdbJpg: FileEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/avatar" {
    import { AvatarVariation } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/avatarVariation";
    export interface Avatar {
        collection?: Avatar.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<AvatarVariation>;
    }
    export namespace Avatar {
        type CollectionEnum = 'avatar';
        const CollectionEnum: {
            Avatar: CollectionEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/topUser" {
    import { AuthorPreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/authorPreferences";
    import { Avatar } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/avatar";
    export interface TopUser {
        avatar?: Avatar;
        banner?: any;
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: AuthorPreferences;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/trendingVideoPerspective" {
    export interface TrendingVideoPerspective {
        id?: number;
        main?: boolean;
        title?: string;
        titlePluralized?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/indecentVariation" {
    export interface IndecentVariation {
        file?: IndecentVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace IndecentVariation {
        type FileEnum = 'b78b5abff75c856c08b28bb11d423d2c86dde046.jpg' | 'a843cc105d578e12b30b4accc7cf1ecc5b2102cc.jpg' | 'ad96a1d917e7171a11061665f936b121f7173454.jpg' | 'e33f8287fb06e285111cf1d976ab66581f3ed391.jpg' | '2a60c0a63033499fbbe44f43071497a1672a4e31.jpg' | '18278b24157e067754fba80f7471beea060cb405.jpg' | '618b16d0439124438f18508fdba1edb367db265f.jpg' | '6ceb0e1f94107cfad26920c57e186d70f2056a8e.jpg' | '03a764aa435fe1e529b1e138dcd5811b603c362e.jpg' | '893de32a745b377292b2b1db7530c06552c0db17.jpg' | '1dfa9e2c54da4dc537d1db62c7df034a474bdde9.jpg' | '361550a272222bbf27b723194e018fa80aeaee2e.jpg' | '3c44c0da15981f3758110466522507122c96426c.jpg' | 'b7824013fcbeebf2e7a16f556d660d53d34fc04e.jpg' | '3062aea303b1bae6babf5c7512537486410cee61.jpg';
        const FileEnum: {
            B78b5abff75c856c08b28bb11d423d2c86dde046Jpg: FileEnum;
            A843cc105d578e12b30b4accc7cf1ecc5b2102ccJpg: FileEnum;
            Ad96a1d917e7171a11061665f936b121f7173454Jpg: FileEnum;
            E33f8287fb06e285111cf1d976ab66581f3ed391Jpg: FileEnum;
            _2a60c0a63033499fbbe44f43071497a1672a4e31Jpg: FileEnum;
            _18278b24157e067754fba80f7471beea060cb405Jpg: FileEnum;
            _618b16d0439124438f18508fdba1edb367db265fJpg: FileEnum;
            _6ceb0e1f94107cfad26920c57e186d70f2056a8eJpg: FileEnum;
            _03a764aa435fe1e529b1e138dcd5811b603c362eJpg: FileEnum;
            _893de32a745b377292b2b1db7530c06552c0db17Jpg: FileEnum;
            _1dfa9e2c54da4dc537d1db62c7df034a474bdde9Jpg: FileEnum;
            _361550a272222bbf27b723194e018fa80aeaee2eJpg: FileEnum;
            _3c44c0da15981f3758110466522507122c96426cJpg: FileEnum;
            B7824013fcbeebf2e7a16f556d660d53d34fc04eJpg: FileEnum;
            _3062aea303b1bae6babf5c7512537486410cee61Jpg: FileEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/trendingVideoThumbnail" {
    import { IndecentVariation } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/indecentVariation";
    export interface TrendingVideoThumbnail {
        collection?: TrendingVideoThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<IndecentVariation>;
    }
    export namespace TrendingVideoThumbnail {
        type CollectionEnum = 'thumbnail';
        const CollectionEnum: {
            Thumbnail: CollectionEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/trendingVideo" {
    import { Channel } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channel";
    import { LatestArticlePreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticlePreferences";
    import { TrendingVideoPerspective } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/trendingVideoPerspective";
    import { TrendingVideoThumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/trendingVideoThumbnail";
    export interface TrendingVideo {
        channels?: Array<Channel>;
        commentsCount?: any;
        description?: any;
        duration?: number;
        durationPretty?: TrendingVideo.DurationPrettyEnum;
        featured?: boolean;
        id?: number;
        likesCount?: any;
        perspectives?: Array<TrendingVideoPerspective>;
        preferences?: LatestArticlePreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: TrendingVideo.SlugEnum;
        thumbnail?: TrendingVideoThumbnail;
        title?: TrendingVideo.TitleEnum;
        url?: TrendingVideo.UrlEnum;
        urlSlug?: TrendingVideo.UrlSlugEnum;
    }
    export namespace TrendingVideo {
        type DurationPrettyEnum = '32:17' | '49:22' | '47:23' | '38:32' | '23:34';
        const DurationPrettyEnum: {
            _3217: DurationPrettyEnum;
            _4922: DurationPrettyEnum;
            _4723: DurationPrettyEnum;
            _3832: DurationPrettyEnum;
            _2334: DurationPrettyEnum;
        };
        type SlugEnum = 'da-wurde-ja-keiner-runterfallen-oder-ttt' | 'ich-muss-hier-raus-perfect-heist-2' | 'trackmania-minecraft' | 'valves-hype-spiel-deadlock' | 'guess-the-game-3gg3-special';
        const SlugEnum: {
            DaWurdeJaKeinerRunterfallenOderTtt: SlugEnum;
            IchMussHierRausPerfectHeist2: SlugEnum;
            TrackmaniaMinecraft: SlugEnum;
            ValvesHypeSpielDeadlock: SlugEnum;
            GuessTheGame3gg3Special: SlugEnum;
        };
        type TitleEnum = 'Da würde ja keiner RUNTERFALLEN! oder? | TTT' | 'ICH MUSS RAUS! | Perfect Heist 2' | 'BESSER WIRDS NICHT MEHR! | Trackmania x Minecraft' | 'VALVES HYPE SPIEL! | Deadlock' | 'Guess The Game 3gg3 SPECIAL!';
        const TitleEnum: {
            DaWrdeJaKeinerRUNTERFALLENOderTTT: TitleEnum;
            ICHMUSSRAUSPerfectHeist2: TitleEnum;
            BESSERWIRDSNICHTMEHRTrackmaniaXMinecraft: TitleEnum;
            VALVESHYPESPIELDeadlock: TitleEnum;
            GuessTheGame3gg3SPECIAL: TitleEnum;
        };
        type UrlEnum = '/videos/79620-da-wurde-ja-keiner-runterfallen-oder-ttt' | '/videos/79622-ich-muss-hier-raus-perfect-heist-2' | '/videos/79618-trackmania-minecraft' | '/videos/79632-valves-hype-spiel-deadlock' | '/videos/79636-guess-the-game-3gg3-special';
        const UrlEnum: {
            _79620DaWurdeJaKeinerRunterfallenOderTtt: UrlEnum;
            _79622IchMussHierRausPerfectHeist2: UrlEnum;
            _79618TrackmaniaMinecraft: UrlEnum;
            _79632ValvesHypeSpielDeadlock: UrlEnum;
            _79636GuessTheGame3gg3Special: UrlEnum;
        };
        type UrlSlugEnum = '79620-da-wurde-ja-keiner-runterfallen-oder-ttt' | '79622-ich-muss-hier-raus-perfect-heist-2' | '79618-trackmania-minecraft' | '79632-valves-hype-spiel-deadlock' | '79636-guess-the-game-3gg3-special';
        const UrlSlugEnum: {
            _79620DaWurdeJaKeinerRunterfallenOderTtt: UrlSlugEnum;
            _79622IchMussHierRausPerfectHeist2: UrlSlugEnum;
            _79618TrackmaniaMinecraft: UrlSlugEnum;
            _79632ValvesHypeSpielDeadlock: UrlSlugEnum;
            _79636GuessTheGame3gg3Special: UrlSlugEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/data1" {
    import { LatestArticle } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticle";
    import { LatestPlaylist } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestPlaylist";
    import { LatestPodcast } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestPodcast";
    import { LatestVideo } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestVideo";
    import { Schedule } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/schedule";
    import { TopUser } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/topUser";
    import { TrendingVideo } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/trendingVideo";
    export interface Data1 {
        latestArticles?: Array<LatestArticle>;
        latestPlaylists?: Array<LatestPlaylist>;
        latestPodcasts?: Array<LatestPodcast>;
        latestVideos?: Array<LatestVideo>;
        schedules?: Array<Schedule>;
        topUsers?: Array<TopUser>;
        trendingVideos?: Array<TrendingVideo>;
        upcomingSchedules?: Array<any>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/modulesGetRequest" {
    import { Data1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/data1";
    export interface ModulesGetRequest {
        data?: Data1;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/modules.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { ModulesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/modulesGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class ModulesService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getModules(observe?: 'body', reportProgress?: boolean): Observable<ModulesGetRequest>;
        getModules(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ModulesGetRequest>>;
        getModules(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ModulesGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datumPreferences" {
    export interface DatumPreferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/variation1" {
    export interface Variation1 {
        file?: string;
        height?: number;
        url?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/thumbnail" {
    import { Variation1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/variation1";
    export interface Thumbnail {
        collection?: Thumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: string;
        variations?: Array<Variation1>;
    }
    export namespace Thumbnail {
        type CollectionEnum = 'thumbnail';
        const CollectionEnum: {
            Thumbnail: CollectionEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum10" {
    import { Author } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/author";
    import { Category } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/category";
    import { DatumPreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datumPreferences";
    import { Thumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/thumbnail";
    export interface Datum10 {
        author?: Author;
        categories?: Array<Category>;
        commentsCount?: number;
        featured?: boolean;
        id?: number;
        intro?: string;
        preferences?: DatumPreferences;
        publishDate?: Date;
        slug?: string;
        text?: any;
        thumbnail?: Thumbnail;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/newsArticlesGetRequest" {
    import { Datum10 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum10";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface NewsArticlesGetRequest {
        data?: Array<Datum10>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/articlePreferences" {
    export interface ArticlePreferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/article" {
    import { ArticlePreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/articlePreferences";
    import { Author } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/author";
    import { Category } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/category";
    import { Thumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/thumbnail";
    export interface Article {
        author?: Author;
        categories?: Array<Category>;
        commentsCount?: number;
        featured?: boolean;
        id?: number;
        intro?: string;
        preferences?: ArticlePreferences;
        publishDate?: Date;
        slug?: string;
        text?: string;
        thumbnail?: Thumbnail;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/newsArticlesIDGetRequest" {
    import { Article } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/article";
    export interface NewsArticlesIDGetRequest {
        article?: Article;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/newsCategories34GetRequest" {
    import { Category } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/category";
    export interface NewsCategories34GetRequest {
        category?: Category;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/news.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { NewsArticlesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/newsArticlesGetRequest";
    import { NewsArticlesIDGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/newsArticlesIDGetRequest";
    import { NewsCategories34GetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/newsCategories34GetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class NewsService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getNewsArticles(limit?: string, order?: string, categories?: string, page?: string, category?: string, observe?: 'body', reportProgress?: boolean): Observable<NewsArticlesGetRequest>;
        getNewsArticles(limit?: string, order?: string, categories?: string, page?: string, category?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewsArticlesGetRequest>>;
        getNewsArticles(limit?: string, order?: string, categories?: string, page?: string, category?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewsArticlesGetRequest>>;
        getNewsArticlesById(id: number, observe?: 'body', reportProgress?: boolean): Observable<NewsArticlesIDGetRequest>;
        getNewsArticlesById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewsArticlesIDGetRequest>>;
        getNewsArticlesById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewsArticlesIDGetRequest>>;
        getNewsCategoriesId(id: number, observe?: 'body', reportProgress?: boolean): Observable<NewsCategories34GetRequest>;
        getNewsCategoriesId(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewsCategories34GetRequest>>;
        getNewsCategoriesId(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewsCategories34GetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/feed" {
    export interface Feed {
        id?: number;
        note?: any;
        remoteUrl?: string;
        slug?: string;
        title?: string;
        url?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum3" {
    import { Feed } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/feed";
    export interface Datum3 {
        cumulative?: boolean;
        description?: any;
        episodesCount?: number;
        feed?: Feed;
        id?: number;
        remoteUrl?: string;
        slug?: string;
        spotifyUrl?: any;
        title?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/podcastCategoriesGetRequest" {
    import { Datum3 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum3";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface PodcastCategoriesGetRequest {
        data?: Array<Datum3>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/otherCategory" {
    export interface OtherCategory {
        cumulative?: boolean;
        description?: any;
        episodesCount?: any;
        id?: number;
        remoteUrl?: any;
        slug?: string;
        spotifyUrl?: any;
        title?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum24" {
    import { OtherCategory } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/otherCategory";
    import { Thumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/thumbnail";
    export interface Datum24 {
        category?: OtherCategory;
        commentsCount?: number;
        description?: string;
        duration?: number;
        durationPretty?: any;
        id?: number;
        metaTags?: any;
        mime?: Datum24.MimeEnum;
        publishDate?: Date;
        size?: number;
        slug?: string;
        sourceUrl?: string;
        thumbnail?: Thumbnail;
        title?: string;
        urlSlug?: string;
    }
    export namespace Datum24 {
        type MimeEnum = 'audio/mpeg';
        const MimeEnum: {
            Audiompeg: MimeEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/podcastEpisodesGetRequest" {
    import { Datum24 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum24";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface PodcastEpisodesGetRequest {
        data?: Array<Datum24>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/episode" {
    import { OtherCategory } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/otherCategory";
    import { Thumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/thumbnail";
    export interface Episode {
        category?: OtherCategory;
        commentsCount?: any;
        description?: string;
        duration?: number;
        durationPretty?: any;
        id?: number;
        metaTags?: any;
        mime?: string;
        publishDate?: Date;
        size?: number;
        slug?: string;
        sourceUrl?: string;
        thumbnail?: Thumbnail;
        title?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/podcastEpisodesIDGetRequest" {
    import { Episode } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/episode";
    export interface PodcastEpisodesIDGetRequest {
        episode?: Episode;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/podcast.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { PodcastCategoriesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/podcastCategoriesGetRequest";
    import { PodcastEpisodesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/podcastEpisodesGetRequest";
    import { PodcastEpisodesIDGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/podcastEpisodesIDGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class PodcastService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getPodcastCategories(observe?: 'body', reportProgress?: boolean): Observable<PodcastCategoriesGetRequest>;
        getPodcastCategories(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PodcastCategoriesGetRequest>>;
        getPodcastCategories(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PodcastCategoriesGetRequest>>;
        getPodcastEpisodes(page?: string, limit?: string, observe?: 'body', reportProgress?: boolean): Observable<PodcastEpisodesGetRequest>;
        getPodcastEpisodes(page?: string, limit?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PodcastEpisodesGetRequest>>;
        getPodcastEpisodes(page?: string, limit?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PodcastEpisodesGetRequest>>;
        getPodcastEpisodesById(id: number, observe?: 'body', reportProgress?: boolean): Observable<PodcastEpisodesIDGetRequest>;
        getPodcastEpisodesById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PodcastEpisodesIDGetRequest>>;
        getPodcastEpisodesById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PodcastEpisodesIDGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/pollsGetRequest" {
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface PollsGetRequest {
        data?: Array<any>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/pollsVotesGetRequest" {
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface PollsVotesGetRequest {
        data?: Array<any>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/polls.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { PollsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/pollsGetRequest";
    import { PollsVotesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/pollsVotesGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class PollsService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getPolls(id?: string, type?: string, observe?: 'body', reportProgress?: boolean): Observable<PollsGetRequest>;
        getPolls(id?: string, type?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PollsGetRequest>>;
        getPolls(id?: string, type?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PollsGetRequest>>;
        getPollsVotes(observe?: 'body', reportProgress?: boolean): Observable<PollsVotesGetRequest>;
        getPollsVotes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PollsVotesGetRequest>>;
        getPollsVotes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PollsVotesGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/promotionsGetRequest" {
    export interface PromotionsGetRequest {
        data?: Array<any>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/promotions.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { PromotionsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/promotionsGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class PromotionsService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getPromotions(ab?: string, observe?: 'body', reportProgress?: boolean): Observable<PromotionsGetRequest>;
        getPromotions(ab?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PromotionsGetRequest>>;
        getPromotions(ab?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PromotionsGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum18" {
    import { Item } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/item";
    import { Thumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/thumbnail";
    export interface Datum18 {
        createdAt?: Date;
        date?: string;
        description?: string;
        full?: boolean;
        id?: number;
        intro?: any;
        items?: Array<Item>;
        thumbnail?: Thumbnail;
        updatedAt?: Date;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/schedulesGetRequest" {
    import { Datum18 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum18";
    export interface SchedulesGetRequest {
        data?: Array<Datum18>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/schedulesUpcomingGetRequest" {
    export interface SchedulesUpcomingGetRequest {
        data?: Array<any>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/schedules.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { SchedulesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/schedulesGetRequest";
    import { SchedulesUpcomingGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/schedulesUpcomingGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class SchedulesService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getSchedules(observe?: 'body', reportProgress?: boolean): Observable<SchedulesGetRequest>;
        getSchedules(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SchedulesGetRequest>>;
        getSchedules(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SchedulesGetRequest>>;
        getSchedulesUpcoming(observe?: 'body', reportProgress?: boolean): Observable<SchedulesUpcomingGetRequest>;
        getSchedulesUpcoming(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SchedulesUpcomingGetRequest>>;
        getSchedulesUpcoming(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SchedulesUpcomingGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/counts" {
    export interface Counts {
        articles?: number;
        channels?: number;
        playlists?: number;
        podcasts?: number;
        suggestions?: number;
        tags?: number;
        videos?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/categoryElement" {
    export interface CategoryElement {
        description?: any;
        id?: number;
        slug?: string;
        title?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/purpleCategory" {
    export interface PurpleCategory {
        cumulative?: boolean;
        description?: any;
        episodesCount?: any;
        id?: number;
        remoteUrl?: any;
        slug?: PurpleCategory.SlugEnum;
        spotifyUrl?: any;
        title?: PurpleCategory.TitleEnum;
        urlSlug?: PurpleCategory.UrlSlugEnum;
    }
    export namespace PurpleCategory {
        type SlugEnum = 'peterheisstpodcast' | 'pietcast';
        const SlugEnum: {
            Peterheisstpodcast: SlugEnum;
            Pietcast: SlugEnum;
        };
        type TitleEnum = 'Peter heißt Podcast' | 'PietCast';
        const TitleEnum: {
            PeterHeitPodcast: TitleEnum;
            PietCast: TitleEnum;
        };
        type UrlSlugEnum = '36-peterheisstpodcast' | '31-pietcast';
        const UrlSlugEnum: {
            _36Peterheisstpodcast: UrlSlugEnum;
            _31Pietcast: UrlSlugEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum7" {
    import { Author } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/author";
    import { CategoryElement } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/categoryElement";
    import { Channel } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channel";
    import { DatumPreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datumPreferences";
    import { PurpleCategory } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/purpleCategory";
    import { Thumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/thumbnail";
    export interface Datum7 {
        author?: Author;
        categories?: Array<CategoryElement>;
        category?: PurpleCategory;
        channels?: Array<Channel>;
        commentsCount?: any;
        description?: any;
        duration?: number;
        durationPretty?: string;
        featured?: boolean;
        followingsCount?: number;
        id?: number;
        intro?: string;
        likesCount?: any;
        metaTags?: string;
        mime?: Datum7.MimeEnum;
        preferences?: DatumPreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: string;
        shortUrl?: string;
        size?: number;
        slug?: string;
        sourceUrl?: string;
        text?: any;
        thumbnail?: Thumbnail;
        title?: string;
        type?: number;
        url?: string;
        urlSlug?: string;
        videosCount?: number;
    }
    export namespace Datum7 {
        type MimeEnum = 'audio/mpeg';
        const MimeEnum: {
            Audiompeg: MimeEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/searchGetRequest" {
    import { Counts } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/counts";
    import { Datum7 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum7";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface SearchGetRequest {
        counts?: Counts;
        data?: Array<Datum7>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/search.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { SearchGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/searchGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class SearchService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getSearch(query?: string, part?: string, page?: string, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<SearchGetRequest>;
        getSearch(query?: string, part?: string, page?: string, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchGetRequest>>;
        getSearch(query?: string, part?: string, page?: string, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/subscriptionsDiscountsGetRequest" {
    export interface SubscriptionsDiscountsGetRequest {
        data?: Array<any>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/atedAt" {
    export interface AtedAt {
        date?: Date;
        timezone?: string;
        timezoneType?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/braintreePlan" {
    import { AtedAt } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/atedAt";
    export interface BraintreePlan {
        addOns?: Array<any>;
        billingDayOfMonth?: any;
        billingFrequency?: number;
        createdAt?: AtedAt;
        currencyIsoCode?: string;
        description?: any;
        discounts?: Array<any>;
        id?: string;
        merchantId?: string;
        name?: string;
        numberOfBillingCycles?: any;
        plans?: Array<any>;
        price?: string;
        trialDuration?: any;
        trialDurationUnit?: any;
        trialPeriod?: boolean;
        updatedAt?: AtedAt;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/detail" {
    export interface Detail {
        text?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/uRL" {
    export interface URL {
        href?: string;
        replace?: string;
        search?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/supportPerk" {
    import { URL } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/uRL";
    export interface SupportPerk {
        text?: string;
        urls?: Array<URL>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/details" {
    import { Detail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/detail";
    import { SupportPerk } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/supportPerk";
    export interface Details {
        color?: string;
        details?: Array<Detail>;
        perks?: Array<Detail>;
        subTitle?: string;
        supportPerks?: Array<SupportPerk>;
        title?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/options1" {
    export interface Options1 {
        max?: number;
        months?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum12" {
    import { BraintreePlan } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/braintreePlan";
    import { Details } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/details";
    import { Options1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/options1";
    export interface Datum12 {
        braintreeId?: string;
        braintreePlan?: BraintreePlan;
        details?: Details;
        enabled?: boolean;
        id?: string;
        options?: Options1;
        supportAddOn?: any;
        type?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/subscriptionsProductsGetRequest" {
    import { Datum12 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum12";
    export interface SubscriptionsProductsGetRequest {
        data?: Array<Datum12>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/subscriptions.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { SubscriptionsDiscountsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/subscriptionsDiscountsGetRequest";
    import { SubscriptionsProductsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/subscriptionsProductsGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class SubscriptionsService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getSubscriptionsDiscounts(observe?: 'body', reportProgress?: boolean): Observable<SubscriptionsDiscountsGetRequest>;
        getSubscriptionsDiscounts(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SubscriptionsDiscountsGetRequest>>;
        getSubscriptionsDiscounts(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SubscriptionsDiscountsGetRequest>>;
        getSubscriptionsProducts(observe?: 'body', reportProgress?: boolean): Observable<SubscriptionsProductsGetRequest>;
        getSubscriptionsProducts(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SubscriptionsProductsGetRequest>>;
        getSubscriptionsProducts(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SubscriptionsProductsGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum8" {
    import { User } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user";
    export interface Datum8 {
        createdAt?: Date;
        dislikesCount?: number;
        id?: number;
        likesCount?: number;
        slug?: string;
        taggableId?: number;
        taggableType?: Datum8.TaggableTypeEnum;
        title?: string;
        total?: number;
        updatedAt?: Date;
        user?: User;
    }
    export namespace Datum8 {
        type TaggableTypeEnum = 'video';
        const TaggableTypeEnum: {
            Video: TaggableTypeEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/tagsGetRequest" {
    import { Datum8 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum8";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface TagsGetRequest {
        data?: Array<Datum8>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/tags.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { TagsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/tagsGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class TagsService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getTags(id?: string, type?: string, observe?: 'body', reportProgress?: boolean): Observable<TagsGetRequest>;
        getTags(id?: string, type?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TagsGetRequest>>;
        getTags(id?: string, type?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TagsGetRequest>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum4" {
    export interface Datum4 {
        createdAt?: Date;
        extra?: Array<any>;
        icon?: string;
        id?: number;
        title?: string;
        type?: number;
        updatedAt?: Date;
        userId?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDAchievementsGetRequest" {
    import { Datum4 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum4";
    export interface UsersIDAchievementsGetRequest {
        data?: Array<Datum4>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum20" {
    export interface Datum20 {
        createdAt?: Date;
        id?: number;
        subjectId?: number;
        subjectType?: string;
        updatedAt?: Date;
        userId?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDDislikesGetRequest" {
    import { Datum20 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum20";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface UsersIDDislikesGetRequest {
        data?: Array<Datum20>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDDislikesPostRequest" {
    export interface UsersIDDislikesPostRequest {
        id?: number;
        type?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/dislike" {
    export interface Dislike {
        createdAt?: Date;
        id?: number;
        subjectId?: number;
        subjectType?: string;
        updatedAt?: Date;
        userId?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDDislikesPostRequest1" {
    import { Dislike } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/dislike";
    export interface UsersIDDislikesPostRequest1 {
        dislike?: Dislike;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDFollowingsGetRequest" {
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface UsersIDFollowingsGetRequest {
        data?: Array<any>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/variation" {
    export interface Variation {
        file?: string;
        height?: number;
        url?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/avatar1" {
    import { Variation } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/variation";
    export interface Avatar1 {
        collection?: string;
        id?: number;
        remoteUrl?: any;
        variations?: Array<Variation>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/serviceDefinition1" {
    export interface ServiceDefinition1 {
        color?: string;
        title?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/socialAccount" {
    import { ServiceDefinition1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/serviceDefinition1";
    export interface SocialAccount {
        createdAt?: Date;
        externalUrl?: string;
        id?: number;
        name?: string;
        service?: string;
        serviceDefinition?: ServiceDefinition1;
        socialId?: string;
        updatedAt?: Date;
        username?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/user3" {
    import { Avatar1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/avatar1";
    import { Preferences1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences1";
    import { SocialAccount } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/socialAccount";
    export interface User3 {
        avatar?: Avatar1;
        banner?: any;
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        email?: string;
        id?: number;
        name?: string;
        namePossessive?: string;
        notificationsCount?: number;
        preferences?: Preferences1;
        publicProfile?: boolean;
        publicSocialAccounts?: Array<any>;
        reacceptTerms?: boolean;
        readNotificationsCount?: number;
        reputation?: number;
        reputationPretty?: string;
        socialAccounts?: Array<SocialAccount>;
        taxPercentage?: number;
        team?: boolean;
        twoFactorEnabled?: boolean;
        unreadNotificationsCount?: number;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
        verified?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDGetRequest" {
    import { User3 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user3";
    export interface UsersIDGetRequest {
        success?: boolean;
        user?: User3;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum19" {
    export interface Datum19 {
        date?: Date;
        id?: string;
        pending?: boolean;
        status?: string;
        statusColor?: string;
        statusDescription?: string;
        total?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDInvoicesGetRequest" {
    import { Datum19 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum19";
    export interface UsersIDInvoicesGetRequest {
        data?: Array<Datum19>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum23" {
    export interface Datum23 {
        createdAt?: Date;
        id?: number;
        subjectId?: number;
        subjectType?: Datum23.SubjectTypeEnum;
        updatedAt?: Date;
        userId?: number;
    }
    export namespace Datum23 {
        type SubjectTypeEnum = 'comment' | 'video' | 'tag' | 'suggestion';
        const SubjectTypeEnum: {
            Comment: SubjectTypeEnum;
            Video: SubjectTypeEnum;
            Tag: SubjectTypeEnum;
            Suggestion: SubjectTypeEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDLikesGetRequest" {
    import { Datum23 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum23";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface UsersIDLikesGetRequest {
        data?: Array<Datum23>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDLikesPostRequest" {
    export interface UsersIDLikesPostRequest {
        id?: number;
        type?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/like" {
    export interface Like {
        createdAt?: Date;
        id?: number;
        subjectId?: number;
        subjectType?: string;
        updatedAt?: Date;
        userId?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDLikesPostRequest1" {
    import { Like } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/like";
    export interface UsersIDLikesPostRequest1 {
        like?: Like;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/action" {
    export interface Action {
        title?: string;
        url?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/data" {
    import { Action } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/action";
    export interface Data {
        notifications?: number;
        actions?: Array<Action>;
        icon?: string;
        text?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum11" {
    import { Data } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/data";
    export interface Datum11 {
        createdAt?: Date;
        data?: Data;
        id?: string;
        notifiableId?: number;
        notifiableType?: Datum11.NotifiableTypeEnum;
        read?: boolean;
        readAt?: Date;
        type?: Datum11.TypeEnum;
        updatedAt?: Date;
    }
    export namespace Datum11 {
        type NotifiableTypeEnum = 'user';
        const NotifiableTypeEnum: {
            User: NotifiableTypeEnum;
        };
        type TypeEnum = 'App\\Notifications\\UserTwoFactorDisabled' | 'App\\Notifications\\UserTwoFactorEnabled' | 'App\\Notifications\\UserPasswordChanged';
        const TypeEnum: {
            UserTwoFactorDisabled: TypeEnum;
            UserTwoFactorEnabled: TypeEnum;
            UserPasswordChanged: TypeEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDNotificationsGetRequest" {
    import { Datum11 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum11";
    export interface UsersIDNotificationsGetRequest {
        data?: Array<Datum11>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDNotificationsUUIDPatchRequest" {
    export interface UsersIDNotificationsUUIDPatchRequest {
        read?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/notifiable" {
    import { Preferences1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences1";
    export interface Notifiable {
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: Preferences1;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/notification" {
    import { Data } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/data";
    import { Notifiable } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/notifiable";
    export interface Notification {
        createdAt?: Date;
        data?: Data;
        id?: string;
        notifiable?: Notifiable;
        notifiableId?: number;
        notifiableType?: string;
        read?: boolean;
        readAt?: Date;
        type?: string;
        updatedAt?: Date;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDNotificationsUUIDPatchRequest1" {
    import { Notification } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/notification";
    export interface UsersIDNotificationsUUIDPatchRequest1 {
        notification?: Notification;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsAssetsPostRequest" {
    export interface UsersIDSettingsAssetsPostRequest {
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsDataRequestPostRequest" {
    export interface UsersIDSettingsDataRequestPostRequest {
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/channels" {
    export interface Channels {
        viaMail?: boolean;
        viaWebsite?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/type1" {
    import { Channels } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channels";
    export interface Type1 {
        channels?: Channels;
        description?: string;
        key?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsNotificationsGetRequest" {
    import { Type1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/type1";
    export interface UsersIDSettingsNotificationsGetRequest {
        success?: boolean;
        types?: Array<Type1>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsNotificationsPatchRequest" {
    import { Channels } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channels";
    export interface UsersIDSettingsNotificationsPatchRequest {
        channels?: Channels;
        key?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/type" {
    import { Channels } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channels";
    export interface Type {
        channels?: Channels;
        description?: Type.DescriptionEnum;
        key?: Type.KeyEnum;
    }
    export namespace Type {
        type DescriptionEnum = 'Tägliche Videozusammenfassung' | 'Wöchentliche Videozusammenfassung' | 'Antwort auf Kommentar' | 'Kommentar ist beliebt' | 'Erwähnung in einem Kommentar' | 'Neue Artikel';
        const DescriptionEnum: {
            TglicheVideozusammenfassung: DescriptionEnum;
            WchentlicheVideozusammenfassung: DescriptionEnum;
            AntwortAufKommentar: DescriptionEnum;
            KommentarIstBeliebt: DescriptionEnum;
            ErwhnungInEinemKommentar: DescriptionEnum;
            NeueArtikel: DescriptionEnum;
        };
        type KeyEnum = 'VIDEO_SUMMARY_DAILY' | 'VIDEO_SUMMARY_WEEKLY' | 'COMMENT_REPLIED' | 'COMMENT_IS_POPULAR' | 'COMMENT_MENTIONED' | 'NEW_NEWS_ARTICLES';
        const KeyEnum: {
            VIDEOSUMMARYDAILY: KeyEnum;
            VIDEOSUMMARYWEEKLY: KeyEnum;
            COMMENTREPLIED: KeyEnum;
            COMMENTISPOPULAR: KeyEnum;
            COMMENTMENTIONED: KeyEnum;
            NEWNEWSARTICLES: KeyEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsNotificationsPatchRequest1" {
    import { Type } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/type";
    export interface UsersIDSettingsNotificationsPatchRequest1 {
        success?: boolean;
        types?: Array<Type>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPasswordPatchRequest" {
    export interface UsersIDSettingsPasswordPatchRequest {
        currentPassword?: string;
        password?: string;
        passwordConfirmation?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPasswordPatchRequest1" {
    export interface UsersIDSettingsPasswordPatchRequest1 {
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/errors" {
    export interface Errors {
        currentPassword?: Array<string>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPasswordPatchRequest2" {
    import { Errors } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/errors";
    export interface UsersIDSettingsPasswordPatchRequest2 {
        errors?: Errors;
        message?: string;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPreferencesPatchRequest" {
    export interface UsersIDSettingsPreferencesPatchRequest {
        commentsOrderOwnFirst?: boolean;
        commentsOrderPopular?: boolean;
        country?: string;
        enableDarkmode?: boolean;
        enableSpoilers?: boolean;
        publicProfile?: boolean;
        scrollTopRouteChange?: boolean;
        showInPresence?: boolean;
        subscribeNewsletter?: boolean;
        videosAutocontinue?: boolean;
        videosAutoplay?: boolean;
        videosPlayerFloating?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPreferencesPatchRequest1" {
    import { Preferences1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences1";
    export interface UsersIDSettingsPreferencesPatchRequest1 {
        preferences?: Preferences1;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsProfilePatchRequest" {
    export interface UsersIDSettingsProfilePatchRequest {
        email?: string;
        name?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsProfilePatchRequest1" {
    import { Preferences1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences1";
    export interface UsersIDSettingsProfilePatchRequest1 {
        preferences?: Preferences1;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorResetPostRequest" {
    export interface UsersIDSettingsTwofactorResetPostRequest {
        otp?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorResetPostRequest1" {
    export interface UsersIDSettingsTwofactorResetPostRequest1 {
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/data3" {
    export interface Data3 {
        qr?: string;
        secret?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorSetupGetRequest" {
    import { Data3 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/data3";
    export interface UsersIDSettingsTwofactorSetupGetRequest {
        data?: Data3;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorSetupPostRequest" {
    export interface UsersIDSettingsTwofactorSetupPostRequest {
        otp?: string;
        secret?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorSetupPostRequest1" {
    export interface UsersIDSettingsTwofactorSetupPostRequest1 {
        recoveryCodes?: Array<string>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/discount" {
    export interface Discount {
        amount?: string;
        currentBillingCycle?: number;
        id?: string;
        name?: string;
        neverExpires?: boolean;
        numberOfBillingCycles?: any;
        quantity?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/braintree" {
    import { Discount } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/discount";
    export interface Braintree {
        addOns?: Array<any>;
        billingDayOfMonth?: number;
        billingPeriodEndDate?: Date;
        billingPeriodStartDate?: Date;
        currentBillingCycle?: number;
        daysPastDue?: any;
        discounts?: Array<Discount>;
        failureCount?: number;
        firstBillingDate?: Date;
        neverExpires?: boolean;
        nextBillAmount?: string;
        nextBillingDate?: Date;
        nextBillingPeriodAmount?: string;
        numberOfBillingCycles?: any;
        price?: string;
        status?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/options" {
    export interface Options {
        months?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/supportAddOn" {
    export interface SupportAddOn {
        id?: string;
        max?: number;
        min?: number;
        title?: string;
        titleLong?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/product" {
    import { Details } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/details";
    import { Options } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/options";
    import { SupportAddOn } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/supportAddOn";
    export interface Product {
        braintreeId?: string;
        braintreePlan?: any;
        details?: Details;
        enabled?: boolean;
        id?: string;
        options?: Options;
        supportAddOn?: SupportAddOn;
        type?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum6" {
    import { Braintree } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/braintree";
    import { Product } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/product";
    export interface Datum6 {
        active?: boolean;
        braintree?: Braintree;
        cancelled?: boolean;
        createdAt?: Date;
        endsAt?: Date;
        gifted?: boolean;
        id?: number;
        name?: any;
        onGracePeriod?: boolean;
        onTrial?: boolean;
        product?: Product;
        sponsored?: boolean;
        trialEndsAt?: any;
        updatedAt?: Date;
        valid?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSubscriptionsGetRequest" {
    import { Datum6 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum6";
    export interface UsersIDSubscriptionsGetRequest {
        data?: Array<Datum6>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum" {
    export interface Datum {
        clientId?: number;
        createdAt?: Date;
        expiresAt?: Date;
        id?: string;
        ip?: any;
        lastSeen?: any;
        name?: any;
        revoked?: boolean;
        scopes?: Array<any>;
        tfaVerifiedAt?: any;
        ua?: any;
        uaBrowser?: any;
        uaDevice?: any;
        uaOs?: any;
        updatedAt?: Date;
        userId?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDTokensGetRequest" {
    import { Datum } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum";
    export interface UsersIDTokensGetRequest {
        data?: Array<Datum>;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/token" {
    import { User } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user";
    export interface Token {
        clientId?: number;
        createdAt?: Date;
        expiresAt?: Date;
        id?: string;
        ip?: any;
        lastSeen?: any;
        name?: any;
        revoked?: boolean;
        scopes?: Array<any>;
        tfaVerifiedAt?: any;
        ua?: any;
        uaBrowser?: any;
        uaDevice?: any;
        uaOs?: any;
        updatedAt?: Date;
        user?: User;
        userId?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDTokensTokenDeleteRequest" {
    import { Token } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/token";
    export interface UsersIDTokensTokenDeleteRequest {
        success?: boolean;
        token?: Token;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum17" {
    export interface Datum17 {
        createdAt?: Date;
        id?: number;
        objectId?: number;
        objectType?: Datum17.ObjectTypeEnum;
        timestamp?: number;
        timestampPretty?: string;
        updatedAt?: Date;
        userId?: number;
    }
    export namespace Datum17 {
        type ObjectTypeEnum = 'video' | 'podcastEpisode';
        const ObjectTypeEnum: {
            Video: ObjectTypeEnum;
            PodcastEpisode: ObjectTypeEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDViewsGetRequest" {
    import { Datum17 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum17";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface UsersIDViewsGetRequest {
        data?: Array<Datum17>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/serviceDefinition" {
    export interface ServiceDefinition {
        color?: ServiceDefinition.ColorEnum;
        title?: ServiceDefinition.TitleEnum;
    }
    export namespace ServiceDefinition {
        type ColorEnum = 'blue' | 'purple' | 'orange' | 'pink' | 'red';
        const ColorEnum: {
            Blue: ColorEnum;
            Purple: ColorEnum;
            Orange: ColorEnum;
            Pink: ColorEnum;
            Red: ColorEnum;
        };
        type TitleEnum = 'Twitter' | 'Twitch' | 'Instagram' | 'TikTok' | 'YouTube';
        const TitleEnum: {
            Twitter: TitleEnum;
            Twitch: TitleEnum;
            Instagram: TitleEnum;
            TikTok: TitleEnum;
            YouTube: TitleEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/socialAccount1" {
    import { ServiceDefinition } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/serviceDefinition";
    export interface SocialAccount1 {
        createdAt?: Date;
        externalUrl?: string;
        id?: number;
        name?: SocialAccount1.NameEnum;
        service?: SocialAccount1.ServiceEnum;
        serviceDefinition?: ServiceDefinition;
        socialId?: string;
        updatedAt?: Date;
        username?: SocialAccount1.UsernameEnum;
    }
    export namespace SocialAccount1 {
        type NameEnum = 'blu' | 'userNameLP' | 'userName_';
        const NameEnum: {
            Blu: NameEnum;
            UserNameLP: NameEnum;
            UserName: NameEnum;
        };
        type ServiceEnum = 'discord' | 'twitch';
        const ServiceEnum: {
            Discord: ServiceEnum;
            Twitch: ServiceEnum;
        };
        type UsernameEnum = 'blu#4340' | 'userNameLP' | 'userName_#0';
        const UsernameEnum: {
            Blu4340: UsernameEnum;
            UserNameLP: UsernameEnum;
            UserName0: UsernameEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/user5" {
    import { Preferences1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences1";
    import { SocialAccount1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/socialAccount1";
    export interface User5 {
        avatar?: any;
        banner?: any;
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        email?: User5.EmailEnum;
        id?: number;
        name?: User5.NameEnum;
        namePossessive?: User5.NamePossessiveEnum;
        notificationsCount?: number;
        preferences?: Preferences1;
        publicProfile?: boolean;
        publicSocialAccounts?: Array<any>;
        reacceptTerms?: boolean;
        readNotificationsCount?: number;
        recoveryCodes?: number;
        recoveryCodesUsed?: number;
        reputation?: number;
        reputationPretty?: string;
        socialAccounts?: Array<SocialAccount1>;
        taxPercentage?: number;
        team?: boolean;
        twoFactorEnabled?: boolean;
        unreadNotificationsCount?: number;
        updatedAt?: Date;
        urlSlug?: User5.UrlSlugEnum;
        username?: User5.UsernameEnum;
        verified?: boolean;
    }
    export namespace User5 {
        type EmailEnum = 'email@example.com';
        const EmailEnum: {
            EmailexampleCom: EmailEnum;
        };
        type NameEnum = 'userName' | 'DisplayName';
        const NameEnum: {
            UserName: NameEnum;
            DisplayName: NameEnum;
        };
        type NamePossessiveEnum = 'userNames' | 'DisplayNames';
        const NamePossessiveEnum: {
            UserNames: NamePossessiveEnum;
            DisplayNames: NamePossessiveEnum;
        };
        type UrlSlugEnum = '<userId>-<userName>';
        const UrlSlugEnum: {
            UserIdUserName: UrlSlugEnum;
        };
        type UsernameEnum = 'userName';
        const UsernameEnum: {
            UserName: UsernameEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersMeGetRequest" {
    import { User5 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user5";
    export interface UsersMeGetRequest {
        success?: boolean;
        user?: User5;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersObject20ObjectTokensDeleteRequest" {
    export interface UsersObject20ObjectTokensDeleteRequest {
        message?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/users.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { UsersIDAchievementsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDAchievementsGetRequest";
    import { UsersIDDislikesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDDislikesGetRequest";
    import { UsersIDDislikesPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDDislikesPostRequest";
    import { UsersIDDislikesPostRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDDislikesPostRequest1";
    import { UsersIDFollowingsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDFollowingsGetRequest";
    import { UsersIDGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDGetRequest";
    import { UsersIDInvoicesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDInvoicesGetRequest";
    import { UsersIDLikesGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDLikesGetRequest";
    import { UsersIDLikesPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDLikesPostRequest";
    import { UsersIDLikesPostRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDLikesPostRequest1";
    import { UsersIDNotificationsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDNotificationsGetRequest";
    import { UsersIDNotificationsUUIDPatchRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDNotificationsUUIDPatchRequest";
    import { UsersIDNotificationsUUIDPatchRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDNotificationsUUIDPatchRequest1";
    import { UsersIDSettingsAssetsPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsAssetsPostRequest";
    import { UsersIDSettingsDataRequestPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsDataRequestPostRequest";
    import { UsersIDSettingsNotificationsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsNotificationsGetRequest";
    import { UsersIDSettingsNotificationsPatchRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsNotificationsPatchRequest";
    import { UsersIDSettingsNotificationsPatchRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsNotificationsPatchRequest1";
    import { UsersIDSettingsPasswordPatchRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPasswordPatchRequest";
    import { UsersIDSettingsPasswordPatchRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPasswordPatchRequest1";
    import { UsersIDSettingsPreferencesPatchRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPreferencesPatchRequest";
    import { UsersIDSettingsPreferencesPatchRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPreferencesPatchRequest1";
    import { UsersIDSettingsProfilePatchRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsProfilePatchRequest";
    import { UsersIDSettingsProfilePatchRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsProfilePatchRequest1";
    import { UsersIDSettingsTwofactorResetPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorResetPostRequest";
    import { UsersIDSettingsTwofactorResetPostRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorResetPostRequest1";
    import { UsersIDSettingsTwofactorSetupGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorSetupGetRequest";
    import { UsersIDSettingsTwofactorSetupPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorSetupPostRequest";
    import { UsersIDSettingsTwofactorSetupPostRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorSetupPostRequest1";
    import { UsersIDSubscriptionsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSubscriptionsGetRequest";
    import { UsersIDTokensGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDTokensGetRequest";
    import { UsersIDTokensTokenDeleteRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDTokensTokenDeleteRequest";
    import { UsersIDViewsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDViewsGetRequest";
    import { UsersMeGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersMeGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class UsersService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        deleteUsersByIdTokensId(id: string, token: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDTokensTokenDeleteRequest>;
        deleteUsersByIdTokensId(id: string, token: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDTokensTokenDeleteRequest>>;
        deleteUsersByIdTokensId(id: string, token: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDTokensTokenDeleteRequest>>;
        deleteUsersObject20ObjectTokens(id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
        deleteUsersObject20ObjectTokens(id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
        deleteUsersObject20ObjectTokens(id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
        getUsersById(id: number, observe?: 'body', reportProgress?: boolean): Observable<UsersIDGetRequest>;
        getUsersById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDGetRequest>>;
        getUsersById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDGetRequest>>;
        getUsersByIdAchievements(id: number, observe?: 'body', reportProgress?: boolean): Observable<UsersIDAchievementsGetRequest>;
        getUsersByIdAchievements(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDAchievementsGetRequest>>;
        getUsersByIdAchievements(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDAchievementsGetRequest>>;
        getUsersByIdDislikes(id: number, observe?: 'body', reportProgress?: boolean): Observable<UsersIDDislikesGetRequest>;
        getUsersByIdDislikes(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDDislikesGetRequest>>;
        getUsersByIdDislikes(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDDislikesGetRequest>>;
        getUsersByIdFollowings(id: number, observe?: 'body', reportProgress?: boolean): Observable<UsersIDFollowingsGetRequest>;
        getUsersByIdFollowings(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDFollowingsGetRequest>>;
        getUsersByIdFollowings(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDFollowingsGetRequest>>;
        getUsersByIdInvoices(id: number, observe?: 'body', reportProgress?: boolean): Observable<UsersIDInvoicesGetRequest>;
        getUsersByIdInvoices(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDInvoicesGetRequest>>;
        getUsersByIdInvoices(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDInvoicesGetRequest>>;
        getUsersByIdLikes(id: number, observe?: 'body', reportProgress?: boolean): Observable<UsersIDLikesGetRequest>;
        getUsersByIdLikes(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDLikesGetRequest>>;
        getUsersByIdLikes(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDLikesGetRequest>>;
        getUsersByIdNotifications(id: number, observe?: 'body', reportProgress?: boolean): Observable<UsersIDNotificationsGetRequest>;
        getUsersByIdNotifications(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDNotificationsGetRequest>>;
        getUsersByIdNotifications(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDNotificationsGetRequest>>;
        getUsersByIdSettingsNotifications(id: number, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSettingsNotificationsGetRequest>;
        getUsersByIdSettingsNotifications(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSettingsNotificationsGetRequest>>;
        getUsersByIdSettingsNotifications(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSettingsNotificationsGetRequest>>;
        getUsersByIdSettingsTwofactorSetup(id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSettingsTwofactorSetupGetRequest>;
        getUsersByIdSettingsTwofactorSetup(id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSettingsTwofactorSetupGetRequest>>;
        getUsersByIdSettingsTwofactorSetup(id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSettingsTwofactorSetupGetRequest>>;
        getUsersByIdSubscriptions(id: number, include?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSubscriptionsGetRequest>;
        getUsersByIdSubscriptions(id: number, include?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSubscriptionsGetRequest>>;
        getUsersByIdSubscriptions(id: number, include?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSubscriptionsGetRequest>>;
        getUsersByIdTokens(id: number, observe?: 'body', reportProgress?: boolean): Observable<UsersIDTokensGetRequest>;
        getUsersByIdTokens(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDTokensGetRequest>>;
        getUsersByIdTokens(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDTokensGetRequest>>;
        getUsersByIdViews(id: number, observe?: 'body', reportProgress?: boolean): Observable<UsersIDViewsGetRequest>;
        getUsersByIdViews(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDViewsGetRequest>>;
        getUsersByIdViews(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDViewsGetRequest>>;
        getUsersMe(observe?: 'body', reportProgress?: boolean): Observable<UsersMeGetRequest>;
        getUsersMe(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersMeGetRequest>>;
        getUsersMe(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersMeGetRequest>>;
        patchUsersByIdNotificationsByUuid(body: UsersIDNotificationsUUIDPatchRequest, id: number, uuid: string, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDNotificationsUUIDPatchRequest1>;
        patchUsersByIdNotificationsByUuid(body: UsersIDNotificationsUUIDPatchRequest, id: number, uuid: string, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDNotificationsUUIDPatchRequest1>>;
        patchUsersByIdNotificationsByUuid(body: UsersIDNotificationsUUIDPatchRequest, id: number, uuid: string, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDNotificationsUUIDPatchRequest1>>;
        patchUsersByIdSettingsNotifications(body: UsersIDSettingsNotificationsPatchRequest, id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSettingsNotificationsPatchRequest1>;
        patchUsersByIdSettingsNotifications(body: UsersIDSettingsNotificationsPatchRequest, id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSettingsNotificationsPatchRequest1>>;
        patchUsersByIdSettingsNotifications(body: UsersIDSettingsNotificationsPatchRequest, id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSettingsNotificationsPatchRequest1>>;
        patchUsersByIdSettingsPassword(body: UsersIDSettingsPasswordPatchRequest, id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSettingsPasswordPatchRequest1>;
        patchUsersByIdSettingsPassword(body: UsersIDSettingsPasswordPatchRequest, id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSettingsPasswordPatchRequest1>>;
        patchUsersByIdSettingsPassword(body: UsersIDSettingsPasswordPatchRequest, id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSettingsPasswordPatchRequest1>>;
        patchUsersByIdSettingsPreferences(body: UsersIDSettingsPreferencesPatchRequest, id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSettingsPreferencesPatchRequest1>;
        patchUsersByIdSettingsPreferences(body: UsersIDSettingsPreferencesPatchRequest, id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSettingsPreferencesPatchRequest1>>;
        patchUsersByIdSettingsPreferences(body: UsersIDSettingsPreferencesPatchRequest, id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSettingsPreferencesPatchRequest1>>;
        patchUsersByIdSettingsProfile(body: UsersIDSettingsProfilePatchRequest, id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSettingsProfilePatchRequest1>;
        patchUsersByIdSettingsProfile(body: UsersIDSettingsProfilePatchRequest, id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSettingsProfilePatchRequest1>>;
        patchUsersByIdSettingsProfile(body: UsersIDSettingsProfilePatchRequest, id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSettingsProfilePatchRequest1>>;
        postUsersByIdDislikes(body: UsersIDDislikesPostRequest, id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDDislikesPostRequest1>;
        postUsersByIdDislikes(body: UsersIDDislikesPostRequest, id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDDislikesPostRequest1>>;
        postUsersByIdDislikes(body: UsersIDDislikesPostRequest, id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDDislikesPostRequest1>>;
        postUsersByIdLikes(body: UsersIDLikesPostRequest, id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDLikesPostRequest1>;
        postUsersByIdLikes(body: UsersIDLikesPostRequest, id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDLikesPostRequest1>>;
        postUsersByIdLikes(body: UsersIDLikesPostRequest, id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDLikesPostRequest1>>;
        postUsersByIdSettingsAssets(id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSettingsAssetsPostRequest>;
        postUsersByIdSettingsAssets(id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSettingsAssetsPostRequest>>;
        postUsersByIdSettingsAssets(id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSettingsAssetsPostRequest>>;
        postUsersByIdSettingsDataRequest(id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSettingsDataRequestPostRequest>;
        postUsersByIdSettingsDataRequest(id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSettingsDataRequestPostRequest>>;
        postUsersByIdSettingsDataRequest(id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSettingsDataRequestPostRequest>>;
        postUsersByIdSettingsTwofactorReset(body: UsersIDSettingsTwofactorResetPostRequest, id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSettingsTwofactorResetPostRequest1>;
        postUsersByIdSettingsTwofactorReset(body: UsersIDSettingsTwofactorResetPostRequest, id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSettingsTwofactorResetPostRequest1>>;
        postUsersByIdSettingsTwofactorReset(body: UsersIDSettingsTwofactorResetPostRequest, id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSettingsTwofactorResetPostRequest1>>;
        postUsersByIdSettingsTwofactorSetup(body: UsersIDSettingsTwofactorSetupPostRequest, id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UsersIDSettingsTwofactorSetupPostRequest1>;
        postUsersByIdSettingsTwofactorSetup(body: UsersIDSettingsTwofactorSetupPostRequest, id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersIDSettingsTwofactorSetupPostRequest1>>;
        postUsersByIdSettingsTwofactorSetup(body: UsersIDSettingsTwofactorSetupPostRequest, id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersIDSettingsTwofactorSetupPostRequest1>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/from" {
    export interface From {
        name?: string;
        path?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/to" {
    export interface To {
        name?: string;
        path?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/properties" {
    import { From } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/from";
    import { To } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/to";
    export interface Properties {
        from?: From;
        id?: number;
        timestamp?: number;
        to?: To;
        type?: Properties.TypeEnum;
        video?: number;
    }
    export namespace Properties {
        type TypeEnum = 'video' | 'podcastEpisode' | 'newsArticle' | 'videoPlaylist';
        const TypeEnum: {
            Video: TypeEnum;
            PodcastEpisode: TypeEnum;
            NewsArticle: TypeEnum;
            VideoPlaylist: TypeEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/event" {
    import { Properties } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/properties";
    export interface Event {
        createdAt?: number;
        properties?: Properties;
        type?: Event.TypeEnum;
    }
    export namespace Event {
        type TypeEnum = 'navigation' | 'view' | 'player_play' | 'player_first_play' | 'player_pause' | 'user_view';
        const TypeEnum: {
            Navigation: TypeEnum;
            View: TypeEnum;
            PlayerPlay: TypeEnum;
            PlayerFirstPlay: TypeEnum;
            PlayerPause: TypeEnum;
            UserView: TypeEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/traits" {
    export interface Traits {
        c?: number;
        h?: number;
        v?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityAutobahnPostRequest" {
    import { Event } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/event";
    import { Traits } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/traits";
    export interface UtilityAutobahnPostRequest {
        events?: Array<Event>;
        traits?: Traits;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityAutobahnPostRequest1" {
    export interface UtilityAutobahnPostRequest1 {
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/user4" {
    import { Preferences1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences1";
    export interface User4 {
        avatar?: any;
        banner?: any;
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        giftedSubscriptionsCount?: number;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: Preferences1;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        subscribed?: boolean;
        subscriptionStreak?: number;
        subscriptionSupporter?: boolean;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum16" {
    import { User4 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user4";
    export interface Datum16 {
        approved?: boolean;
        countReplies?: number;
        createdAt?: Date;
        dislikesCount?: number;
        id?: number;
        isReply?: boolean;
        likesCount?: number;
        pinned?: boolean;
        reply?: number;
        text?: string;
        timestamp?: number;
        user?: User4;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsGetRequest" {
    import { Datum16 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum16";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface UtilityCommentsGetRequest {
        data?: Array<Datum16>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsIDReportsPostRequest" {
    export interface UtilityCommentsIDReportsPostRequest {
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsPostRequest" {
    export interface UtilityCommentsPostRequest {
        id?: number;
        reply?: number;
        text?: string;
        timestamp?: number;
        type?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/subjectPreferences" {
    export interface SubjectPreferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/subject1" {
    import { SubjectPreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/subjectPreferences";
    export interface Subject1 {
        commentsCount?: any;
        description?: any;
        featured?: boolean;
        id?: number;
        likesCount?: any;
        preferences?: SubjectPreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: string;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/userPreferences" {
    export interface UserPreferences {
        publicProfile?: boolean;
        subscriptionEnableIdentification?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/user2" {
    import { Avatar1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/avatar1";
    import { UserPreferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/userPreferences";
    export interface User2 {
        avatar?: Avatar1;
        banner?: any;
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: UserPreferences;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/comment" {
    import { Subject1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/subject1";
    import { User2 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user2";
    export interface Comment {
        approved?: boolean;
        countReplies?: number;
        createdAt?: Date;
        dislikesCount?: number;
        id?: number;
        isReply?: boolean;
        likesCount?: number;
        pinned?: any;
        reply?: number;
        subject?: Subject1;
        text?: string;
        timestamp?: number;
        user?: User2;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsPostRequest1" {
    import { Comment } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/comment";
    export interface UtilityCommentsPostRequest1 {
        comment?: Comment;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsDeleteRequest" {
    export interface UtilityFollowsDeleteRequest {
        follow?: any;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsGetRequest" {
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface UtilityFollowsGetRequest {
        data?: Array<any>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsPostRequest" {
    export interface UtilityFollowsPostRequest {
        id?: number;
        type?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/subject" {
    export interface Subject {
        description?: any;
        followingsCount?: any;
        id?: number;
        slug?: string;
        title?: string;
        urlSlug?: string;
        videosCount?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/follow" {
    import { Subject } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/subject";
    export interface Follow {
        id?: number;
        subject?: Subject;
        subjectType?: string;
        userId?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsPostRequest1" {
    import { Follow } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/follow";
    export interface UtilityFollowsPostRequest1 {
        follow?: Follow;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityHighlightsPostRequest" {
    export interface UtilityHighlightsPostRequest {
        position?: number;
        video?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityHighlightsPostRequest1" {
    export interface UtilityHighlightsPostRequest1 {
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/advertising" {
    export interface Advertising {
        nugg?: boolean;
        played?: boolean;
        tag?: string;
        time?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/analytics" {
    export interface Analytics {
        google?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/chromecast" {
    export interface Chromecast {
        enabled?: boolean;
        receiverApplicationId?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/generic" {
    import { Analytics } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/analytics";
    import { Chromecast } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/chromecast";
    export interface Generic {
        analytics?: Analytics;
        autoplay?: boolean;
        chromecast?: Chromecast;
        controls?: boolean;
        loop?: boolean;
        muted?: boolean;
        playbackRates?: Array<number>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/quality" {
    export interface Quality {
        bitrate?: number;
        framerate?: number;
        label?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/dash" {
    export interface Dash {
        labels?: Array<string>;
        labelsBitrate?: {
            [key: string]: string;
        };
        src?: string;
        type?: Dash.TypeEnum;
    }
    export namespace Dash {
        type TypeEnum = 'application/dash+xml';
        const TypeEnum: {
            Applicationdashxml: TypeEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/hLS" {
    export interface HLS {
        labels?: Array<string>;
        labelsBitrate?: {
            [key: string]: string;
        };
        src?: string;
        type?: HLS.TypeEnum;
    }
    export namespace HLS {
        type TypeEnum = 'application/x-mpegurl';
        const TypeEnum: {
            ApplicationxMpegurl: TypeEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/sources" {
    import { Dash } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/dash";
    import { HLS } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/hLS";
    export interface Sources {
        dash?: Dash;
        hls?: HLS;
        mp4?: any;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/track" {
    import { Quality } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/quality";
    import { Sources } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/sources";
    export interface Track {
        fullTitle?: string;
        id?: number;
        main?: boolean;
        pluralizedTitle?: string;
        qualities?: Array<Quality>;
        sources?: Sources;
        title?: any;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/brand" {
    export interface Brand {
        color?: Brand.ColorEnum;
        link?: string;
        logo?: string;
    }
    export namespace Brand {
        type ColorEnum = '039a45';
        const ColorEnum: {
            _039a45: ColorEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/visual" {
    import { Brand } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/brand";
    export interface Visual {
        aspectRatio?: string;
        brand?: Brand;
        fluid?: boolean;
        responsive?: boolean;
        thumbnail?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/options2" {
    import { Generic } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/generic";
    import { Track } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/track";
    import { Visual } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/visual";
    export interface Options2 {
        generic?: Generic;
        tracks?: Array<Track>;
        visual?: Visual;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityPlayerGetRequest" {
    import { Advertising } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/advertising";
    import { Options2 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/options2";
    export interface UtilityPlayerGetRequest {
        advertising?: Array<Advertising>;
        options?: Options2;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/utility.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { UtilityAutobahnPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityAutobahnPostRequest";
    import { UtilityAutobahnPostRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityAutobahnPostRequest1";
    import { UtilityCommentsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsGetRequest";
    import { UtilityCommentsIDReportsPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsIDReportsPostRequest";
    import { UtilityCommentsPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsPostRequest";
    import { UtilityCommentsPostRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsPostRequest1";
    import { UtilityFollowsDeleteRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsDeleteRequest";
    import { UtilityFollowsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsGetRequest";
    import { UtilityFollowsPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsPostRequest";
    import { UtilityFollowsPostRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsPostRequest1";
    import { UtilityHighlightsPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityHighlightsPostRequest";
    import { UtilityHighlightsPostRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityHighlightsPostRequest1";
    import { UtilityPlayerGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityPlayerGetRequest";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class UtilityService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        deleteUtilityFollows(type?: string, id?: string, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UtilityFollowsDeleteRequest>;
        deleteUtilityFollows(type?: string, id?: string, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UtilityFollowsDeleteRequest>>;
        deleteUtilityFollows(type?: string, id?: string, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UtilityFollowsDeleteRequest>>;
        getUtilityComments(order?: string, id?: string, type?: string, page?: string, limit?: string, include?: string, orderOwn?: string, u?: string, byUser?: string, observe?: 'body', reportProgress?: boolean): Observable<UtilityCommentsGetRequest>;
        getUtilityComments(order?: string, id?: string, type?: string, page?: string, limit?: string, include?: string, orderOwn?: string, u?: string, byUser?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UtilityCommentsGetRequest>>;
        getUtilityComments(order?: string, id?: string, type?: string, page?: string, limit?: string, include?: string, orderOwn?: string, u?: string, byUser?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UtilityCommentsGetRequest>>;
        getUtilityFollows(type?: string, id?: string, observe?: 'body', reportProgress?: boolean): Observable<UtilityFollowsGetRequest>;
        getUtilityFollows(type?: string, id?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UtilityFollowsGetRequest>>;
        getUtilityFollows(type?: string, id?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UtilityFollowsGetRequest>>;
        getUtilityPlayer(video?: string, preset?: string, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UtilityPlayerGetRequest>;
        getUtilityPlayer(video?: string, preset?: string, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UtilityPlayerGetRequest>>;
        getUtilityPlayer(video?: string, preset?: string, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UtilityPlayerGetRequest>>;
        postUtilityAutobahn(body: UtilityAutobahnPostRequest, observe?: 'body', reportProgress?: boolean): Observable<UtilityAutobahnPostRequest1>;
        postUtilityAutobahn(body: UtilityAutobahnPostRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UtilityAutobahnPostRequest1>>;
        postUtilityAutobahn(body: UtilityAutobahnPostRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UtilityAutobahnPostRequest1>>;
        postUtilityComments(body: UtilityCommentsPostRequest, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UtilityCommentsPostRequest1>;
        postUtilityComments(body: UtilityCommentsPostRequest, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UtilityCommentsPostRequest1>>;
        postUtilityComments(body: UtilityCommentsPostRequest, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UtilityCommentsPostRequest1>>;
        postUtilityCommentsByIdReports(id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UtilityCommentsIDReportsPostRequest>;
        postUtilityCommentsByIdReports(id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UtilityCommentsIDReportsPostRequest>>;
        postUtilityCommentsByIdReports(id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UtilityCommentsIDReportsPostRequest>>;
        postUtilityFollows(body: UtilityFollowsPostRequest, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UtilityFollowsPostRequest1>;
        postUtilityFollows(body: UtilityFollowsPostRequest, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UtilityFollowsPostRequest1>>;
        postUtilityFollows(body: UtilityFollowsPostRequest, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UtilityFollowsPostRequest1>>;
        postUtilityHighlights(body: UtilityHighlightsPostRequest, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<UtilityHighlightsPostRequest1>;
        postUtilityHighlights(body: UtilityHighlightsPostRequest, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UtilityHighlightsPostRequest1>>;
        postUtilityHighlights(body: UtilityHighlightsPostRequest, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UtilityHighlightsPostRequest1>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/channelVideoCountGetRequest" {
    import { Channel } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channel";
    export interface ChannelVideoCountGetRequest {
        channel?: Channel;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/publicSocialAccount" {
    import { ServiceDefinition } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/serviceDefinition";
    export interface PublicSocialAccount {
        createdAt?: Date;
        externalUrl?: string;
        id?: number;
        name?: string;
        service?: PublicSocialAccount.ServiceEnum;
        serviceDefinition?: ServiceDefinition;
        socialId?: any;
        updatedAt?: Date;
        username?: string;
    }
    export namespace PublicSocialAccount {
        type ServiceEnum = 'twitter' | 'twitch' | 'instagram' | 'tiktok' | 'youtube';
        const ServiceEnum: {
            Twitter: ServiceEnum;
            Twitch: ServiceEnum;
            Instagram: ServiceEnum;
            Tiktok: ServiceEnum;
            Youtube: ServiceEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum9" {
    import { PublicSocialAccount } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/publicSocialAccount";
    export interface Datum9 {
        avatar?: any;
        banner?: any;
        description?: string;
        followingsCount?: any;
        id?: number;
        name?: string;
        publicSocialAccounts?: Array<PublicSocialAccount>;
        team?: boolean;
        urlSlug?: string;
        username?: string;
        videosCount?: any;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosAuthorsGetRequest" {
    import { Datum9 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum9";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface VideosAuthorsGetRequest {
        data?: Array<Datum9>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum2" {
    import { FirstVideo } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/firstVideo";
    export interface Datum2 {
        description?: any;
        firstVideo?: FirstVideo;
        followingsCount?: number;
        id?: number;
        slug?: string;
        thumbnail?: any;
        title?: string;
        urlSlug?: string;
        videosCount?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosChannelsGetRequest" {
    import { Datum2 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum2";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface VideosChannelsGetRequest {
        data?: Array<Datum2>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datumThumbnail" {
    import { Variation } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/variation";
    export interface DatumThumbnail {
        collection?: DatumThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<Variation>;
    }
    export namespace DatumThumbnail {
        type CollectionEnum = 'thumbnail';
        const CollectionEnum: {
            Thumbnail: CollectionEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum22" {
    import { DatumThumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datumThumbnail";
    import { User } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user";
    import { Video } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/video";
    export interface Datum22 {
        createdAt?: Date;
        duration?: number;
        durationPretty?: string;
        finished?: boolean;
        id?: number;
        slug?: string;
        thumbnail?: DatumThumbnail;
        timeEnd?: number;
        timeStart?: number;
        title?: string;
        updatedAt?: Date;
        user?: User;
        video?: Video;
        viewsCount?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosClipsGetRequest" {
    import { Datum22 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum22";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface VideosClipsGetRequest {
        data?: Array<Datum22>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosClipsPostRequest" {
    export interface VideosClipsPostRequest {
        perspective?: any;
        position?: number;
        video?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/clip" {
    import { Video } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/video";
    export interface Clip {
        createdAt?: Date;
        duration?: number;
        durationPretty?: string;
        finished?: any;
        id?: number;
        slug?: string;
        timeEnd?: number;
        timeStart?: number;
        title?: any;
        updatedAt?: Date;
        video?: Video;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosClipsPostRequest1" {
    import { Clip } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/clip";
    export interface VideosClipsPostRequest1 {
        clip?: Clip;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/perspective" {
    export interface Perspective {
        id?: number;
        main?: boolean;
        title?: string;
        titlePluralized?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences" {
    export interface Preferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum5" {
    import { Channel } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channel";
    import { Perspective } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/perspective";
    import { Preferences } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences";
    import { Thumbnail } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/thumbnail";
    export interface Datum5 {
        channels?: Array<Channel>;
        commentsCount?: number;
        description?: string;
        duration?: number;
        durationPretty?: string;
        featured?: boolean;
        id?: number;
        likesCount?: number;
        perspectives?: Array<Perspective>;
        preferences?: Preferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: string;
        thumbnail?: Thumbnail;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosGetRequest" {
    import { Datum5 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum5";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface VideosGetRequest {
        data?: Array<Datum5>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosIDGetRequest" {
    import { Video } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/video";
    export interface VideosIDGetRequest {
        success?: boolean;
        video?: Video;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosIDNextGetRequest" {
    import { Video } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/video";
    export interface VideosIDNextGetRequest {
        success?: boolean;
        video?: Video;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum21" {
    export interface Datum21 {
        channel?: any;
        description?: any;
        firstVideo?: any;
        followingsCount?: number;
        id?: number;
        metaTags?: any;
        publishDate?: Date;
        slug?: string;
        title?: string;
        type?: number;
        urlSlug?: string;
        videosCount?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsGetRequest" {
    import { Datum21 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum21";
    import { Links } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    import { Meta } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export interface VideosPlaylistsGetRequest {
        data?: Array<Datum21>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/playlist" {
    export interface Playlist {
        description?: any;
        followingsCount?: number;
        id?: number;
        metaTags?: any;
        publishDate?: Date;
        slug?: string;
        title?: string;
        type?: number;
        urlSlug?: string;
        videosCount?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsIDGetRequest" {
    import { Playlist } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/playlist";
    export interface VideosPlaylistsIDGetRequest {
        playlist?: Playlist;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsIDPostRequest" {
    export interface VideosPlaylistsIDPostRequest {
        video?: number;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsIDPostRequest1" {
    import { Playlist } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/playlist";
    export interface VideosPlaylistsIDPostRequest1 {
        playlist?: Playlist;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/videos.service" {
    import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { ChannelVideoCountGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channelVideoCountGetRequest";
    import { VideosAuthorsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosAuthorsGetRequest";
    import { VideosChannelsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosChannelsGetRequest";
    import { VideosClipsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosClipsGetRequest";
    import { VideosClipsPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosClipsPostRequest";
    import { VideosClipsPostRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosClipsPostRequest1";
    import { VideosGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosGetRequest";
    import { VideosIDGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosIDGetRequest";
    import { VideosIDNextGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosIDNextGetRequest";
    import { VideosPlaylistsGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsGetRequest";
    import { VideosPlaylistsIDGetRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsIDGetRequest";
    import { VideosPlaylistsIDPostRequest } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsIDPostRequest";
    import { VideosPlaylistsIDPostRequest1 } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsIDPostRequest1";
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export class VideosService {
        protected httpClient: HttpClient;
        protected basePath: string;
        defaultHeaders: any;
        configuration: Configuration;
        constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
        private canConsumeForm;
        getChannelVideoCount(id: number, observe?: 'body', reportProgress?: boolean): Observable<ChannelVideoCountGetRequest>;
        getChannelVideoCount(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ChannelVideoCountGetRequest>>;
        getChannelVideoCount(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ChannelVideoCountGetRequest>>;
        getVideos(limit?: string, order?: string, prioritizeFeatured?: string, page?: string, likedBy?: string, viewedBy?: string, priority?: string, followedBy?: string, playlists?: string, u?: string, channels?: string, playlistVideo?: string, observe?: 'body', reportProgress?: boolean): Observable<VideosGetRequest>;
        getVideos(limit?: string, order?: string, prioritizeFeatured?: string, page?: string, likedBy?: string, viewedBy?: string, priority?: string, followedBy?: string, playlists?: string, u?: string, channels?: string, playlistVideo?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VideosGetRequest>>;
        getVideos(limit?: string, order?: string, prioritizeFeatured?: string, page?: string, likedBy?: string, viewedBy?: string, priority?: string, followedBy?: string, playlists?: string, u?: string, channels?: string, playlistVideo?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VideosGetRequest>>;
        getVideosAuthors(observe?: 'body', reportProgress?: boolean): Observable<VideosAuthorsGetRequest>;
        getVideosAuthors(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VideosAuthorsGetRequest>>;
        getVideosAuthors(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VideosAuthorsGetRequest>>;
        getVideosById(id: number, include?: string, observe?: 'body', reportProgress?: boolean): Observable<VideosIDGetRequest>;
        getVideosById(id: number, include?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VideosIDGetRequest>>;
        getVideosById(id: number, include?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VideosIDGetRequest>>;
        getVideosByIdNext(id: number, playlist?: string, channel?: string, observe?: 'body', reportProgress?: boolean): Observable<VideosIDNextGetRequest>;
        getVideosByIdNext(id: number, playlist?: string, channel?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VideosIDNextGetRequest>>;
        getVideosByIdNext(id: number, playlist?: string, channel?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VideosIDNextGetRequest>>;
        getVideosChannels(page?: string, order?: string, observe?: 'body', reportProgress?: boolean): Observable<VideosChannelsGetRequest>;
        getVideosChannels(page?: string, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VideosChannelsGetRequest>>;
        getVideosChannels(page?: string, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VideosChannelsGetRequest>>;
        getVideosClips(video?: string, limit?: string, order?: string, page?: string, observe?: 'body', reportProgress?: boolean): Observable<VideosClipsGetRequest>;
        getVideosClips(video?: string, limit?: string, order?: string, page?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VideosClipsGetRequest>>;
        getVideosClips(video?: string, limit?: string, order?: string, page?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VideosClipsGetRequest>>;
        getVideosPlaylists(user?: string, page?: string, order?: string, limit?: string, observe?: 'body', reportProgress?: boolean): Observable<VideosPlaylistsGetRequest>;
        getVideosPlaylists(user?: string, page?: string, order?: string, limit?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VideosPlaylistsGetRequest>>;
        getVideosPlaylists(user?: string, page?: string, order?: string, limit?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VideosPlaylistsGetRequest>>;
        getVideosPlaylistsById(id: number, observe?: 'body', reportProgress?: boolean): Observable<VideosPlaylistsIDGetRequest>;
        getVideosPlaylistsById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VideosPlaylistsIDGetRequest>>;
        getVideosPlaylistsById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VideosPlaylistsIDGetRequest>>;
        postVideosClips(body: VideosClipsPostRequest, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<VideosClipsPostRequest1>;
        postVideosClips(body: VideosClipsPostRequest, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VideosClipsPostRequest1>>;
        postVideosClips(body: VideosClipsPostRequest, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VideosClipsPostRequest1>>;
        postVideosPlaylistsById(body: VideosPlaylistsIDPostRequest, id: number, priority?: string, observe?: 'body', reportProgress?: boolean): Observable<VideosPlaylistsIDPostRequest1>;
        postVideosPlaylistsById(body: VideosPlaylistsIDPostRequest, id: number, priority?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VideosPlaylistsIDPostRequest1>>;
        postVideosPlaylistsById(body: VideosPlaylistsIDPostRequest, id: number, priority?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VideosPlaylistsIDPostRequest1>>;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api.module" {
    import { ModuleWithProviders } from '@angular/core';
    import { Configuration } from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    import { HttpClient } from '@angular/common/http';
    export class ApiModule {
        static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule>;
        constructor(parentModule: ApiModule, http: HttpClient);
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/api/api" {
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/community.service";
    import { CommunityService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/community.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/config.service";
    import { ConfigService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/config.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/headlines.service";
    import { HeadlinesService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/headlines.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/livestreams.service";
    import { LivestreamsService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/livestreams.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/modules.service";
    import { ModulesService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/modules.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/news.service";
    import { NewsService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/news.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/podcast.service";
    import { PodcastService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/podcast.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/polls.service";
    import { PollsService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/polls.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/promotions.service";
    import { PromotionsService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/promotions.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/schedules.service";
    import { SchedulesService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/schedules.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/search.service";
    import { SearchService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/search.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/subscriptions.service";
    import { SubscriptionsService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/subscriptions.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/tags.service";
    import { TagsService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/tags.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/users.service";
    import { UsersService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/users.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/utility.service";
    import { UtilityService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/utility.service";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/videos.service";
    import { VideosService } from "tmp/pietsmiet.de/typescript-angular-client-generated/api/videos.service";
    export const APIS: (typeof CommunityService | typeof ConfigService | typeof HeadlinesService | typeof LivestreamsService | typeof ModulesService | typeof NewsService | typeof PodcastService | typeof PollsService | typeof PromotionsService | typeof SchedulesService | typeof SearchService | typeof SubscriptionsService | typeof TagsService | typeof UsersService | typeof UtilityService | typeof VideosService)[];
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/settingsAssetsBody" {
    export interface SettingsAssetsBody {
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/typeDefinition1" {
    export interface TypeDefinition1 {
        title?: string;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videoPreferences" {
    export interface VideoPreferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videoThumbnail" {
    import { Variation } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/variation";
    export interface VideoThumbnail {
        collection?: VideoThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<Variation>;
    }
    export namespace VideoThumbnail {
        type CollectionEnum = 'thumbnail';
        const CollectionEnum: {
            Thumbnail: CollectionEnum;
        };
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosChannels12GetRequest" {
    import { Channel } from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channel";
    export interface VideosChannels12GetRequest {
        channel?: Channel;
        success?: boolean;
    }
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/model/models" {
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/action";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/advertising";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/analytics";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/article";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/articlePreferences";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/atedAt";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/author";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/authorPreferences";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/avatar";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/avatar1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/avatarVariation";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/braintree";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/braintreePlan";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/brand";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/category";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/categoryElement";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channel";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channelVideoCountGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/channels";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/chromecast";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/clip";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/comment";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/communitySuggestionsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/configAssetVersionGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/configEnumerationsCountriesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/configOriginIntegrityHeader";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/counts";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/dash";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/data";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/data1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/data3";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum10";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum11";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum12";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum13";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum14";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum15";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum16";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum17";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum18";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum19";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum2";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum20";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum21";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum22";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum23";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum24";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum3";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum4";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum5";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum6";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum7";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum8";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datum9";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datumPreferences";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/datumThumbnail";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/detail";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/details";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/discount";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/dislike";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/episode";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/errors";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/event";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/feed";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/firstVideo";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/firstVideoThumbnail";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/fluffyVariation";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/follow";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/from";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/generic";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/hLS";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/headlinesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/indecentVariation";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/indigoVariation";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/item";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticle";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticlePreferences";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestArticleThumbnail";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestPlaylist";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestPodcast";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestPodcastThumbnail";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestVideo";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestVideoPerspective";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/latestVideoThumbnail";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/like";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/link";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/links";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/livestreamsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/meta";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/modulesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/newsArticlesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/newsArticlesIDGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/newsCategories34GetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/notifiable";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/notification";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/options";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/options1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/options2";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/otherCategory";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/perspective";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/playlist";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/podcastCategoriesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/podcastEpisodesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/podcastEpisodesIDGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/pollsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/pollsVotesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/preferences1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/product";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/promotionsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/properties";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/publicSocialAccount";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/purpleCategory";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/purpleVariation";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/quality";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/schedule";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/scheduleThumbnail";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/schedulesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/schedulesUpcomingGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/searchGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/serviceDefinition";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/serviceDefinition1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/settingsAssetsBody";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/socialAccount";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/socialAccount1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/sources";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/status";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/stickyVariation";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/subject";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/subject1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/subjectPreferences";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/subscriptionsDiscountsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/subscriptionsProductsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/supportAddOn";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/supportPerk";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/tagsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/tentacledVariation";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/thumbnail";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/to";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/token";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/topUser";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/track";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/traits";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/trendingVideo";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/trendingVideoPerspective";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/trendingVideoThumbnail";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/type";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/type1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/typeDefinition";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/typeDefinition1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/uRL";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user2";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user3";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user4";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/user5";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/userPreferences";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDAchievementsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDDislikesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDDislikesPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDDislikesPostRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDFollowingsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDInvoicesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDLikesGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDLikesPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDLikesPostRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDNotificationsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDNotificationsUUIDPatchRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDNotificationsUUIDPatchRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsAssetsPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsDataRequestPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsNotificationsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsNotificationsPatchRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsNotificationsPatchRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPasswordPatchRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPasswordPatchRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPasswordPatchRequest2";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPreferencesPatchRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsPreferencesPatchRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsProfilePatchRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsProfilePatchRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorResetPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorResetPostRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorSetupGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorSetupPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSettingsTwofactorSetupPostRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDSubscriptionsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDTokensGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDTokensTokenDeleteRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersIDViewsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersMeGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/usersObject20ObjectTokensDeleteRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityAutobahnPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityAutobahnPostRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsIDReportsPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityCommentsPostRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsDeleteRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityFollowsPostRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityHighlightsPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityHighlightsPostRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/utilityPlayerGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/variation";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/variation1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/video";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videoPreferences";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videoThumbnail";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosAuthorsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosChannels12GetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosChannelsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosClipsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosClipsPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosClipsPostRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosIDGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosIDNextGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsIDGetRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsIDPostRequest";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/videosPlaylistsIDPostRequest1";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/visual";
}
declare module "tmp/pietsmiet.de/typescript-angular-client-generated/index" {
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api/api";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/model/models";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/variables";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/configuration";
    export * from "tmp/pietsmiet.de/typescript-angular-client-generated/api.module";
}
declare module "tmp/pietsmiet.de/typescript-fetch-client-generated/configuration" {
    export interface ConfigurationParameters {
        apiKey?: string | ((name: string) => string);
        username?: string;
        password?: string;
        accessToken?: string | ((name: string, scopes?: string[]) => string);
        basePath?: string;
    }
    export class Configuration {
        apiKey?: string | ((name: string) => string);
        username?: string;
        password?: string;
        accessToken?: string | ((name: string, scopes?: string[]) => string);
        basePath?: string;
        constructor(param?: ConfigurationParameters);
    }
}
declare module "tmp/pietsmiet.de/typescript-fetch-client-generated/api" {
    import { Configuration } from "tmp/pietsmiet.de/typescript-fetch-client-generated/configuration";
    export const COLLECTION_FORMATS: {
        csv: string;
        ssv: string;
        tsv: string;
        pipes: string;
    };
    export interface FetchAPI {
        (url: string, init?: any): Promise<Response>;
    }
    export interface FetchArgs {
        url: string;
        options: any;
    }
    export class BaseAPI {
        protected basePath: string;
        protected fetch: FetchAPI;
        protected configuration: Configuration;
        constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
    }
    export class RequiredError extends Error {
        field: string;
        name: string;
        constructor(field: string, msg?: string);
    }
    export interface Action {
        title?: string;
        url?: string;
    }
    export interface Advertising {
        nugg?: boolean;
        played?: boolean;
        tag?: string;
        time?: number;
    }
    export interface Analytics {
        google?: string;
    }
    export interface Article {
        author?: Author;
        categories?: Array<Category>;
        commentsCount?: number;
        featured?: boolean;
        id?: number;
        intro?: string;
        preferences?: ArticlePreferences;
        publishDate?: Date;
        slug?: string;
        text?: string;
        thumbnail?: Thumbnail;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
    export interface ArticlePreferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
    export interface AtedAt {
        date?: Date;
        timezone?: string;
        timezoneType?: number;
    }
    export interface Author {
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: AuthorPreferences;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
    export interface AuthorPreferences {
        publicProfile?: boolean;
        subscriptionEnableIdentification?: boolean;
    }
    export interface Avatar {
        collection?: Avatar.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<AvatarVariation>;
    }
    export namespace Avatar {
        enum CollectionEnum {
            Avatar
        }
    }
    export interface Avatar1 {
        collection?: string;
        id?: number;
        remoteUrl?: any;
        variations?: Array<Variation>;
    }
    export interface AvatarVariation {
        file?: AvatarVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace AvatarVariation {
        enum FileEnum {
            _05070b3df9dfba0ef3a825b50e79252ac5793876Jpg,
            _91b805d14533d253e88168777efc515de2471d8bJpg,
            _337eac33e9b9611cfc558e3264d3ac0089a15599Jpg,
            _023fddb697b8202d6553bd37c2da79e305ae8aa7Jpg,
            D02e2cf8f3f219db3b8ff3b3a6d0d185356c7512Jpg,
            Cf2ec2474cc540d3612f0754c1f5e9306fc61c79Jpg,
            _8c0602d1ab5c896c18310e4cfac691e8cbe97497Jpg,
            _2f8a2ce60431ad7eb060157e15e6a7272721d7ceJpg,
            _324cfb7b3fd72cbe2c31d04fad1574551cadab39Jpg,
            Cc3c3279e4f763ba17471684800f6f695176ada8Jpg,
            Ea73de55528a4a8329e6b8b87a3e26acb1c581d8Jpg,
            _0653935b38b2737823aa946acf19e85b685ae38cJpg,
            F37394ce42cd9d5fb5ecdc04a15ee4fcdf2ae0e9Jpg,
            _43661dea23ff214917ed39709d4e027bcee40d1cJpg,
            _1ba264d2e2f0bad7f1c817e67ff470539534f616Jpg,
            D84fcf7a59c9e05dfd8b39905037de661389b386Jpg,
            Bd52b49d401a94a2cbc0d1381f1641f59cc90fa1Jpg,
            A02f1cf239d45b92edc9123d75108c1d832bf00cJpg,
            Cca3c488a674bc30a00b9908270c9d0d67e7cbb8Jpg,
            _8eaa6b0988867d4e44b2078ba611399287bc4fdbJpg
        }
    }
    export interface Braintree {
        addOns?: Array<any>;
        billingDayOfMonth?: number;
        billingPeriodEndDate?: Date;
        billingPeriodStartDate?: Date;
        currentBillingCycle?: number;
        daysPastDue?: any;
        discounts?: Array<Discount>;
        failureCount?: number;
        firstBillingDate?: Date;
        neverExpires?: boolean;
        nextBillAmount?: string;
        nextBillingDate?: Date;
        nextBillingPeriodAmount?: string;
        numberOfBillingCycles?: any;
        price?: string;
        status?: string;
    }
    export interface BraintreePlan {
        addOns?: Array<any>;
        billingDayOfMonth?: any;
        billingFrequency?: number;
        createdAt?: AtedAt;
        currencyIsoCode?: string;
        description?: any;
        discounts?: Array<any>;
        id?: string;
        merchantId?: string;
        name?: string;
        numberOfBillingCycles?: any;
        plans?: Array<any>;
        price?: string;
        trialDuration?: any;
        trialDurationUnit?: any;
        trialPeriod?: boolean;
        updatedAt?: AtedAt;
    }
    export interface Brand {
        color?: Brand.ColorEnum;
        link?: string;
        logo?: string;
    }
    export namespace Brand {
        enum ColorEnum {
            _039a45
        }
    }
    export interface Category {
        description?: any;
        id?: number;
        slug?: string;
        title?: string;
        urlSlug?: string;
    }
    export interface CategoryElement {
        description?: any;
        id?: number;
        slug?: string;
        title?: string;
        urlSlug?: string;
    }
    export interface Channel {
        description?: any;
        followingsCount?: any;
        id?: number;
        slug?: string;
        title?: string;
        urlSlug?: string;
        videosCount?: any;
    }
    export interface ChannelVideoCountGetRequest {
        channel?: Channel;
        success?: boolean;
    }
    export interface Channels {
        viaMail?: boolean;
        viaWebsite?: boolean;
    }
    export interface Chromecast {
        enabled?: boolean;
        receiverApplicationId?: string;
    }
    export interface Clip {
        createdAt?: Date;
        duration?: number;
        durationPretty?: string;
        finished?: any;
        id?: number;
        slug?: string;
        timeEnd?: number;
        timeStart?: number;
        title?: any;
        updatedAt?: Date;
        video?: Video;
    }
    export interface Comment {
        approved?: boolean;
        countReplies?: number;
        createdAt?: Date;
        dislikesCount?: number;
        id?: number;
        isReply?: boolean;
        likesCount?: number;
        pinned?: any;
        reply?: number;
        subject?: Subject1;
        text?: string;
        timestamp?: number;
        user?: User2;
    }
    export interface CommunitySuggestionsGetRequest {
        data?: Array<Datum13>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface ConfigAssetVersionGetRequest {
        hash?: string;
        success?: boolean;
    }
    export interface ConfigEnumerationsCountriesGetRequest {
        data?: Array<Datum1>;
        success?: boolean;
    }
    export interface ConfigOriginIntegrityHeader {
        h?: ConfigOriginIntegrityHeader.HEnum;
        v?: string;
    }
    export namespace ConfigOriginIntegrityHeader {
        enum HEnum {
            XOriginIntegrity,
            WC1PcmlnaW4tSW50ZWdyaXR5
        }
    }
    export interface Counts {
        articles?: number;
        channels?: number;
        playlists?: number;
        podcasts?: number;
        suggestions?: number;
        tags?: number;
        videos?: number;
    }
    export interface Dash {
        labels?: Array<string>;
        labelsBitrate?: {
            [key: string]: string;
        };
        src?: string;
        type?: Dash.TypeEnum;
    }
    export namespace Dash {
        enum TypeEnum {
            Applicationdashxml
        }
    }
    export interface Data {
        notifications?: number;
        actions?: Array<Action>;
        icon?: string;
        text?: string;
    }
    export interface Data1 {
        latestArticles?: Array<LatestArticle>;
        latestPlaylists?: Array<LatestPlaylist>;
        latestPodcasts?: Array<LatestPodcast>;
        latestVideos?: Array<LatestVideo>;
        schedules?: Array<Schedule>;
        topUsers?: Array<TopUser>;
        trendingVideos?: Array<TrendingVideo>;
        upcomingSchedules?: Array<any>;
    }
    export interface Data3 {
        qr?: string;
        secret?: string;
    }
    export interface Datum {
        clientId?: number;
        createdAt?: Date;
        expiresAt?: Date;
        id?: string;
        ip?: any;
        lastSeen?: any;
        name?: any;
        revoked?: boolean;
        scopes?: Array<any>;
        tfaVerifiedAt?: any;
        ua?: any;
        uaBrowser?: any;
        uaDevice?: any;
        uaOs?: any;
        updatedAt?: Date;
        userId?: number;
    }
    export interface Datum1 {
        code?: string;
        flatUrl?: string;
        localizedName?: string;
        name?: string;
        tax?: number;
    }
    export interface Datum10 {
        author?: Author;
        categories?: Array<Category>;
        commentsCount?: number;
        featured?: boolean;
        id?: number;
        intro?: string;
        preferences?: DatumPreferences;
        publishDate?: Date;
        slug?: string;
        text?: any;
        thumbnail?: Thumbnail;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
    export interface Datum11 {
        createdAt?: Date;
        data?: Data;
        id?: string;
        notifiableId?: number;
        notifiableType?: Datum11.NotifiableTypeEnum;
        read?: boolean;
        readAt?: Date;
        type?: Datum11.TypeEnum;
        updatedAt?: Date;
    }
    export namespace Datum11 {
        enum NotifiableTypeEnum {
            User
        }
        enum TypeEnum {
            UserTwoFactorDisabled,
            UserTwoFactorEnabled,
            UserPasswordChanged
        }
    }
    export interface Datum12 {
        braintreeId?: string;
        braintreePlan?: BraintreePlan;
        details?: Details;
        enabled?: boolean;
        id?: string;
        options?: Options1;
        supportAddOn?: any;
        type?: string;
    }
    export interface Datum13 {
        commentsCount?: number;
        createdAt?: Date;
        description?: string;
        descriptionRaw?: string;
        dislikesCount?: number;
        id?: number;
        likesCount?: number;
        participantCount?: number;
        participantLineup?: number;
        participantLineupDescription?: string;
        referringTo?: string;
        slug?: string;
        status?: Status;
        title?: string;
        type?: number;
        typeDescription?: string;
        updatedAt?: Date;
        url?: string;
        urlDomain?: string;
        urlSlug?: string;
        user?: User;
        voteable?: boolean;
    }
    export interface Datum14 {
        createdAt?: Date;
        externalUrl?: string;
        id?: number;
        live?: number;
        service?: number;
        streamGame?: any;
        streamId?: string;
        streamStartedAt?: Date;
        streamThumbnail?: string;
        streamTitle?: string;
        streamViewerCount?: number;
        type?: number;
        updatedAt?: Date;
        userAvatar?: string;
        userBanner?: string;
        userDescription?: string;
        userDisplayName?: string;
        userId?: number;
        userName?: string;
        userType?: string;
    }
    export interface Datum15 {
        ad?: boolean;
        id?: number | string;
        publishDate?: Date;
        title?: string;
        type?: string;
        url?: string;
    }
    export interface Datum16 {
        approved?: boolean;
        countReplies?: number;
        createdAt?: Date;
        dislikesCount?: number;
        id?: number;
        isReply?: boolean;
        likesCount?: number;
        pinned?: boolean;
        reply?: number;
        text?: string;
        timestamp?: number;
        user?: User4;
    }
    export interface Datum17 {
        createdAt?: Date;
        id?: number;
        objectId?: number;
        objectType?: Datum17.ObjectTypeEnum;
        timestamp?: number;
        timestampPretty?: string;
        updatedAt?: Date;
        userId?: number;
    }
    export namespace Datum17 {
        enum ObjectTypeEnum {
            Video,
            PodcastEpisode
        }
    }
    export interface Datum18 {
        createdAt?: Date;
        date?: string;
        description?: string;
        full?: boolean;
        id?: number;
        intro?: any;
        items?: Array<Item>;
        thumbnail?: Thumbnail;
        updatedAt?: Date;
    }
    export interface Datum19 {
        date?: Date;
        id?: string;
        pending?: boolean;
        status?: string;
        statusColor?: string;
        statusDescription?: string;
        total?: string;
    }
    export interface Datum2 {
        description?: any;
        firstVideo?: FirstVideo;
        followingsCount?: number;
        id?: number;
        slug?: string;
        thumbnail?: any;
        title?: string;
        urlSlug?: string;
        videosCount?: number;
    }
    export interface Datum20 {
        createdAt?: Date;
        id?: number;
        subjectId?: number;
        subjectType?: string;
        updatedAt?: Date;
        userId?: number;
    }
    export interface Datum21 {
        channel?: any;
        description?: any;
        firstVideo?: any;
        followingsCount?: number;
        id?: number;
        metaTags?: any;
        publishDate?: Date;
        slug?: string;
        title?: string;
        type?: number;
        urlSlug?: string;
        videosCount?: number;
    }
    export interface Datum22 {
        createdAt?: Date;
        duration?: number;
        durationPretty?: string;
        finished?: boolean;
        id?: number;
        slug?: string;
        thumbnail?: DatumThumbnail;
        timeEnd?: number;
        timeStart?: number;
        title?: string;
        updatedAt?: Date;
        user?: User;
        video?: Video;
        viewsCount?: number;
    }
    export interface Datum23 {
        createdAt?: Date;
        id?: number;
        subjectId?: number;
        subjectType?: Datum23.SubjectTypeEnum;
        updatedAt?: Date;
        userId?: number;
    }
    export namespace Datum23 {
        enum SubjectTypeEnum {
            Comment,
            Video,
            Tag,
            Suggestion
        }
    }
    export interface Datum24 {
        category?: OtherCategory;
        commentsCount?: number;
        description?: string;
        duration?: number;
        durationPretty?: any;
        id?: number;
        metaTags?: any;
        mime?: Datum24.MimeEnum;
        publishDate?: Date;
        size?: number;
        slug?: string;
        sourceUrl?: string;
        thumbnail?: Thumbnail;
        title?: string;
        urlSlug?: string;
    }
    export namespace Datum24 {
        enum MimeEnum {
            Audiompeg
        }
    }
    export interface Datum3 {
        cumulative?: boolean;
        description?: any;
        episodesCount?: number;
        feed?: Feed;
        id?: number;
        remoteUrl?: string;
        slug?: string;
        spotifyUrl?: any;
        title?: string;
        urlSlug?: string;
    }
    export interface Datum4 {
        createdAt?: Date;
        extra?: Array<any>;
        icon?: string;
        id?: number;
        title?: string;
        type?: number;
        updatedAt?: Date;
        userId?: number;
    }
    export interface Datum5 {
        channels?: Array<Channel>;
        commentsCount?: number;
        description?: string;
        duration?: number;
        durationPretty?: string;
        featured?: boolean;
        id?: number;
        likesCount?: number;
        perspectives?: Array<Perspective>;
        preferences?: Preferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: string;
        thumbnail?: Thumbnail;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
    export interface Datum6 {
        active?: boolean;
        braintree?: Braintree;
        cancelled?: boolean;
        createdAt?: Date;
        endsAt?: Date;
        gifted?: boolean;
        id?: number;
        name?: any;
        onGracePeriod?: boolean;
        onTrial?: boolean;
        product?: Product;
        sponsored?: boolean;
        trialEndsAt?: any;
        updatedAt?: Date;
        valid?: boolean;
    }
    export interface Datum7 {
        author?: Author;
        categories?: Array<CategoryElement>;
        category?: PurpleCategory;
        channels?: Array<Channel>;
        commentsCount?: any;
        description?: any;
        duration?: number;
        durationPretty?: string;
        featured?: boolean;
        followingsCount?: number;
        id?: number;
        intro?: string;
        likesCount?: any;
        metaTags?: string;
        mime?: Datum7.MimeEnum;
        preferences?: DatumPreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: string;
        shortUrl?: string;
        size?: number;
        slug?: string;
        sourceUrl?: string;
        text?: any;
        thumbnail?: Thumbnail;
        title?: string;
        type?: number;
        url?: string;
        urlSlug?: string;
        videosCount?: number;
    }
    export namespace Datum7 {
        enum MimeEnum {
            Audiompeg
        }
    }
    export interface Datum8 {
        createdAt?: Date;
        dislikesCount?: number;
        id?: number;
        likesCount?: number;
        slug?: string;
        taggableId?: number;
        taggableType?: Datum8.TaggableTypeEnum;
        title?: string;
        total?: number;
        updatedAt?: Date;
        user?: User;
    }
    export namespace Datum8 {
        enum TaggableTypeEnum {
            Video
        }
    }
    export interface Datum9 {
        avatar?: any;
        banner?: any;
        description?: string;
        followingsCount?: any;
        id?: number;
        name?: string;
        publicSocialAccounts?: Array<PublicSocialAccount>;
        team?: boolean;
        urlSlug?: string;
        username?: string;
        videosCount?: any;
    }
    export interface DatumPreferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
    export interface DatumThumbnail {
        collection?: DatumThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<Variation>;
    }
    export namespace DatumThumbnail {
        enum CollectionEnum {
            Thumbnail
        }
    }
    export interface Detail {
        text?: string;
    }
    export interface Details {
        color?: string;
        details?: Array<Detail>;
        perks?: Array<Detail>;
        subTitle?: string;
        supportPerks?: Array<SupportPerk>;
        title?: string;
    }
    export interface Discount {
        amount?: string;
        currentBillingCycle?: number;
        id?: string;
        name?: string;
        neverExpires?: boolean;
        numberOfBillingCycles?: any;
        quantity?: number;
    }
    export interface Dislike {
        createdAt?: Date;
        id?: number;
        subjectId?: number;
        subjectType?: string;
        updatedAt?: Date;
        userId?: number;
    }
    export interface Episode {
        category?: OtherCategory;
        commentsCount?: any;
        description?: string;
        duration?: number;
        durationPretty?: any;
        id?: number;
        metaTags?: any;
        mime?: string;
        publishDate?: Date;
        size?: number;
        slug?: string;
        sourceUrl?: string;
        thumbnail?: Thumbnail;
        title?: string;
        urlSlug?: string;
    }
    export interface Errors {
        currentPassword?: Array<string>;
    }
    export interface Event {
        createdAt?: number;
        properties?: Properties;
        type?: Event.TypeEnum;
    }
    export namespace Event {
        enum TypeEnum {
            Navigation,
            View,
            PlayerPlay,
            PlayerFirstPlay,
            PlayerPause,
            UserView
        }
    }
    export interface Feed {
        id?: number;
        note?: any;
        remoteUrl?: string;
        slug?: string;
        title?: string;
        url?: string;
    }
    export interface FirstVideo {
        commentsCount?: any;
        description?: any;
        featured?: boolean;
        id?: number;
        likesCount?: any;
        preferences?: LatestArticlePreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: string;
        thumbnail?: FirstVideoThumbnail;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
    export interface FirstVideoThumbnail {
        collection?: FirstVideoThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<FluffyVariation>;
    }
    export namespace FirstVideoThumbnail {
        enum CollectionEnum {
            Thumbnail
        }
    }
    export interface FluffyVariation {
        file?: FluffyVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace FluffyVariation {
        enum FileEnum {
            B99baf2ccecdd32b02a8d79a1ce5476fc7767e80Jpg,
            _18933a5a8b21d2b4dfb74da7c94b07c334675921Jpg,
            Cdd651b0a4993a4785382d09160ab833d13a407cJpg,
            _3f2cfcba822db50cd16fc191f6de5b5fd3113f17Jpg,
            D06a09c68edb490d73d79b4de199b513600b09f2Jpg,
            Bdf7325121b52beb12a985055221cced0744962aJpg,
            Df1bf23f13b052bb3f6bd7e0e20061d6a4f987e9Jpg,
            C0cde6698b20f26f58ee045da7f4eda09cada6afJpg,
            E62c29bbc90a2ddb04713b1d8641e040d8aff343Jpg,
            E1ce2ef937633fc8a0eb575b2b46db15f0224503Jpg,
            _34703e0a4d8f2f62ecf9042b93af01fa4cf0607dJpg,
            _3c099c436b466a43c5e49d979ba6b4233651fdc9Jpg,
            _36518189eecf89bbf392c5ce1d7bea07c810d960Jpg,
            _634ade16c38d39d29e1cb446d0b026ee3fcbc6a5Jpg,
            _5b3602d16e26e26cc28480ba6bf8374274eee339Jpg
        }
    }
    export interface Follow {
        id?: number;
        subject?: Subject;
        subjectType?: string;
        userId?: number;
    }
    export interface From {
        name?: string;
        path?: string;
    }
    export interface Generic {
        analytics?: Analytics;
        autoplay?: boolean;
        chromecast?: Chromecast;
        controls?: boolean;
        loop?: boolean;
        muted?: boolean;
        playbackRates?: Array<number>;
    }
    export interface HLS {
        labels?: Array<string>;
        labelsBitrate?: {
            [key: string]: string;
        };
        src?: string;
        type?: HLS.TypeEnum;
    }
    export namespace HLS {
        enum TypeEnum {
            ApplicationxMpegurl
        }
    }
    export interface HeadlinesGetRequest {
        data?: Array<Datum15>;
        success?: boolean;
    }
    export interface IndecentVariation {
        file?: IndecentVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace IndecentVariation {
        enum FileEnum {
            B78b5abff75c856c08b28bb11d423d2c86dde046Jpg,
            A843cc105d578e12b30b4accc7cf1ecc5b2102ccJpg,
            Ad96a1d917e7171a11061665f936b121f7173454Jpg,
            E33f8287fb06e285111cf1d976ab66581f3ed391Jpg,
            _2a60c0a63033499fbbe44f43071497a1672a4e31Jpg,
            _18278b24157e067754fba80f7471beea060cb405Jpg,
            _618b16d0439124438f18508fdba1edb367db265fJpg,
            _6ceb0e1f94107cfad26920c57e186d70f2056a8eJpg,
            _03a764aa435fe1e529b1e138dcd5811b603c362eJpg,
            _893de32a745b377292b2b1db7530c06552c0db17Jpg,
            _1dfa9e2c54da4dc537d1db62c7df034a474bdde9Jpg,
            _361550a272222bbf27b723194e018fa80aeaee2eJpg,
            _3c44c0da15981f3758110466522507122c96426cJpg,
            B7824013fcbeebf2e7a16f556d660d53d34fc04eJpg,
            _3062aea303b1bae6babf5c7512537486410cee61Jpg
        }
    }
    export interface IndigoVariation {
        file?: IndigoVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace IndigoVariation {
        enum FileEnum {
            _98a4dbc8a467110ac6fc68ddfe81706158ef5b5cJpg,
            _58f09a0bc9473e6cf72bcc00ece09ddda0955a37Jpg,
            _525ce5d7d1efa88885b2d2dc0a7b477c224ad845Jpg
        }
    }
    export interface Item {
        description?: any;
        externalUrl?: any;
        externalUrlPlatform?: any;
        publishDate?: Date;
        publishDateSecondary?: Date;
        title?: string;
        type?: number;
        typeDefinition?: TypeDefinition;
        video?: Video;
    }
    export interface LatestArticle {
        author?: Author;
        categories?: Array<Category>;
        commentsCount?: any;
        featured?: boolean;
        id?: number;
        intro?: LatestArticle.IntroEnum;
        preferences?: LatestArticlePreferences;
        publishDate?: Date;
        slug?: LatestArticle.SlugEnum;
        text?: any;
        thumbnail?: LatestArticleThumbnail;
        title?: LatestArticle.TitleEnum;
        url?: string;
        urlSlug?: LatestArticle.UrlSlugEnum;
    }
    export namespace LatestArticle {
        enum IntroEnum {
            StimmtJetztBerDieNchsteFolgeAb,
            ReichtEureVorschlgeEin,
            UnsereTermineAufDerGamescom,
            MitDiesenTippsMachtIhrUnsDasLebenLeichter,
            EinKleinerLeitfadenUmEuchUndUnsDasLebenZuErleichtern
        }
        enum SlugEnum {
            RetroBattleUmfrage,
            DieGoldeneEmma2024EinreichungDezemberBisJuli,
            Gamescom2024HierKonntIhrDieJungsTreffen,
            SoErhohtIhrDieChanceDassWirEureSpielshowsSpielen,
            _50FragenSoSendetIhrEureQuizshowRichtigEin
        }
        enum TitleEnum {
            RetroBattleUmfrage,
            DieGoldeneEmma2024EinreichungDezemberBisJuli,
            Gamescom2024HierKnntIhrDieJungsTreffen,
            SoErhhtIhrDieChanceDassWirEureSpielshowsSpielen,
            _50FragenSoSendetIhrEureQuizshowRichtigEin
        }
        enum UrlSlugEnum {
            _8586RetroBattleUmfrage,
            _8585DieGoldeneEmma2024EinreichungDezemberBisJuli,
            _8584Gamescom2024HierKonntIhrDieJungsTreffen,
            _8582SoErhohtIhrDieChanceDassWirEureSpielshowsSpielen,
            _858150FragenSoSendetIhrEureQuizshowRichtigEin
        }
    }
    export interface LatestArticlePreferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
    export interface LatestArticleThumbnail {
        collection?: LatestArticleThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<PurpleVariation>;
    }
    export namespace LatestArticleThumbnail {
        enum CollectionEnum {
            Thumbnail
        }
    }
    export interface LatestPlaylist {
        channel?: Channel;
        description?: any;
        firstVideo?: FirstVideo;
        followingsCount?: number;
        id?: number;
        metaTags?: any;
        publishDate?: Date;
        slug?: LatestPlaylist.SlugEnum;
        title?: LatestPlaylist.TitleEnum;
        type?: number;
        urlSlug?: LatestPlaylist.UrlSlugEnum;
        videosCount?: number;
    }
    export namespace LatestPlaylist {
        enum SlugEnum {
            RetroBattle,
            BetrayalBeach,
            BackToSchool,
            AbcQuiz,
            UpnDown
        }
        enum TitleEnum {
            RetroBattle,
            BetrayalBeach,
            BackToSchool,
            ABCQuiz,
            UPNDOWN
        }
        enum UrlSlugEnum {
            _155942RetroBattle,
            _155893BetrayalBeach,
            _155866BackToSchool,
            _155762AbcQuiz,
            _155689UpnDown
        }
    }
    export interface LatestPodcast {
        commentsCount?: any;
        description?: any;
        duration?: number;
        durationPretty?: any;
        id?: number;
        metaTags?: any;
        mime?: LatestPodcast.MimeEnum;
        publishDate?: Date;
        size?: number;
        slug?: LatestPodcast.SlugEnum;
        sourceUrl?: string;
        thumbnail?: LatestPodcastThumbnail;
        title?: LatestPodcast.TitleEnum;
        urlSlug?: LatestPodcast.UrlSlugEnum;
    }
    export namespace LatestPodcast {
        enum MimeEnum {
            Audiompeg
        }
        enum SlugEnum {
            Pietcast447SoWarDieGamescom
        }
        enum TitleEnum {
            PietCast447SoWarDieGamescom
        }
        enum UrlSlugEnum {
            _3336Pietcast447SoWarDieGamescom
        }
    }
    export interface LatestPodcastThumbnail {
        collection?: LatestPodcastThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<TentacledVariation>;
    }
    export namespace LatestPodcastThumbnail {
        enum CollectionEnum {
            Thumbnail
        }
    }
    export interface LatestVideo {
        channels?: Array<Channel>;
        commentsCount?: any;
        description?: any;
        duration?: number;
        durationPretty?: string;
        featured?: boolean;
        id?: number;
        likesCount?: any;
        perspectives?: Array<LatestVideoPerspective>;
        preferences?: LatestArticlePreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: LatestVideo.SlugEnum;
        thumbnail?: LatestVideoThumbnail;
        title?: LatestVideo.TitleEnum;
        url?: string;
        urlSlug?: LatestVideo.UrlSlugEnum;
    }
    export namespace LatestVideo {
        enum SlugEnum {
            RentnerTestenDieBlackOps6Beta,
            MontyMaulwurfMvpWormsClanWars,
            ReactDasIstBerlin,
            BeschreibeEsInWortenJackboxGamesBlatherRound,
            MinecraftMeetsTerrariaPietsmietProbiertCoreKeeper10
        }
        enum TitleEnum {
            RentnerTestenDieBlackOps6Beta,
            MontyMaulwurfMVPWormsClanWars,
            ReactDasIstBerlin56,
            BESCHREIBEEsInWORTENJackboxGamesBlatherRound,
            MinecraftMeetsTerrariaPietSmietProbiertCoreKeeper10
        }
        enum UrlSlugEnum {
            _79656RentnerTestenDieBlackOps6Beta,
            _79538MontyMaulwurfMvpWormsClanWars,
            _79573ReactDasIstBerlin,
            _79569BeschreibeEsInWortenJackboxGamesBlatherRound,
            _79651MinecraftMeetsTerrariaPietsmietProbiertCoreKeeper10
        }
    }
    export interface LatestVideoPerspective {
        id?: number;
        main?: boolean;
        title?: any;
        titlePluralized?: LatestVideoPerspective.TitlePluralizedEnum;
    }
    export namespace LatestVideoPerspective {
        enum TitlePluralizedEnum {
            S,
            Brammens,
            Chris,
            Peters,
            Seps,
            Jules,
            Svens,
            Hauptsichts
        }
    }
    export interface LatestVideoThumbnail {
        collection?: LatestVideoThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<StickyVariation>;
    }
    export namespace LatestVideoThumbnail {
        enum CollectionEnum {
            Thumbnail
        }
    }
    export interface Like {
        createdAt?: Date;
        id?: number;
        subjectId?: number;
        subjectType?: string;
        updatedAt?: Date;
        userId?: number;
    }
    export interface Link {
        active?: boolean;
        label?: string;
        url?: string;
    }
    export interface Links {
        first?: string;
        last?: string;
        next?: string;
        prev?: any;
    }
    export interface LivestreamsGetRequest {
        data?: Array<Datum14>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface Meta {
        currentPage?: number;
        from?: number;
        lastPage?: number;
        links?: Array<Link>;
        path?: string;
        perPage?: number;
        to?: number;
        total?: number;
    }
    export interface ModulesGetRequest {
        data?: Data1;
        success?: boolean;
    }
    export interface NewsArticlesGetRequest {
        data?: Array<Datum10>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface NewsArticlesIDGetRequest {
        article?: Article;
        success?: boolean;
    }
    export interface NewsCategories34GetRequest {
        category?: Category;
        success?: boolean;
    }
    export interface Notifiable {
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: Preferences1;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
    export interface Notification {
        createdAt?: Date;
        data?: Data;
        id?: string;
        notifiable?: Notifiable;
        notifiableId?: number;
        notifiableType?: string;
        read?: boolean;
        readAt?: Date;
        type?: string;
        updatedAt?: Date;
    }
    export interface Options {
        months?: number;
    }
    export interface Options1 {
        max?: number;
        months?: number;
    }
    export interface Options2 {
        generic?: Generic;
        tracks?: Array<Track>;
        visual?: Visual;
    }
    export interface OtherCategory {
        cumulative?: boolean;
        description?: any;
        episodesCount?: any;
        id?: number;
        remoteUrl?: any;
        slug?: string;
        spotifyUrl?: any;
        title?: string;
        urlSlug?: string;
    }
    export interface Perspective {
        id?: number;
        main?: boolean;
        title?: string;
        titlePluralized?: string;
    }
    export interface Playlist {
        description?: any;
        followingsCount?: number;
        id?: number;
        metaTags?: any;
        publishDate?: Date;
        slug?: string;
        title?: string;
        type?: number;
        urlSlug?: string;
        videosCount?: number;
    }
    export interface PodcastCategoriesGetRequest {
        data?: Array<Datum3>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface PodcastEpisodesGetRequest {
        data?: Array<Datum24>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface PodcastEpisodesIDGetRequest {
        episode?: Episode;
        success?: boolean;
    }
    export interface PollsGetRequest {
        data?: Array<any>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface PollsVotesGetRequest {
        data?: Array<any>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface Preferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
    export interface Preferences1 {
        commentsOrderOwnFirst?: boolean;
        commentsOrderPopular?: boolean;
        country?: string;
        enableDarkmode?: boolean;
        enableDarkmodeSchedule?: boolean;
        enableSpoilers?: boolean;
        publicProfile?: boolean;
        scrollTopRouteChange?: boolean;
        showInPresence?: boolean;
        showInSubscribedUsers?: boolean;
        subscribeNewsletter?: boolean;
        subscriptionEnableIdentification?: boolean;
        subscriptionKeepAds?: boolean;
        timezone?: string;
        useGravatar?: boolean;
        videosAutocontinue?: boolean;
        videosAutoplay?: boolean;
        videosPlayerFloating?: boolean;
    }
    export interface Product {
        braintreeId?: string;
        braintreePlan?: any;
        details?: Details;
        enabled?: boolean;
        id?: string;
        options?: Options;
        supportAddOn?: SupportAddOn;
        type?: string;
    }
    export interface PromotionsGetRequest {
        data?: Array<any>;
        success?: boolean;
    }
    export interface Properties {
        from?: From;
        id?: number;
        timestamp?: number;
        to?: To;
        type?: Properties.TypeEnum;
        video?: number;
    }
    export namespace Properties {
        enum TypeEnum {
            Video,
            PodcastEpisode,
            NewsArticle,
            VideoPlaylist
        }
    }
    export interface PublicSocialAccount {
        createdAt?: Date;
        externalUrl?: string;
        id?: number;
        name?: string;
        service?: PublicSocialAccount.ServiceEnum;
        serviceDefinition?: ServiceDefinition;
        socialId?: any;
        updatedAt?: Date;
        username?: string;
    }
    export namespace PublicSocialAccount {
        enum ServiceEnum {
            Twitter,
            Twitch,
            Instagram,
            Tiktok,
            Youtube
        }
    }
    export interface PurpleCategory {
        cumulative?: boolean;
        description?: any;
        episodesCount?: any;
        id?: number;
        remoteUrl?: any;
        slug?: PurpleCategory.SlugEnum;
        spotifyUrl?: any;
        title?: PurpleCategory.TitleEnum;
        urlSlug?: PurpleCategory.UrlSlugEnum;
    }
    export namespace PurpleCategory {
        enum SlugEnum {
            Peterheisstpodcast,
            Pietcast
        }
        enum TitleEnum {
            PeterHeitPodcast,
            PietCast
        }
        enum UrlSlugEnum {
            _36Peterheisstpodcast,
            _31Pietcast
        }
    }
    export interface PurpleVariation {
        file?: PurpleVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace PurpleVariation {
        enum FileEnum {
            _3d796cb90e82457ad489898ed177ff91a3e42489Jpg,
            _7b66d92e821f3d530670a7be04e63ecf933dc983Jpg,
            _3815d8c9c15175150fcdbcd5d1fe66fb62aab967Jpg,
            C0048e53b61f4c9976688778a9bd8abe4750513fJpg,
            B0140ea74a478863ab8fd52cfb5399bbd04bf215Jpg,
            _6c259457ad9942473f4c9d1cb0562d58a86a5955Jpg,
            B2bda99459cec7fcb94136afd7807270e7cf9fd2Jpg,
            _8dd4a663b31368722f6cbbd68c7aa6d6a2f9174bJpg,
            D95a05416032ad0230e68f2ff9ae7158cc22a4b5Jpg,
            _403f21b09b5ac9711d6029f1b616ac4bff4e2d5bJpg,
            De8c10a358da1921713a29c9c4a0128b388f2dc9Jpg,
            _0fbf12a2a59313fb10054a111bc383b09bbb7944Jpg,
            _8fcb08375de48178e73c2fcf6061c25cfd641fadJpg,
            _92a305e37f5bc8f686ca0875bf2d0106e08364beJpg,
            _9e8d374aa0e75e85390d577fe69c93d2bb27bc48Jpg
        }
    }
    export interface Quality {
        bitrate?: number;
        framerate?: number;
        label?: string;
    }
    export interface Schedule {
        createdAt?: Date;
        date?: string;
        description?: string;
        full?: boolean;
        id?: number;
        intro?: any;
        items?: Array<Item>;
        thumbnail?: ScheduleThumbnail;
        updatedAt?: Date;
    }
    export interface ScheduleThumbnail {
        collection?: ScheduleThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<IndigoVariation>;
    }
    export namespace ScheduleThumbnail {
        enum CollectionEnum {
            Thumbnail
        }
    }
    export interface SchedulesGetRequest {
        data?: Array<Datum18>;
        success?: boolean;
    }
    export interface SchedulesUpcomingGetRequest {
        data?: Array<any>;
        success?: boolean;
    }
    export interface SearchGetRequest {
        counts?: Counts;
        data?: Array<Datum7>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface ServiceDefinition {
        color?: ServiceDefinition.ColorEnum;
        title?: ServiceDefinition.TitleEnum;
    }
    export namespace ServiceDefinition {
        enum ColorEnum {
            Blue,
            Purple,
            Orange,
            Pink,
            Red
        }
        enum TitleEnum {
            Twitter,
            Twitch,
            Instagram,
            TikTok,
            YouTube
        }
    }
    export interface ServiceDefinition1 {
        color?: string;
        title?: string;
    }
    export interface SettingsAssetsBody {
    }
    export interface SocialAccount {
        createdAt?: Date;
        externalUrl?: string;
        id?: number;
        name?: string;
        service?: string;
        serviceDefinition?: ServiceDefinition1;
        socialId?: string;
        updatedAt?: Date;
        username?: string;
    }
    export interface SocialAccount1 {
        createdAt?: Date;
        externalUrl?: string;
        id?: number;
        name?: SocialAccount1.NameEnum;
        service?: SocialAccount1.ServiceEnum;
        serviceDefinition?: ServiceDefinition;
        socialId?: string;
        updatedAt?: Date;
        username?: SocialAccount1.UsernameEnum;
    }
    export namespace SocialAccount1 {
        enum NameEnum {
            Blu,
            UserNameLP,
            UserName
        }
        enum ServiceEnum {
            Discord,
            Twitch
        }
        enum UsernameEnum {
            Blu4340,
            UserNameLP,
            UserName0
        }
    }
    export interface Sources {
        dash?: Dash;
        hls?: HLS;
        mp4?: any;
    }
    export interface Status {
        colorBg?: string;
        colorText?: string;
        createdAt?: Date;
        isClosed?: boolean;
        name?: string;
        reason?: any;
        title?: string;
        updatedAt?: Date;
    }
    export interface StickyVariation {
        file?: StickyVariation.FileEnum;
        height?: number;
        url?: string;
    }
    export namespace StickyVariation {
        enum FileEnum {
            A37f22cc1c294615315453d10420d384a037b9a8Jpg,
            _3480e67586d0daabc165d448844de7e67ec04b91Jpg,
            _45c7f7651f41747982aae27026f76a5b07708862Jpg,
            B221874d544a4ebb588442178d337cca705e1158Jpg,
            Dbc76769b2f9c0226224e1f315393c9516b5cfb5Jpg,
            _539e3fa2e06fc6ffcc7cdcd71884fc027b844217Jpg,
            _0cedb2ab18cce454668b951348f4b774cbfd6cfeJpg,
            _3bfc902e4b23fe5e63d6aedd1c40ebd6f75b4622Jpg,
            _3c86a022ef10f9fbb71ea9c8c23b9a185227675cJpg,
            _252de33ddbaa5d4b526a065bf0326ad8194ca35aJpg,
            _2273ded24ce70bdae4f9305ee6d2599f7abd34c8Jpg,
            E5ecea3160a7185fab907bd040c4e150d19ef972Jpg,
            Abbe986319a2292c1b2e2b3add96244088183007Jpg,
            _14321df522fc69d36f9112ddc531338415ab51f1Jpg,
            _1e0c8cec5d89c4e5558a8e57e9404b2c12064facJpg
        }
    }
    export interface Subject {
        description?: any;
        followingsCount?: any;
        id?: number;
        slug?: string;
        title?: string;
        urlSlug?: string;
        videosCount?: number;
    }
    export interface Subject1 {
        commentsCount?: any;
        description?: any;
        featured?: boolean;
        id?: number;
        likesCount?: any;
        preferences?: SubjectPreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: string;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
    export interface SubjectPreferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
    export interface SubscriptionsDiscountsGetRequest {
        data?: Array<any>;
        success?: boolean;
    }
    export interface SubscriptionsProductsGetRequest {
        data?: Array<Datum12>;
        success?: boolean;
    }
    export interface SupportAddOn {
        id?: string;
        max?: number;
        min?: number;
        title?: string;
        titleLong?: string;
    }
    export interface SupportPerk {
        text?: string;
        urls?: Array<URL>;
    }
    export interface TagsGetRequest {
        data?: Array<Datum8>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface TentacledVariation {
        file?: string;
        height?: number;
        url?: string;
    }
    export interface Thumbnail {
        collection?: Thumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: string;
        variations?: Array<Variation1>;
    }
    export namespace Thumbnail {
        enum CollectionEnum {
            Thumbnail
        }
    }
    export interface To {
        name?: string;
        path?: string;
    }
    export interface Token {
        clientId?: number;
        createdAt?: Date;
        expiresAt?: Date;
        id?: string;
        ip?: any;
        lastSeen?: any;
        name?: any;
        revoked?: boolean;
        scopes?: Array<any>;
        tfaVerifiedAt?: any;
        ua?: any;
        uaBrowser?: any;
        uaDevice?: any;
        uaOs?: any;
        updatedAt?: Date;
        user?: User;
        userId?: number;
    }
    export interface TopUser {
        avatar?: Avatar;
        banner?: any;
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: AuthorPreferences;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
    export interface Track {
        fullTitle?: string;
        id?: number;
        main?: boolean;
        pluralizedTitle?: string;
        qualities?: Array<Quality>;
        sources?: Sources;
        title?: any;
    }
    export interface Traits {
        c?: number;
        h?: number;
        v?: number;
    }
    export interface TrendingVideo {
        channels?: Array<Channel>;
        commentsCount?: any;
        description?: any;
        duration?: number;
        durationPretty?: TrendingVideo.DurationPrettyEnum;
        featured?: boolean;
        id?: number;
        likesCount?: any;
        perspectives?: Array<TrendingVideoPerspective>;
        preferences?: LatestArticlePreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: TrendingVideo.SlugEnum;
        thumbnail?: TrendingVideoThumbnail;
        title?: TrendingVideo.TitleEnum;
        url?: TrendingVideo.UrlEnum;
        urlSlug?: TrendingVideo.UrlSlugEnum;
    }
    export namespace TrendingVideo {
        enum DurationPrettyEnum {
            _3217,
            _4922,
            _4723,
            _3832,
            _2334
        }
        enum SlugEnum {
            DaWurdeJaKeinerRunterfallenOderTtt,
            IchMussHierRausPerfectHeist2,
            TrackmaniaMinecraft,
            ValvesHypeSpielDeadlock,
            GuessTheGame3gg3Special
        }
        enum TitleEnum {
            DaWrdeJaKeinerRUNTERFALLENOderTTT,
            ICHMUSSRAUSPerfectHeist2,
            BESSERWIRDSNICHTMEHRTrackmaniaXMinecraft,
            VALVESHYPESPIELDeadlock,
            GuessTheGame3gg3SPECIAL
        }
        enum UrlEnum {
            _79620DaWurdeJaKeinerRunterfallenOderTtt,
            _79622IchMussHierRausPerfectHeist2,
            _79618TrackmaniaMinecraft,
            _79632ValvesHypeSpielDeadlock,
            _79636GuessTheGame3gg3Special
        }
        enum UrlSlugEnum {
            _79620DaWurdeJaKeinerRunterfallenOderTtt,
            _79622IchMussHierRausPerfectHeist2,
            _79618TrackmaniaMinecraft,
            _79632ValvesHypeSpielDeadlock,
            _79636GuessTheGame3gg3Special
        }
    }
    export interface TrendingVideoPerspective {
        id?: number;
        main?: boolean;
        title?: string;
        titlePluralized?: string;
    }
    export interface TrendingVideoThumbnail {
        collection?: TrendingVideoThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<IndecentVariation>;
    }
    export namespace TrendingVideoThumbnail {
        enum CollectionEnum {
            Thumbnail
        }
    }
    export interface Type {
        channels?: Channels;
        description?: Type.DescriptionEnum;
        key?: Type.KeyEnum;
    }
    export namespace Type {
        enum DescriptionEnum {
            TglicheVideozusammenfassung,
            WchentlicheVideozusammenfassung,
            AntwortAufKommentar,
            KommentarIstBeliebt,
            ErwhnungInEinemKommentar,
            NeueArtikel
        }
        enum KeyEnum {
            VIDEOSUMMARYDAILY,
            VIDEOSUMMARYWEEKLY,
            COMMENTREPLIED,
            COMMENTISPOPULAR,
            COMMENTMENTIONED,
            NEWNEWSARTICLES
        }
    }
    export interface Type1 {
        channels?: Channels;
        description?: string;
        key?: string;
    }
    export interface TypeDefinition {
        title?: TypeDefinition.TitleEnum;
    }
    export namespace TypeDefinition {
        enum TitleEnum {
            Video
        }
    }
    export interface TypeDefinition1 {
        title?: string;
    }
    export interface URL {
        href?: string;
        replace?: string;
        search?: string;
    }
    export interface User {
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: Preferences1;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
    export interface User2 {
        avatar?: Avatar1;
        banner?: any;
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: UserPreferences;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
    export interface User3 {
        avatar?: Avatar1;
        banner?: any;
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        email?: string;
        id?: number;
        name?: string;
        namePossessive?: string;
        notificationsCount?: number;
        preferences?: Preferences1;
        publicProfile?: boolean;
        publicSocialAccounts?: Array<any>;
        reacceptTerms?: boolean;
        readNotificationsCount?: number;
        reputation?: number;
        reputationPretty?: string;
        socialAccounts?: Array<SocialAccount>;
        taxPercentage?: number;
        team?: boolean;
        twoFactorEnabled?: boolean;
        unreadNotificationsCount?: number;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
        verified?: boolean;
    }
    export interface User4 {
        avatar?: any;
        banner?: any;
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        giftedSubscriptionsCount?: number;
        id?: number;
        name?: string;
        namePossessive?: string;
        preferences?: Preferences1;
        publicProfile?: boolean;
        reputation?: number;
        reputationPretty?: string;
        subscribed?: boolean;
        subscriptionStreak?: number;
        subscriptionSupporter?: boolean;
        team?: boolean;
        updatedAt?: Date;
        urlSlug?: string;
        username?: string;
    }
    export interface User5 {
        avatar?: any;
        banner?: any;
        blocked?: boolean;
        createdAt?: Date;
        description?: any;
        email?: User5.EmailEnum;
        id?: number;
        name?: User5.NameEnum;
        namePossessive?: User5.NamePossessiveEnum;
        notificationsCount?: number;
        preferences?: Preferences1;
        publicProfile?: boolean;
        publicSocialAccounts?: Array<any>;
        reacceptTerms?: boolean;
        readNotificationsCount?: number;
        recoveryCodes?: number;
        recoveryCodesUsed?: number;
        reputation?: number;
        reputationPretty?: string;
        socialAccounts?: Array<SocialAccount1>;
        taxPercentage?: number;
        team?: boolean;
        twoFactorEnabled?: boolean;
        unreadNotificationsCount?: number;
        updatedAt?: Date;
        urlSlug?: User5.UrlSlugEnum;
        username?: User5.UsernameEnum;
        verified?: boolean;
    }
    export namespace User5 {
        enum EmailEnum {
            EmailexampleCom
        }
        enum NameEnum {
            UserName,
            DisplayName
        }
        enum NamePossessiveEnum {
            UserNames,
            DisplayNames
        }
        enum UrlSlugEnum {
            UserIdUserName
        }
        enum UsernameEnum {
            UserName
        }
    }
    export interface UserPreferences {
        publicProfile?: boolean;
        subscriptionEnableIdentification?: boolean;
    }
    export interface UsersIDAchievementsGetRequest {
        data?: Array<Datum4>;
        success?: boolean;
    }
    export interface UsersIDDislikesGetRequest {
        data?: Array<Datum20>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface UsersIDDislikesPostRequest {
        id?: number;
        type?: string;
    }
    export interface UsersIDDislikesPostRequest1 {
        dislike?: Dislike;
        success?: boolean;
    }
    export interface UsersIDFollowingsGetRequest {
        data?: Array<any>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface UsersIDGetRequest {
        success?: boolean;
        user?: User3;
    }
    export interface UsersIDInvoicesGetRequest {
        data?: Array<Datum19>;
        success?: boolean;
    }
    export interface UsersIDLikesGetRequest {
        data?: Array<Datum23>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface UsersIDLikesPostRequest {
        id?: number;
        type?: string;
    }
    export interface UsersIDLikesPostRequest1 {
        like?: Like;
        success?: boolean;
    }
    export interface UsersIDNotificationsGetRequest {
        data?: Array<Datum11>;
        success?: boolean;
    }
    export interface UsersIDNotificationsUUIDPatchRequest {
        read?: boolean;
    }
    export interface UsersIDNotificationsUUIDPatchRequest1 {
        notification?: Notification;
        success?: boolean;
    }
    export interface UsersIDSettingsAssetsPostRequest {
        success?: boolean;
    }
    export interface UsersIDSettingsDataRequestPostRequest {
        success?: boolean;
    }
    export interface UsersIDSettingsNotificationsGetRequest {
        success?: boolean;
        types?: Array<Type1>;
    }
    export interface UsersIDSettingsNotificationsPatchRequest {
        channels?: Channels;
        key?: string;
    }
    export interface UsersIDSettingsNotificationsPatchRequest1 {
        success?: boolean;
        types?: Array<Type>;
    }
    export interface UsersIDSettingsPasswordPatchRequest {
        currentPassword?: string;
        password?: string;
        passwordConfirmation?: string;
    }
    export interface UsersIDSettingsPasswordPatchRequest1 {
        success?: boolean;
    }
    export interface UsersIDSettingsPasswordPatchRequest2 {
        errors?: Errors;
        message?: string;
        success?: boolean;
    }
    export interface UsersIDSettingsPreferencesPatchRequest {
        commentsOrderOwnFirst?: boolean;
        commentsOrderPopular?: boolean;
        country?: string;
        enableDarkmode?: boolean;
        enableSpoilers?: boolean;
        publicProfile?: boolean;
        scrollTopRouteChange?: boolean;
        showInPresence?: boolean;
        subscribeNewsletter?: boolean;
        videosAutocontinue?: boolean;
        videosAutoplay?: boolean;
        videosPlayerFloating?: boolean;
    }
    export interface UsersIDSettingsPreferencesPatchRequest1 {
        preferences?: Preferences1;
        success?: boolean;
    }
    export interface UsersIDSettingsProfilePatchRequest {
        email?: string;
        name?: string;
    }
    export interface UsersIDSettingsProfilePatchRequest1 {
        preferences?: Preferences1;
        success?: boolean;
    }
    export interface UsersIDSettingsTwofactorResetPostRequest {
        otp?: string;
    }
    export interface UsersIDSettingsTwofactorResetPostRequest1 {
        success?: boolean;
    }
    export interface UsersIDSettingsTwofactorSetupGetRequest {
        data?: Data3;
        success?: boolean;
    }
    export interface UsersIDSettingsTwofactorSetupPostRequest {
        otp?: string;
        secret?: string;
    }
    export interface UsersIDSettingsTwofactorSetupPostRequest1 {
        recoveryCodes?: Array<string>;
        success?: boolean;
    }
    export interface UsersIDSubscriptionsGetRequest {
        data?: Array<Datum6>;
        success?: boolean;
    }
    export interface UsersIDTokensGetRequest {
        data?: Array<Datum>;
        success?: boolean;
    }
    export interface UsersIDTokensTokenDeleteRequest {
        success?: boolean;
        token?: Token;
    }
    export interface UsersIDViewsGetRequest {
        data?: Array<Datum17>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface UsersMeGetRequest {
        success?: boolean;
        user?: User5;
    }
    export interface UsersObject20ObjectTokensDeleteRequest {
        message?: string;
    }
    export interface UtilityAutobahnPostRequest {
        events?: Array<Event>;
        traits?: Traits;
    }
    export interface UtilityAutobahnPostRequest1 {
        success?: boolean;
    }
    export interface UtilityCommentsGetRequest {
        data?: Array<Datum16>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface UtilityCommentsIDReportsPostRequest {
        success?: boolean;
    }
    export interface UtilityCommentsPostRequest {
        id?: number;
        reply?: number;
        text?: string;
        timestamp?: number;
        type?: string;
    }
    export interface UtilityCommentsPostRequest1 {
        comment?: Comment;
        success?: boolean;
    }
    export interface UtilityFollowsDeleteRequest {
        follow?: any;
        success?: boolean;
    }
    export interface UtilityFollowsGetRequest {
        data?: Array<any>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface UtilityFollowsPostRequest {
        id?: number;
        type?: string;
    }
    export interface UtilityFollowsPostRequest1 {
        follow?: Follow;
        success?: boolean;
    }
    export interface UtilityHighlightsPostRequest {
        position?: number;
        video?: number;
    }
    export interface UtilityHighlightsPostRequest1 {
        success?: boolean;
    }
    export interface UtilityPlayerGetRequest {
        advertising?: Array<Advertising>;
        options?: Options2;
        success?: boolean;
    }
    export interface Variation {
        file?: string;
        height?: number;
        url?: string;
    }
    export interface Variation1 {
        file?: string;
        height?: number;
        url?: string;
    }
    export interface Video {
        commentsCount?: any;
        description?: any;
        duration?: number;
        durationPretty?: string;
        featured?: boolean;
        id?: number;
        likesCount?: any;
        perspectives?: Array<LatestVideoPerspective>;
        preferences?: LatestArticlePreferences;
        publishDate?: Date;
        remote?: boolean;
        remoteUrl?: any;
        shortUrl?: string;
        slug?: string;
        title?: string;
        url?: string;
        urlSlug?: string;
    }
    export interface VideoPreferences {
        clips?: boolean;
        comments?: boolean;
        likes?: boolean;
        shares?: boolean;
        tags?: boolean;
    }
    export interface VideoThumbnail {
        collection?: VideoThumbnail.CollectionEnum;
        id?: number;
        remoteUrl?: any;
        variations?: Array<Variation>;
    }
    export namespace VideoThumbnail {
        enum CollectionEnum {
            Thumbnail
        }
    }
    export interface VideosAuthorsGetRequest {
        data?: Array<Datum9>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface VideosChannels12GetRequest {
        channel?: Channel;
        success?: boolean;
    }
    export interface VideosChannelsGetRequest {
        data?: Array<Datum2>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface VideosClipsGetRequest {
        data?: Array<Datum22>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface VideosClipsPostRequest {
        perspective?: any;
        position?: number;
        video?: number;
    }
    export interface VideosClipsPostRequest1 {
        clip?: Clip;
        success?: boolean;
    }
    export interface VideosGetRequest {
        data?: Array<Datum5>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface VideosIDGetRequest {
        success?: boolean;
        video?: Video;
    }
    export interface VideosIDNextGetRequest {
        success?: boolean;
        video?: Video;
    }
    export interface VideosPlaylistsGetRequest {
        data?: Array<Datum21>;
        links?: Links;
        meta?: Meta;
        success?: boolean;
    }
    export interface VideosPlaylistsIDGetRequest {
        playlist?: Playlist;
        success?: boolean;
    }
    export interface VideosPlaylistsIDPostRequest {
        video?: number;
    }
    export interface VideosPlaylistsIDPostRequest1 {
        playlist?: Playlist;
        success?: boolean;
    }
    export interface Visual {
        aspectRatio?: string;
        brand?: Brand;
        fluid?: boolean;
        responsive?: boolean;
        thumbnail?: string;
    }
    export const CommunityApiFetchParamCreator: (configuration?: Configuration) => {
        getCommunitySuggestions(page?: string, limit?: string, order?: string, statuses?: string, options?: any): FetchArgs;
    };
    export const CommunityApiFp: (configuration?: Configuration) => {
        getCommunitySuggestions(page?: string, limit?: string, order?: string, statuses?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CommunitySuggestionsGetRequest>;
    };
    export const CommunityApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getCommunitySuggestions(page?: string, limit?: string, order?: string, statuses?: string, options?: any): Promise<CommunitySuggestionsGetRequest>;
    };
    export class CommunityApi extends BaseAPI {
        getCommunitySuggestions(page?: string, limit?: string, order?: string, statuses?: string, options?: any): Promise<CommunitySuggestionsGetRequest>;
    }
    export const ConfigApiFetchParamCreator: (configuration?: Configuration) => {
        getConfigAssetVersion(options?: any): FetchArgs;
        getConfigEnumerationsCountries(options?: any): FetchArgs;
        getXOriginIntegrityHeader(options?: any): FetchArgs;
    };
    export const ConfigApiFp: (configuration?: Configuration) => {
        getConfigAssetVersion(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ConfigAssetVersionGetRequest>;
        getConfigEnumerationsCountries(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ConfigEnumerationsCountriesGetRequest>;
        getXOriginIntegrityHeader(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ConfigOriginIntegrityHeader>;
    };
    export const ConfigApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getConfigAssetVersion(options?: any): Promise<ConfigAssetVersionGetRequest>;
        getConfigEnumerationsCountries(options?: any): Promise<ConfigEnumerationsCountriesGetRequest>;
        getXOriginIntegrityHeader(options?: any): Promise<ConfigOriginIntegrityHeader>;
    };
    export class ConfigApi extends BaseAPI {
        getConfigAssetVersion(options?: any): Promise<ConfigAssetVersionGetRequest>;
        getConfigEnumerationsCountries(options?: any): Promise<ConfigEnumerationsCountriesGetRequest>;
        getXOriginIntegrityHeader(options?: any): Promise<ConfigOriginIntegrityHeader>;
    }
    export const HeadlinesApiFetchParamCreator: (configuration?: Configuration) => {
        getHeadlines(options?: any): FetchArgs;
    };
    export const HeadlinesApiFp: (configuration?: Configuration) => {
        getHeadlines(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<HeadlinesGetRequest>;
    };
    export const HeadlinesApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getHeadlines(options?: any): Promise<HeadlinesGetRequest>;
    };
    export class HeadlinesApi extends BaseAPI {
        getHeadlines(options?: any): Promise<HeadlinesGetRequest>;
    }
    export const LivestreamsApiFetchParamCreator: (configuration?: Configuration) => {
        getLivestreams(options?: any): FetchArgs;
    };
    export const LivestreamsApiFp: (configuration?: Configuration) => {
        getLivestreams(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<LivestreamsGetRequest>;
    };
    export const LivestreamsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getLivestreams(options?: any): Promise<LivestreamsGetRequest>;
    };
    export class LivestreamsApi extends BaseAPI {
        getLivestreams(options?: any): Promise<LivestreamsGetRequest>;
    }
    export const ModulesApiFetchParamCreator: (configuration?: Configuration) => {
        getModules(options?: any): FetchArgs;
    };
    export const ModulesApiFp: (configuration?: Configuration) => {
        getModules(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ModulesGetRequest>;
    };
    export const ModulesApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getModules(options?: any): Promise<ModulesGetRequest>;
    };
    export class ModulesApi extends BaseAPI {
        getModules(options?: any): Promise<ModulesGetRequest>;
    }
    export const NewsApiFetchParamCreator: (configuration?: Configuration) => {
        getNewsArticles(limit?: string, order?: string, categories?: string, page?: string, category?: string, options?: any): FetchArgs;
        getNewsArticlesById(id: number, options?: any): FetchArgs;
        getNewsCategoriesId(id: number, options?: any): FetchArgs;
    };
    export const NewsApiFp: (configuration?: Configuration) => {
        getNewsArticles(limit?: string, order?: string, categories?: string, page?: string, category?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<NewsArticlesGetRequest>;
        getNewsArticlesById(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<NewsArticlesIDGetRequest>;
        getNewsCategoriesId(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<NewsCategories34GetRequest>;
    };
    export const NewsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getNewsArticles(limit?: string, order?: string, categories?: string, page?: string, category?: string, options?: any): Promise<NewsArticlesGetRequest>;
        getNewsArticlesById(id: number, options?: any): Promise<NewsArticlesIDGetRequest>;
        getNewsCategoriesId(id: number, options?: any): Promise<NewsCategories34GetRequest>;
    };
    export class NewsApi extends BaseAPI {
        getNewsArticles(limit?: string, order?: string, categories?: string, page?: string, category?: string, options?: any): Promise<NewsArticlesGetRequest>;
        getNewsArticlesById(id: number, options?: any): Promise<NewsArticlesIDGetRequest>;
        getNewsCategoriesId(id: number, options?: any): Promise<NewsCategories34GetRequest>;
    }
    export const PodcastApiFetchParamCreator: (configuration?: Configuration) => {
        getPodcastCategories(options?: any): FetchArgs;
        getPodcastEpisodes(page?: string, limit?: string, options?: any): FetchArgs;
        getPodcastEpisodesById(id: number, options?: any): FetchArgs;
    };
    export const PodcastApiFp: (configuration?: Configuration) => {
        getPodcastCategories(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PodcastCategoriesGetRequest>;
        getPodcastEpisodes(page?: string, limit?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PodcastEpisodesGetRequest>;
        getPodcastEpisodesById(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PodcastEpisodesIDGetRequest>;
    };
    export const PodcastApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getPodcastCategories(options?: any): Promise<PodcastCategoriesGetRequest>;
        getPodcastEpisodes(page?: string, limit?: string, options?: any): Promise<PodcastEpisodesGetRequest>;
        getPodcastEpisodesById(id: number, options?: any): Promise<PodcastEpisodesIDGetRequest>;
    };
    export class PodcastApi extends BaseAPI {
        getPodcastCategories(options?: any): Promise<PodcastCategoriesGetRequest>;
        getPodcastEpisodes(page?: string, limit?: string, options?: any): Promise<PodcastEpisodesGetRequest>;
        getPodcastEpisodesById(id: number, options?: any): Promise<PodcastEpisodesIDGetRequest>;
    }
    export const PollsApiFetchParamCreator: (configuration?: Configuration) => {
        getPolls(id?: string, type?: string, options?: any): FetchArgs;
        getPollsVotes(options?: any): FetchArgs;
    };
    export const PollsApiFp: (configuration?: Configuration) => {
        getPolls(id?: string, type?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PollsGetRequest>;
        getPollsVotes(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PollsVotesGetRequest>;
    };
    export const PollsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getPolls(id?: string, type?: string, options?: any): Promise<PollsGetRequest>;
        getPollsVotes(options?: any): Promise<PollsVotesGetRequest>;
    };
    export class PollsApi extends BaseAPI {
        getPolls(id?: string, type?: string, options?: any): Promise<PollsGetRequest>;
        getPollsVotes(options?: any): Promise<PollsVotesGetRequest>;
    }
    export const PromotionsApiFetchParamCreator: (configuration?: Configuration) => {
        getPromotions(ab?: string, options?: any): FetchArgs;
    };
    export const PromotionsApiFp: (configuration?: Configuration) => {
        getPromotions(ab?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PromotionsGetRequest>;
    };
    export const PromotionsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getPromotions(ab?: string, options?: any): Promise<PromotionsGetRequest>;
    };
    export class PromotionsApi extends BaseAPI {
        getPromotions(ab?: string, options?: any): Promise<PromotionsGetRequest>;
    }
    export const SchedulesApiFetchParamCreator: (configuration?: Configuration) => {
        getSchedules(options?: any): FetchArgs;
        getSchedulesUpcoming(options?: any): FetchArgs;
    };
    export const SchedulesApiFp: (configuration?: Configuration) => {
        getSchedules(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SchedulesGetRequest>;
        getSchedulesUpcoming(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SchedulesUpcomingGetRequest>;
    };
    export const SchedulesApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getSchedules(options?: any): Promise<SchedulesGetRequest>;
        getSchedulesUpcoming(options?: any): Promise<SchedulesUpcomingGetRequest>;
    };
    export class SchedulesApi extends BaseAPI {
        getSchedules(options?: any): Promise<SchedulesGetRequest>;
        getSchedulesUpcoming(options?: any): Promise<SchedulesUpcomingGetRequest>;
    }
    export const SearchApiFetchParamCreator: (configuration?: Configuration) => {
        getSearch(query?: string, part?: string, page?: string, priority?: string, options?: any): FetchArgs;
    };
    export const SearchApiFp: (configuration?: Configuration) => {
        getSearch(query?: string, part?: string, page?: string, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SearchGetRequest>;
    };
    export const SearchApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getSearch(query?: string, part?: string, page?: string, priority?: string, options?: any): Promise<SearchGetRequest>;
    };
    export class SearchApi extends BaseAPI {
        getSearch(query?: string, part?: string, page?: string, priority?: string, options?: any): Promise<SearchGetRequest>;
    }
    export const SubscriptionsApiFetchParamCreator: (configuration?: Configuration) => {
        getSubscriptionsDiscounts(options?: any): FetchArgs;
        getSubscriptionsProducts(options?: any): FetchArgs;
    };
    export const SubscriptionsApiFp: (configuration?: Configuration) => {
        getSubscriptionsDiscounts(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SubscriptionsDiscountsGetRequest>;
        getSubscriptionsProducts(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SubscriptionsProductsGetRequest>;
    };
    export const SubscriptionsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getSubscriptionsDiscounts(options?: any): Promise<SubscriptionsDiscountsGetRequest>;
        getSubscriptionsProducts(options?: any): Promise<SubscriptionsProductsGetRequest>;
    };
    export class SubscriptionsApi extends BaseAPI {
        getSubscriptionsDiscounts(options?: any): Promise<SubscriptionsDiscountsGetRequest>;
        getSubscriptionsProducts(options?: any): Promise<SubscriptionsProductsGetRequest>;
    }
    export const TagsApiFetchParamCreator: (configuration?: Configuration) => {
        getTags(id?: string, type?: string, options?: any): FetchArgs;
    };
    export const TagsApiFp: (configuration?: Configuration) => {
        getTags(id?: string, type?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TagsGetRequest>;
    };
    export const TagsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getTags(id?: string, type?: string, options?: any): Promise<TagsGetRequest>;
    };
    export class TagsApi extends BaseAPI {
        getTags(id?: string, type?: string, options?: any): Promise<TagsGetRequest>;
    }
    export const UsersApiFetchParamCreator: (configuration?: Configuration) => {
        deleteUsersByIdTokensId(id: string, token: number, priority?: string, options?: any): FetchArgs;
        deleteUsersObject20ObjectTokens(id: number, priority?: string, options?: any): FetchArgs;
        getUsersById(id: number, options?: any): FetchArgs;
        getUsersByIdAchievements(id: number, options?: any): FetchArgs;
        getUsersByIdDislikes(id: number, options?: any): FetchArgs;
        getUsersByIdFollowings(id: number, options?: any): FetchArgs;
        getUsersByIdInvoices(id: number, options?: any): FetchArgs;
        getUsersByIdLikes(id: number, options?: any): FetchArgs;
        getUsersByIdNotifications(id: number, options?: any): FetchArgs;
        getUsersByIdSettingsNotifications(id: number, options?: any): FetchArgs;
        getUsersByIdSettingsTwofactorSetup(id: number, priority?: string, options?: any): FetchArgs;
        getUsersByIdSubscriptions(id: number, include?: string, options?: any): FetchArgs;
        getUsersByIdTokens(id: number, options?: any): FetchArgs;
        getUsersByIdViews(id: number, options?: any): FetchArgs;
        getUsersMe(options?: any): FetchArgs;
        patchUsersByIdNotificationsByUuid(body: UsersIDNotificationsUUIDPatchRequest, id: number, uuid: string, priority?: string, options?: any): FetchArgs;
        patchUsersByIdSettingsNotifications(body: UsersIDSettingsNotificationsPatchRequest, id: number, priority?: string, options?: any): FetchArgs;
        patchUsersByIdSettingsPassword(body: UsersIDSettingsPasswordPatchRequest, id: number, priority?: string, options?: any): FetchArgs;
        patchUsersByIdSettingsPreferences(body: UsersIDSettingsPreferencesPatchRequest, id: number, priority?: string, options?: any): FetchArgs;
        patchUsersByIdSettingsProfile(body: UsersIDSettingsProfilePatchRequest, id: number, priority?: string, options?: any): FetchArgs;
        postUsersByIdDislikes(body: UsersIDDislikesPostRequest, id: number, priority?: string, options?: any): FetchArgs;
        postUsersByIdLikes(body: UsersIDLikesPostRequest, id: number, priority?: string, options?: any): FetchArgs;
        postUsersByIdSettingsAssets(id: number, priority?: string, options?: any): FetchArgs;
        postUsersByIdSettingsDataRequest(id: number, priority?: string, options?: any): FetchArgs;
        postUsersByIdSettingsTwofactorReset(body: UsersIDSettingsTwofactorResetPostRequest, id: number, priority?: string, options?: any): FetchArgs;
        postUsersByIdSettingsTwofactorSetup(body: UsersIDSettingsTwofactorSetupPostRequest, id: number, priority?: string, options?: any): FetchArgs;
    };
    export const UsersApiFp: (configuration?: Configuration) => {
        deleteUsersByIdTokensId(id: string, token: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDTokensTokenDeleteRequest>;
        deleteUsersObject20ObjectTokens(id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
        getUsersById(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDGetRequest>;
        getUsersByIdAchievements(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDAchievementsGetRequest>;
        getUsersByIdDislikes(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDDislikesGetRequest>;
        getUsersByIdFollowings(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDFollowingsGetRequest>;
        getUsersByIdInvoices(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDInvoicesGetRequest>;
        getUsersByIdLikes(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDLikesGetRequest>;
        getUsersByIdNotifications(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDNotificationsGetRequest>;
        getUsersByIdSettingsNotifications(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSettingsNotificationsGetRequest>;
        getUsersByIdSettingsTwofactorSetup(id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSettingsTwofactorSetupGetRequest>;
        getUsersByIdSubscriptions(id: number, include?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSubscriptionsGetRequest>;
        getUsersByIdTokens(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDTokensGetRequest>;
        getUsersByIdViews(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDViewsGetRequest>;
        getUsersMe(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersMeGetRequest>;
        patchUsersByIdNotificationsByUuid(body: UsersIDNotificationsUUIDPatchRequest, id: number, uuid: string, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDNotificationsUUIDPatchRequest1>;
        patchUsersByIdSettingsNotifications(body: UsersIDSettingsNotificationsPatchRequest, id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSettingsNotificationsPatchRequest1>;
        patchUsersByIdSettingsPassword(body: UsersIDSettingsPasswordPatchRequest, id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSettingsPasswordPatchRequest1>;
        patchUsersByIdSettingsPreferences(body: UsersIDSettingsPreferencesPatchRequest, id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSettingsPreferencesPatchRequest1>;
        patchUsersByIdSettingsProfile(body: UsersIDSettingsProfilePatchRequest, id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSettingsProfilePatchRequest1>;
        postUsersByIdDislikes(body: UsersIDDislikesPostRequest, id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDDislikesPostRequest1>;
        postUsersByIdLikes(body: UsersIDLikesPostRequest, id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDLikesPostRequest1>;
        postUsersByIdSettingsAssets(id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSettingsAssetsPostRequest>;
        postUsersByIdSettingsDataRequest(id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSettingsDataRequestPostRequest>;
        postUsersByIdSettingsTwofactorReset(body: UsersIDSettingsTwofactorResetPostRequest, id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSettingsTwofactorResetPostRequest1>;
        postUsersByIdSettingsTwofactorSetup(body: UsersIDSettingsTwofactorSetupPostRequest, id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UsersIDSettingsTwofactorSetupPostRequest1>;
    };
    export const UsersApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        deleteUsersByIdTokensId(id: string, token: number, priority?: string, options?: any): Promise<UsersIDTokensTokenDeleteRequest>;
        deleteUsersObject20ObjectTokens(id: number, priority?: string, options?: any): Promise<Response>;
        getUsersById(id: number, options?: any): Promise<UsersIDGetRequest>;
        getUsersByIdAchievements(id: number, options?: any): Promise<UsersIDAchievementsGetRequest>;
        getUsersByIdDislikes(id: number, options?: any): Promise<UsersIDDislikesGetRequest>;
        getUsersByIdFollowings(id: number, options?: any): Promise<UsersIDFollowingsGetRequest>;
        getUsersByIdInvoices(id: number, options?: any): Promise<UsersIDInvoicesGetRequest>;
        getUsersByIdLikes(id: number, options?: any): Promise<UsersIDLikesGetRequest>;
        getUsersByIdNotifications(id: number, options?: any): Promise<UsersIDNotificationsGetRequest>;
        getUsersByIdSettingsNotifications(id: number, options?: any): Promise<UsersIDSettingsNotificationsGetRequest>;
        getUsersByIdSettingsTwofactorSetup(id: number, priority?: string, options?: any): Promise<UsersIDSettingsTwofactorSetupGetRequest>;
        getUsersByIdSubscriptions(id: number, include?: string, options?: any): Promise<UsersIDSubscriptionsGetRequest>;
        getUsersByIdTokens(id: number, options?: any): Promise<UsersIDTokensGetRequest>;
        getUsersByIdViews(id: number, options?: any): Promise<UsersIDViewsGetRequest>;
        getUsersMe(options?: any): Promise<UsersMeGetRequest>;
        patchUsersByIdNotificationsByUuid(body: UsersIDNotificationsUUIDPatchRequest, id: number, uuid: string, priority?: string, options?: any): Promise<UsersIDNotificationsUUIDPatchRequest1>;
        patchUsersByIdSettingsNotifications(body: UsersIDSettingsNotificationsPatchRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsNotificationsPatchRequest1>;
        patchUsersByIdSettingsPassword(body: UsersIDSettingsPasswordPatchRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsPasswordPatchRequest1>;
        patchUsersByIdSettingsPreferences(body: UsersIDSettingsPreferencesPatchRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsPreferencesPatchRequest1>;
        patchUsersByIdSettingsProfile(body: UsersIDSettingsProfilePatchRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsProfilePatchRequest1>;
        postUsersByIdDislikes(body: UsersIDDislikesPostRequest, id: number, priority?: string, options?: any): Promise<UsersIDDislikesPostRequest1>;
        postUsersByIdLikes(body: UsersIDLikesPostRequest, id: number, priority?: string, options?: any): Promise<UsersIDLikesPostRequest1>;
        postUsersByIdSettingsAssets(id: number, priority?: string, options?: any): Promise<UsersIDSettingsAssetsPostRequest>;
        postUsersByIdSettingsDataRequest(id: number, priority?: string, options?: any): Promise<UsersIDSettingsDataRequestPostRequest>;
        postUsersByIdSettingsTwofactorReset(body: UsersIDSettingsTwofactorResetPostRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsTwofactorResetPostRequest1>;
        postUsersByIdSettingsTwofactorSetup(body: UsersIDSettingsTwofactorSetupPostRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsTwofactorSetupPostRequest1>;
    };
    export class UsersApi extends BaseAPI {
        deleteUsersByIdTokensId(id: string, token: number, priority?: string, options?: any): Promise<UsersIDTokensTokenDeleteRequest>;
        deleteUsersObject20ObjectTokens(id: number, priority?: string, options?: any): Promise<Response>;
        getUsersById(id: number, options?: any): Promise<UsersIDGetRequest>;
        getUsersByIdAchievements(id: number, options?: any): Promise<UsersIDAchievementsGetRequest>;
        getUsersByIdDislikes(id: number, options?: any): Promise<UsersIDDislikesGetRequest>;
        getUsersByIdFollowings(id: number, options?: any): Promise<UsersIDFollowingsGetRequest>;
        getUsersByIdInvoices(id: number, options?: any): Promise<UsersIDInvoicesGetRequest>;
        getUsersByIdLikes(id: number, options?: any): Promise<UsersIDLikesGetRequest>;
        getUsersByIdNotifications(id: number, options?: any): Promise<UsersIDNotificationsGetRequest>;
        getUsersByIdSettingsNotifications(id: number, options?: any): Promise<UsersIDSettingsNotificationsGetRequest>;
        getUsersByIdSettingsTwofactorSetup(id: number, priority?: string, options?: any): Promise<UsersIDSettingsTwofactorSetupGetRequest>;
        getUsersByIdSubscriptions(id: number, include?: string, options?: any): Promise<UsersIDSubscriptionsGetRequest>;
        getUsersByIdTokens(id: number, options?: any): Promise<UsersIDTokensGetRequest>;
        getUsersByIdViews(id: number, options?: any): Promise<UsersIDViewsGetRequest>;
        getUsersMe(options?: any): Promise<UsersMeGetRequest>;
        patchUsersByIdNotificationsByUuid(body: UsersIDNotificationsUUIDPatchRequest, id: number, uuid: string, priority?: string, options?: any): Promise<UsersIDNotificationsUUIDPatchRequest1>;
        patchUsersByIdSettingsNotifications(body: UsersIDSettingsNotificationsPatchRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsNotificationsPatchRequest1>;
        patchUsersByIdSettingsPassword(body: UsersIDSettingsPasswordPatchRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsPasswordPatchRequest1>;
        patchUsersByIdSettingsPreferences(body: UsersIDSettingsPreferencesPatchRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsPreferencesPatchRequest1>;
        patchUsersByIdSettingsProfile(body: UsersIDSettingsProfilePatchRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsProfilePatchRequest1>;
        postUsersByIdDislikes(body: UsersIDDislikesPostRequest, id: number, priority?: string, options?: any): Promise<UsersIDDislikesPostRequest1>;
        postUsersByIdLikes(body: UsersIDLikesPostRequest, id: number, priority?: string, options?: any): Promise<UsersIDLikesPostRequest1>;
        postUsersByIdSettingsAssets(id: number, priority?: string, options?: any): Promise<UsersIDSettingsAssetsPostRequest>;
        postUsersByIdSettingsDataRequest(id: number, priority?: string, options?: any): Promise<UsersIDSettingsDataRequestPostRequest>;
        postUsersByIdSettingsTwofactorReset(body: UsersIDSettingsTwofactorResetPostRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsTwofactorResetPostRequest1>;
        postUsersByIdSettingsTwofactorSetup(body: UsersIDSettingsTwofactorSetupPostRequest, id: number, priority?: string, options?: any): Promise<UsersIDSettingsTwofactorSetupPostRequest1>;
    }
    export const UtilityApiFetchParamCreator: (configuration?: Configuration) => {
        deleteUtilityFollows(type?: string, id?: string, priority?: string, options?: any): FetchArgs;
        getUtilityComments(order?: string, id?: string, type?: string, page?: string, limit?: string, include?: string, orderOwn?: string, u?: string, byUser?: string, options?: any): FetchArgs;
        getUtilityFollows(type?: string, id?: string, options?: any): FetchArgs;
        getUtilityPlayer(video?: string, preset?: string, priority?: string, options?: any): FetchArgs;
        postUtilityAutobahn(body: UtilityAutobahnPostRequest, options?: any): FetchArgs;
        postUtilityComments(body: UtilityCommentsPostRequest, priority?: string, options?: any): FetchArgs;
        postUtilityCommentsByIdReports(id: number, priority?: string, options?: any): FetchArgs;
        postUtilityFollows(body: UtilityFollowsPostRequest, priority?: string, options?: any): FetchArgs;
        postUtilityHighlights(body: UtilityHighlightsPostRequest, priority?: string, options?: any): FetchArgs;
    };
    export const UtilityApiFp: (configuration?: Configuration) => {
        deleteUtilityFollows(type?: string, id?: string, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UtilityFollowsDeleteRequest>;
        getUtilityComments(order?: string, id?: string, type?: string, page?: string, limit?: string, include?: string, orderOwn?: string, u?: string, byUser?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UtilityCommentsGetRequest>;
        getUtilityFollows(type?: string, id?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UtilityFollowsGetRequest>;
        getUtilityPlayer(video?: string, preset?: string, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UtilityPlayerGetRequest>;
        postUtilityAutobahn(body: UtilityAutobahnPostRequest, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UtilityAutobahnPostRequest1>;
        postUtilityComments(body: UtilityCommentsPostRequest, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UtilityCommentsPostRequest1>;
        postUtilityCommentsByIdReports(id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UtilityCommentsIDReportsPostRequest>;
        postUtilityFollows(body: UtilityFollowsPostRequest, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UtilityFollowsPostRequest1>;
        postUtilityHighlights(body: UtilityHighlightsPostRequest, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UtilityHighlightsPostRequest1>;
    };
    export const UtilityApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        deleteUtilityFollows(type?: string, id?: string, priority?: string, options?: any): Promise<UtilityFollowsDeleteRequest>;
        getUtilityComments(order?: string, id?: string, type?: string, page?: string, limit?: string, include?: string, orderOwn?: string, u?: string, byUser?: string, options?: any): Promise<UtilityCommentsGetRequest>;
        getUtilityFollows(type?: string, id?: string, options?: any): Promise<UtilityFollowsGetRequest>;
        getUtilityPlayer(video?: string, preset?: string, priority?: string, options?: any): Promise<UtilityPlayerGetRequest>;
        postUtilityAutobahn(body: UtilityAutobahnPostRequest, options?: any): Promise<UtilityAutobahnPostRequest1>;
        postUtilityComments(body: UtilityCommentsPostRequest, priority?: string, options?: any): Promise<UtilityCommentsPostRequest1>;
        postUtilityCommentsByIdReports(id: number, priority?: string, options?: any): Promise<UtilityCommentsIDReportsPostRequest>;
        postUtilityFollows(body: UtilityFollowsPostRequest, priority?: string, options?: any): Promise<UtilityFollowsPostRequest1>;
        postUtilityHighlights(body: UtilityHighlightsPostRequest, priority?: string, options?: any): Promise<UtilityHighlightsPostRequest1>;
    };
    export class UtilityApi extends BaseAPI {
        deleteUtilityFollows(type?: string, id?: string, priority?: string, options?: any): Promise<UtilityFollowsDeleteRequest>;
        getUtilityComments(order?: string, id?: string, type?: string, page?: string, limit?: string, include?: string, orderOwn?: string, u?: string, byUser?: string, options?: any): Promise<UtilityCommentsGetRequest>;
        getUtilityFollows(type?: string, id?: string, options?: any): Promise<UtilityFollowsGetRequest>;
        getUtilityPlayer(video?: string, preset?: string, priority?: string, options?: any): Promise<UtilityPlayerGetRequest>;
        postUtilityAutobahn(body: UtilityAutobahnPostRequest, options?: any): Promise<UtilityAutobahnPostRequest1>;
        postUtilityComments(body: UtilityCommentsPostRequest, priority?: string, options?: any): Promise<UtilityCommentsPostRequest1>;
        postUtilityCommentsByIdReports(id: number, priority?: string, options?: any): Promise<UtilityCommentsIDReportsPostRequest>;
        postUtilityFollows(body: UtilityFollowsPostRequest, priority?: string, options?: any): Promise<UtilityFollowsPostRequest1>;
        postUtilityHighlights(body: UtilityHighlightsPostRequest, priority?: string, options?: any): Promise<UtilityHighlightsPostRequest1>;
    }
    export const VideosApiFetchParamCreator: (configuration?: Configuration) => {
        getChannelVideoCount(id: number, options?: any): FetchArgs;
        getVideos(limit?: string, order?: string, prioritizeFeatured?: string, page?: string, likedBy?: string, viewedBy?: string, priority?: string, followedBy?: string, playlists?: string, u?: string, channels?: string, playlistVideo?: string, options?: any): FetchArgs;
        getVideosAuthors(options?: any): FetchArgs;
        getVideosById(id: number, include?: string, options?: any): FetchArgs;
        getVideosByIdNext(id: number, playlist?: string, channel?: string, options?: any): FetchArgs;
        getVideosChannels(page?: string, order?: string, options?: any): FetchArgs;
        getVideosClips(video?: string, limit?: string, order?: string, page?: string, options?: any): FetchArgs;
        getVideosPlaylists(user?: string, page?: string, order?: string, limit?: string, options?: any): FetchArgs;
        getVideosPlaylistsById(id: number, options?: any): FetchArgs;
        postVideosClips(body: VideosClipsPostRequest, priority?: string, options?: any): FetchArgs;
        postVideosPlaylistsById(body: VideosPlaylistsIDPostRequest, id: number, priority?: string, options?: any): FetchArgs;
    };
    export const VideosApiFp: (configuration?: Configuration) => {
        getChannelVideoCount(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ChannelVideoCountGetRequest>;
        getVideos(limit?: string, order?: string, prioritizeFeatured?: string, page?: string, likedBy?: string, viewedBy?: string, priority?: string, followedBy?: string, playlists?: string, u?: string, channels?: string, playlistVideo?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VideosGetRequest>;
        getVideosAuthors(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VideosAuthorsGetRequest>;
        getVideosById(id: number, include?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VideosIDGetRequest>;
        getVideosByIdNext(id: number, playlist?: string, channel?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VideosIDNextGetRequest>;
        getVideosChannels(page?: string, order?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VideosChannelsGetRequest>;
        getVideosClips(video?: string, limit?: string, order?: string, page?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VideosClipsGetRequest>;
        getVideosPlaylists(user?: string, page?: string, order?: string, limit?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VideosPlaylistsGetRequest>;
        getVideosPlaylistsById(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VideosPlaylistsIDGetRequest>;
        postVideosClips(body: VideosClipsPostRequest, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VideosClipsPostRequest1>;
        postVideosPlaylistsById(body: VideosPlaylistsIDPostRequest, id: number, priority?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VideosPlaylistsIDPostRequest1>;
    };
    export const VideosApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
        getChannelVideoCount(id: number, options?: any): Promise<ChannelVideoCountGetRequest>;
        getVideos(limit?: string, order?: string, prioritizeFeatured?: string, page?: string, likedBy?: string, viewedBy?: string, priority?: string, followedBy?: string, playlists?: string, u?: string, channels?: string, playlistVideo?: string, options?: any): Promise<VideosGetRequest>;
        getVideosAuthors(options?: any): Promise<VideosAuthorsGetRequest>;
        getVideosById(id: number, include?: string, options?: any): Promise<VideosIDGetRequest>;
        getVideosByIdNext(id: number, playlist?: string, channel?: string, options?: any): Promise<VideosIDNextGetRequest>;
        getVideosChannels(page?: string, order?: string, options?: any): Promise<VideosChannelsGetRequest>;
        getVideosClips(video?: string, limit?: string, order?: string, page?: string, options?: any): Promise<VideosClipsGetRequest>;
        getVideosPlaylists(user?: string, page?: string, order?: string, limit?: string, options?: any): Promise<VideosPlaylistsGetRequest>;
        getVideosPlaylistsById(id: number, options?: any): Promise<VideosPlaylistsIDGetRequest>;
        postVideosClips(body: VideosClipsPostRequest, priority?: string, options?: any): Promise<VideosClipsPostRequest1>;
        postVideosPlaylistsById(body: VideosPlaylistsIDPostRequest, id: number, priority?: string, options?: any): Promise<VideosPlaylistsIDPostRequest1>;
    };
    export class VideosApi extends BaseAPI {
        getChannelVideoCount(id: number, options?: any): Promise<ChannelVideoCountGetRequest>;
        getVideos(limit?: string, order?: string, prioritizeFeatured?: string, page?: string, likedBy?: string, viewedBy?: string, priority?: string, followedBy?: string, playlists?: string, u?: string, channels?: string, playlistVideo?: string, options?: any): Promise<VideosGetRequest>;
        getVideosAuthors(options?: any): Promise<VideosAuthorsGetRequest>;
        getVideosById(id: number, include?: string, options?: any): Promise<VideosIDGetRequest>;
        getVideosByIdNext(id: number, playlist?: string, channel?: string, options?: any): Promise<VideosIDNextGetRequest>;
        getVideosChannels(page?: string, order?: string, options?: any): Promise<VideosChannelsGetRequest>;
        getVideosClips(video?: string, limit?: string, order?: string, page?: string, options?: any): Promise<VideosClipsGetRequest>;
        getVideosPlaylists(user?: string, page?: string, order?: string, limit?: string, options?: any): Promise<VideosPlaylistsGetRequest>;
        getVideosPlaylistsById(id: number, options?: any): Promise<VideosPlaylistsIDGetRequest>;
        postVideosClips(body: VideosClipsPostRequest, priority?: string, options?: any): Promise<VideosClipsPostRequest1>;
        postVideosPlaylistsById(body: VideosPlaylistsIDPostRequest, id: number, priority?: string, options?: any): Promise<VideosPlaylistsIDPostRequest1>;
    }
}
declare module "tmp/pietsmiet.de/typescript-fetch-client-generated/api_test.spec" { }
declare module "tmp/pietsmiet.de/typescript-fetch-client-generated/index" {
    export * from "tmp/pietsmiet.de/typescript-fetch-client-generated/api";
    export * from "tmp/pietsmiet.de/typescript-fetch-client-generated/configuration";
}
declare module "tmp/pietsmiet.de/typescript-fetch-client-generated/app" { }
//# sourceMappingURL=script.d.ts.map