import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Code from '@/components/Code';
import { HomeIcon } from '@/components/icons';
import { allBlogPosts } from '@/libs/post';

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug.slice(1),
  }));
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

const mdxComponents = {
  pre: Code,
};

export default function PostPage({ params }: PostPageProps) {
  const post = allBlogPosts.find((post) => post.slug === `/${params.slug}`);

  if (!post) {
    notFound();
  }
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <div data-animate data-animate-slow>
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
      <div data-animate data-animate-slow className="prose prose-neutral">
        <MDXContent components={mdxComponents} />
      </div>
    </>
  );
}
