import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yuhwan-park.github.io/sitemap.xml',
    host: 'https://yuhwan-park.github.io/',
  };
}
