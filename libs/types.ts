import { Post as TPost } from 'contentlayer/generated';

export type Post = TPost;
export type ReducedPost = Omit<Omit<Omit<Post, 'body'>, '_raw'>, '_id'>;
