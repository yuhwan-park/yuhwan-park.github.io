import Code from '@/components/Code';
import { allBlogPosts } from '@/libs/post';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

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
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div>작성일: {new Date(post.date).toLocaleDateString()}</div>
      <div className="">
        태그:{' '}
        {post.tags.map((tag, index) => (
          <span key={index}>{tag} </span>
        ))}
      </div>
      <div className="prose prose-neutral">
        <MDXContent components={mdxComponents} />
      </div>
    </div>
  );
}
