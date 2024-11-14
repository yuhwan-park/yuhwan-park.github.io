import { allPosts } from 'contentlayer/generated';

import { Post, ReducedPost } from './types';

const reducePost = ({ body: _, _raw, _id, ...post }: Post): ReducedPost => post;

export const allBlogPosts: Post[] = allPosts
  .filter((post) => !post.draft || process.env.NODE_ENV === 'development')
  .map((post) => ({
    ...post,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const reducedAllBlogPosts = allBlogPosts.map(reducePost);

export interface TOCSection {
  slug: string;
  text: string;
  subSections: TOCSection[];
}

export const parseToc = (source: string) => {
  const createSection = (rawHeading: string): TOCSection => {
    const removeMdx = rawHeading
      .replace(/^##*\s/, '')
      .replace(/[\*,\~]{2,}/g, '')
      .replace(/(?<=\])\((.*?)\)/g, '')
      .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, '');

    return {
      slug: removeMdx
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, '')
        .replace(/\s/g, '-'),
      text: removeMdx,
      subSections: [],
    };
  };

  return source
    .split('\n')
    .filter((line) => line.match(/(^#{1,3})\s/))
    .reduce<TOCSection[]>(
      (acc, rawHeading) => {
        const level = rawHeading.split('#').length - 1;
        const section = createSection(rawHeading);

        if (level === 1) {
          acc.push(section);
        } else if (level === 2 && acc.length > 0) {
          acc[acc.length - 1].subSections.push(section);
        } else if (level === 3 && acc.length > 0) {
          const lastH1 = acc[acc.length - 1];
          if (lastH1.subSections.length > 0) {
            lastH1.subSections[lastH1.subSections.length - 1].subSections.push(section);
          }
        }

        return acc;
      },
      [
        {
          slug: '',
          text: '',
          subSections: [],
        },
      ],
    );
};

export const contentToDescription = (content: string) => {
  const parsedContent = content
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/(?<=\])\((.*?)\)/g, '')
    .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, '')
    .replace(/[#*\|\[\]]|(\-{3,})|(`{3})(\S*)(?=\s)/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 130);

  return `${parsedContent}...`;
};
