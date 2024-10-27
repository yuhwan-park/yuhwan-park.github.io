import type { MetadataRoute } from 'next';

import { reducedAllBlogPosts } from '@/libs/post';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yuhwan-park.github.io/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...reducedAllBlogPosts.map(
      ({ slug }) =>
        ({
          url: `https://yuhwan-park.github.io${slug}`,
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 0.8,
        }) as const,
    ),
  ];
}
