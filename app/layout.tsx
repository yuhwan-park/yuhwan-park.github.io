import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
import { JetBrains_Mono, Nanum_Myeongjo } from 'next/font/google';
import localFont from 'next/font/local';

const nanum = Nanum_Myeongjo({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-sans',
  weight: ['400', '700', '800'],
});

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-mono',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
});

export const metadata: Metadata = {
  title: `yuhwan park's blog`,
  description: `안녕하세요. UX와 DX 두 마리 토끼를 다 잡고 싶은 만 2년차 프론트엔드 개발자입니다.`,
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'yuhwan park', url: 'https://github.com/yuhwan-park' }],
  openGraph: {
    title: `yuhwan park's blog`,
    url: 'https://yuhwan-park.github.io/',
    siteName: `yuhwan park's blog`,
    description: `안녕하세요. UX와 DX 두 마리 토끼를 다 잡고 싶은 만 2년차 프론트엔드 개발자입니다.`,
  },
  other: {
    ['google-site-verification']: '1tOVlPGznTkcAVpMjZVMHwrVgJrkxd9IPKcfLHd0LWc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${nanum.variable} ${pretendard.variable} ${jetBrainsMono.variable}`}
    >
      <body className="px-4 transition-all md:px-0">{children}</body>
      <GoogleAnalytics gaId="G-4FD3Q4FV3P" />
    </html>
  );
}
