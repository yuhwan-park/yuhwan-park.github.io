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
    <html className={`${nanum.variable} ${pretendard.variable}`}>
      <body>{children}</body>
    </html>
  );
}
