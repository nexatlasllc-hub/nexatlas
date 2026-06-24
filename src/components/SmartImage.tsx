'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SmartImageProps {
  src?: string;
  alt: string;
  label?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

// Renders an optimized next/image, but degrades to an on-brand Silk Road
// gradient (never a broken image) if the source is missing or fails to load.
// This is the front-end half of the image-management system; production
// photography is supplied via Sanity or /public and slots in transparently.
export default function SmartImage({
  src,
  alt,
  label,
  fill = true,
  width,
  height,
  sizes = '100vw',
  priority = false,
  className = '',
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`tile-fallback flex items-center justify-center ${fill ? 'absolute inset-0 h-full w-full' : ''} ${className}`}
        style={!fill ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        {label && (
          <span className="px-4 text-center font-display text-lg font-medium text-white/90">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
