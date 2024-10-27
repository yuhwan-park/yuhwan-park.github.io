import './globals.css';

import { Metadata } from 'next';
import { Nanum_Myeongjo } from 'next/font/google';
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

export const metadata: Metadata = {
  title: `yuhwan park's blog`,
  description: `yuhwan park's blog`,
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'yuhwan park', url: 'https://github.com/yuhwan-park' }],
  openGraph: {
    title: `yuhwan park's blog`,
    url: 'https://yuhwan-park.github.io/',
    description: `yuhwan park's blog`,
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
    <html lang="ko" className={`${nanum.variable} ${pretendard.variable}`}>
      <body className="px-4 transition-all md:px-0">{children}</body>
    </html>
  );
}
