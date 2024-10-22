import { allPosts } from 'contentlayer/generated';
import { Post, ReducedPost } from './types';

const reducePost = ({ body: _, _raw, _id, ...post }: Post): ReducedPost => post;

export const allBlogPosts: Post[] = allPosts
  .filter((post) => !post.draft)
  .map((post) => ({
    ...post,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const reducedAllBlogPosts = allBlogPosts.map(reducePost);
