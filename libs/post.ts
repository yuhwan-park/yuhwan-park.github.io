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

export type TOCSection = TOCSubSection & {
  subSections: TOCSubSection[];
};

export type TOCSubSection = {
  slug: string;
  text: string;
};

export const parseToc = (source: string) => {
  return source
    .split('\n')
    .filter((line) => line.match(/(^#{1,3})\s/))
    .reduce<TOCSection[]>((ac, rawHeading) => {
      const nac = [...ac];
      const removeMdx = rawHeading
        .replace(/^##*\s/, '')
        .replace(/[\*,\~]{2,}/g, '')
        .replace(/(?<=\])\((.*?)\)/g, '')
        .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, '');

      const section = {
        slug: removeMdx
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, '')
          .replace(/\s/g, '-'),
        text: removeMdx,
      };

      const isSubTitle = rawHeading.split('#').length - 1 === 3;

      if (ac.length && isSubTitle) {
        nac.at(-1)?.subSections.push(section);
      } else {
        nac.push({ ...section, subSections: [] });
      }

      return nac;
    }, []);
};
