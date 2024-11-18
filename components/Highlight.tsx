import { PropsWithChildren } from 'react';

import { $ } from '@/libs/core';

interface Props {
  color?: 'y' | 'b';
}

export default function Highlight({ color, children }: PropsWithChildren<Props>) {
  return (
    <span
      className={$(
        'mr-1 break-all rounded border-b-2 px-1 py-0.5 font-code',
        color === 'y' && 'border-yellow-500 bg-yellow-500 bg-opacity-20 text-yellow-600',
        color === 'b' && 'border-sky-500 bg-sky-500 bg-opacity-20 text-sky-600',
        !color && 'border-teal-500 bg-teal-500 bg-opacity-20 text-teal-600',
      )}
    >
      {children}
    </span>
  );
}
