import Image from 'next/image';

import { EmailIcon, GithubIcon } from '@/components/icons';
import PostList from '@/components/PostList';
import { reducedAllBlogPosts } from '@/libs/post';
import { getHomeJsonLD } from '@/libs/seo';

export default function Home() {
  const posts = reducedAllBlogPosts;
  return (
    <main data-animate>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getHomeJsonLD()) }}
      />
      <div className="mb-8">
        <b>박유환</b>
      </div>
      <div className="mb-8">
        <p>
          안녕하세요. <span className="font-extrabold">UX</span>와{' '}
          <span className="font-extrabold">DX</span> 두 마리 토끼를 다 잡고 싶은 만 2년차 프론트엔드
          개발자입니다.
        </p>
      </div>
      <ul className="mb-1 flex flex-col gap-1 text-xs">
        <li className="flex items-center">
          <Image width="12" height="12" className="mr-1" src={'/viva.png'} alt="viva" />
          <a
            className="link pr-1"
            href="https://www.adoc.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            비바이노베이션
          </a>
          <div className="w-[120] text-[10px]">24. 10 ~ </div>
        </li>
        <li className="flex items-center">
          <Image width="12" height="12" className="mr-1" src={'/colavo.png'} alt="colavo" />
          <a
            className="link pr-1"
            href="https://colavo.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            콜라보그라운드
          </a>
          <div className="w-[120] text-[10px]">22. 09 ~ 24.04</div>
        </li>
      </ul>
      <div className="mb-8 flex gap-0.5">
        <a
          className="rounded p-1 transition-colors hover:bg-[rgba(0,0,0,0.05)]"
          href="mailto:apkdkvkz@gmail.com"
          aria-label="email"
        >
          <EmailIcon />
        </a>
        <a
          className="rounded p-1 transition-colors hover:bg-[rgba(0,0,0,0.05)]"
          href="https://github.com/yuhwan-park"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github"
        >
          <GithubIcon />
        </a>
      </div>
      <PostList posts={posts} />
    </main>
  );
}
