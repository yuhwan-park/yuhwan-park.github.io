import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Code from '@/components/Code';
import Giscus from '@/components/Giscus';
import { HomeIcon } from '@/components/icons';
import TableOfContent from '@/components/TableOfContent';
import ZoomableImage from '@/components/ZoomableImage';
import { allBlogPosts, contentToDescription, parseToc } from '@/libs/post';
import { getPostJsonLD } from '@/libs/seo';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug.slice(1),
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = allBlogPosts.find((post) => post.slug === `/${params.slug}`);

  if (!post) return {};
  const description = contentToDescription(post.body.raw);
  return {
    title: `${post.title} | yuhwan park's blog`,
    description,
    alternates: {
      canonical: `https://yuhwan-park.github.io${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: 'yuhwan park', url: 'https://github.com/yuhwan-park' }],
    openGraph: {
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.date).toISOString(),
      authors: ['yuhwan park'],
      title: post.title,
      url: `https://yuhwan-park.github.io${post.slug}`,
      description,
    },
  };
}

const mdxComponents = {
  pre: Code,
  img: ZoomableImage,
};

export default function PostPage({ params }: PostPageProps) {
  const post = allBlogPosts.find((post) => post.slug === `/${params.slug}`);

  if (!post) {
    notFound();
  }
  const toc = parseToc(post.body.raw);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPostJsonLD(post)) }}
      />
      <div className="blur-layer" aria-hidden />
      <TableOfContent data-animate className="px-2 text-sm" toc={toc} />
      <div data-animate>
        <h1 className="pb-1 text-lg font-extrabold">{post.title}</h1>
        <div className="text-sm">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </div>
        <div className="mb-10 block w-fit rounded p-1 transition-colors hover:bg-[rgba(0,0,0,0.05)]">
          <Link href={'/'}>
            <HomeIcon width={18} height={18} />
          </Link>
        </div>
      </div>
      <div data-animate className="prose prose-neutral">
        <MDXContent components={mdxComponents} />
      </div>
      <Giscus />
    </main>
  );
}
