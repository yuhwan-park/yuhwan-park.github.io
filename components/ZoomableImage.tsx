'use client';

import mediumZoom from 'medium-zoom';
import { useEffect, useRef } from 'react';

export default function ZoomableImage({ src, alt, ...props }: React.ComponentProps<'img'>) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref.current) {
      mediumZoom(ref.current, {
        margin: 24,
      });
    }
  }, [ref]);
  return <img ref={ref} src={src} alt={alt ?? 'figure image'} {...props} crossOrigin="anonymous" />;
}
