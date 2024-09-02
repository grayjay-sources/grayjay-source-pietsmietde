/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ChannelsSchema = ChannelsResponse;

export interface ChannelsResponse {
  data: Datum[];
  links: Links;
  meta: Meta;
  success: boolean;
}
export interface Datum {
  id: number;
  slug: string;
  title: string;
  description: null;
  url_slug: string;
  thumbnail: null;
  first_video: FirstVideo;
  videos_count: number;
  followings_count: number;
}
export interface FirstVideo {
  id: number;
  slug: string;
  url_slug: string;
  short_url: string;
  url: string;
  title: string;
  featured: boolean;
  remote: boolean;
  remote_url: null;
  description: null;
  likes_count: null;
  comments_count: null;
  thumbnail: Thumbnail;
  publish_date: string;
  preferences: Preferences;
}
export interface Thumbnail {
  id: number;
  collection: string;
  remote_url: null;
  variations: Variation[];
}
export interface Variation {
  height: number;
  file: string;
  url: string;
}
export interface Preferences {
  comments: boolean;
  likes: boolean;
  tags: boolean;
  shares: boolean;
  clips: boolean;
}
export interface Links {
  first: string;
  last: string;
  prev: null;
  next: null;
}
export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}
export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}