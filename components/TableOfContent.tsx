'use client';
import { useEffect } from 'react';

import { $ } from '@/libs/core';
import { TOCSection } from '@/libs/post';
import useTocScroll from '@/libs/useTocScroll';

const TOCItem = ({
  section,
  currentSectionSlug,
  level = 0,
}: {
  section: TOCSection;
  currentSectionSlug?: string;
  level?: number;
}) => {
  console.log('first', section.text, level);
  return (
    <>
      <li
        className={$(
          'flex',
          level === 1 && 'pl-3 text-[13px]',
          level === 2 && 'pl-6 text-xs',
          currentSectionSlug === section.slug && 'font-semibold',
        )}
      >
        <a
          className={$(
            'link text-second',
            'transition-all duration-200',
            currentSectionSlug === section.slug &&
              `${
                level === 0
                  ? 'text-[15px]'
                  : level === 1
                    ? 'text-[14px]'
                    : level === 2 && 'text-[13px]'
              }`,
          )}
          href={`#${section.slug}`}
        >
          {section.text}
        </a>
      </li>
      {section.subSections.length > 0 && (
        <ul className="mt-1.5 space-y-1.5">
          {section.subSections.map((subSection, j) => (
            <TOCItem
              key={j}
              section={subSection}
              currentSectionSlug={currentSectionSlug}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default function TableOfContent({
  toc,
  className,
  ...props
}: {
  toc: TOCSection[];
  className?: string;
}) {
  const { currentSectionSlug } = useTocScroll(toc);

  useEffect(() => {
    console.log('currentSectionSlug', currentSectionSlug);
  }, [currentSectionSlug]);

  return (
    <aside
      className={$(
        'fixed top-[var(--page-top)] flex max-w-[220px] -translate-x-[230px] translate-y-[140px] flex-col',
        'duration-750 transition-opacity lg:block lg:opacity-100',
        'md:hidden md:opacity-0',
      )}
    >
      <ul {...props} className={$('space-y-2.5 font-sans text-sm', className)}>
        {toc.map((section, i) => (
          <TOCItem key={i} section={section} currentSectionSlug={currentSectionSlug} />
        ))}
      </ul>
    </aside>
  );
}
