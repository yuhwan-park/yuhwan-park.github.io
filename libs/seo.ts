import { contentToDescription } from './post';
import { Post } from './types';

export const getHomeJsonLD = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: "yuhwan park's blog",
    url: 'https://yuhwan-park.github.io/',
    description: `안녕하세요. UX와 DX 두 마리 토끼를 다 잡고 싶은 만 2년차 프론트엔드 개발자입니다.`,
    author: {
      '@type': 'Person',
      name: 'yuhwan park',
      url: 'https://github.com/yuhwan-park',
    },
    datePublished: '2024-11-07',
    dateModified: '2024-11-07',
    inLanguage: 'ko',
    mainEntityOfPage: 'https://yuhwan-park.github.io/',
    copyrightYear: '2024',
  };
};

export const getPostJsonLD = (post: Post) => {
  const description = contentToDescription(post.body.raw);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'yuhwan park',
      url: 'https://github.com/yuhwan-park',
    },
    description,
    publisher: {
      '@type': 'Organization',
      name: "yuhwan park's blog",
      url: 'https://yuhwan-park.github.io/',
    },
    articleBody: post.body.raw,
  };
};
