'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://giscus.app/client.js';
    scriptElement.async = true;
    scriptElement.crossOrigin = 'anonymous';

    scriptElement.setAttribute('data-repo', 'yuhwan-park/yuhwan-park.github.io');
    scriptElement.setAttribute('data-repo-id', 'R_kgDONC_0rQ');
    scriptElement.setAttribute('data-category', 'Announcements');
    scriptElement.setAttribute('data-category-id', 'DIC_kwDONC_0rc4Cjwdo');
    scriptElement.setAttribute('data-mapping', 'pathname');
    scriptElement.setAttribute('data-strict', '0');
    scriptElement.setAttribute('data-reactions-enabled', '1');
    scriptElement.setAttribute('data-emit-metadata', '0');
    scriptElement.setAttribute('data-input-position', 'bottom');
    scriptElement.setAttribute('data-theme', 'light');
    scriptElement.setAttribute('data-lang', 'en');

    ref.current.appendChild(scriptElement);
  }, []);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { term: pathname } } },
      'https://giscus.app',
    );
  }, [pathname]);

  return <section className="mt-32" ref={ref} />;
}
