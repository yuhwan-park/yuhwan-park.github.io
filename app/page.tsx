import { reducedAllBlogPosts } from '@/libs/post';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const posts = reducedAllBlogPosts;
  return (
    <div>
      <div>자기소개 섹션</div>
      <div>글</div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
