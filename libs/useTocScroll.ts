import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';

import { TOCSection } from './post';

const getAllHeadingSlugs = (sections: TOCSection[]): string[] => {
  return sections.reduce<string[]>((slugs, section) => {
    return [...slugs, section.slug, ...getAllHeadingSlugs(section.subSections)];
  }, []);
};

export default function useTocScroll(tableOfContents: TOCSection[]) {
  const [currentSectionSlug, setCurrentSectionSlug] = useState<string>();

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    let headings: { id: string; top: number }[];
    let pageTop = 0;

    const onResize = () => {
      const allSlugs = getAllHeadingSlugs(tableOfContents);

      headings = Array.from(
        document.querySelectorAll<HTMLElement>('.prose h1, .prose h2, .prose h3'),
      )
        .filter((element) => allSlugs.includes(element.id))
        .map((element) => ({
          id: element.id,
          top: element.offsetTop,
        }))
        .sort((a, b) => a.top - b.top);

      pageTop = parseFloat(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue('--page-top')
          .match(/[\d.]+/)?.[0] ?? '0',
      );
    };

    const onScroll = throttle(() => {
      if (!headings) return;

      let current: typeof currentSectionSlug = undefined;
      const top = window.scrollY + pageTop;
      const HEADING_OFFSET = 10;

      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        const nextHeading = headings[i + 1];

        if (
          top >= heading.top - HEADING_OFFSET &&
          (!nextHeading || top < nextHeading.top - HEADING_OFFSET)
        ) {
          current = heading.id;
          break;
        }
      }

      setCurrentSectionSlug(current);
    }, 10);

    onResize();
    onScroll();
    window.addEventListener('scroll', onScroll, { capture: true });
    window.addEventListener('resize', onResize, { capture: true });

    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onResize, { capture: true });
    };
  }, [tableOfContents]);

  return { currentSectionSlug };
}
