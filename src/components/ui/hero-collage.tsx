'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CollageImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  rotation: number;
}

const sampleImages: CollageImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1631217314830-4e6416dff82a?w=300&h=300&fit=crop',
    alt: 'Health initiative 1',
    width: 300,
    height: 300,
    rotation: -5,
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=350&h=250&fit=crop',
    alt: 'Health initiative 2',
    width: 350,
    height: 250,
    rotation: 3,
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1579154204601-01d5146e8b27?w=280&h=350&fit=crop',
    alt: 'Health initiative 3',
    width: 280,
    height: 350,
    rotation: -8,
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1579154204607-0f38fcee440f?w=320&h=320&fit=crop',
    alt: 'Health initiative 4',
    width: 320,
    height: 320,
    rotation: 4,
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a5?w=300&h=400&fit=crop',
    alt: 'Health initiative 5',
    width: 300,
    height: 400,
    rotation: -3,
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e7e0?w=350&h=300&fit=crop',
    alt: 'Health initiative 6',
    width: 350,
    height: 300,
    rotation: 6,
  },
];

export function HeroCollage() {
  const [images, setImages] = useState<CollageImage[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    setImages(sampleImages);
  }, []);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Scattered images with rotation */}
      <div className="relative w-full h-full max-w-4xl">
        {/* Left side images */}
        <div className="absolute left-0 top-1/4 w-32 h-32 md:w-40 md:h-40">
          <div
            className="relative w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            style={{
              transform: `rotate(${images[0]?.rotation || -5}deg)`,
            }}
            onMouseEnter={() => setHoveredId(images[0]?.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {images[0] && (
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
                priority
              />
            )}
            {hoveredId === images[0]?.id && (
              <div className="absolute inset-0 bg-black/20" />
            )}
          </div>
        </div>

        {/* Center-left image */}
        <div className="absolute left-1/4 top-1/3 w-40 h-48 md:w-48 md:h-56">
          <div
            className="relative w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            style={{
              transform: `rotate(${images[1]?.rotation || 3}deg)`,
            }}
            onMouseEnter={() => setHoveredId(images[1]?.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {images[1] && (
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover"
                priority
              />
            )}
            {hoveredId === images[1]?.id && (
              <div className="absolute inset-0 bg-black/20" />
            )}
          </div>
        </div>

        {/* Center image (largest) */}
        <div className="absolute left-1/3 top-0 w-48 h-64 md:w-56 md:h-72">
          <div
            className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            style={{
              transform: `rotate(${images[2]?.rotation || -8}deg)`,
            }}
            onMouseEnter={() => setHoveredId(images[2]?.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {images[2] && (
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover"
                priority
              />
            )}
            {hoveredId === images[2]?.id && (
              <div className="absolute inset-0 bg-black/20" />
            )}
          </div>
        </div>

        {/* Center-right image */}
        <div className="absolute right-1/4 top-1/4 w-40 h-48 md:w-48 md:h-56">
          <div
            className="relative w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            style={{
              transform: `rotate(${images[3]?.rotation || 4}deg)`,
            }}
            onMouseEnter={() => setHoveredId(images[3]?.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {images[3] && (
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover"
              />
            )}
            {hoveredId === images[3]?.id && (
              <div className="absolute inset-0 bg-black/20" />
            )}
          </div>
        </div>

        {/* Right side images */}
        <div className="absolute right-0 top-1/3 w-32 h-40 md:w-40 md:h-48">
          <div
            className="relative w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            style={{
              transform: `rotate(${images[4]?.rotation || -3}deg)`,
            }}
            onMouseEnter={() => setHoveredId(images[4]?.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {images[4] && (
              <Image
                src={images[4].src}
                alt={images[4].alt}
                fill
                className="object-cover"
              />
            )}
            {hoveredId === images[4]?.id && (
              <div className="absolute inset-0 bg-black/20" />
            )}
          </div>
        </div>

        {/* Far right image */}
        <div className="absolute -right-8 top-1/2 w-32 h-32 md:w-40 md:h-40">
          <div
            className="relative w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            style={{
              transform: `rotate(${images[5]?.rotation || 6}deg)`,
            }}
            onMouseEnter={() => setHoveredId(images[5]?.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {images[5] && (
              <Image
                src={images[5].src}
                alt={images[5].alt}
                fill
                className="object-cover"
              />
            )}
            {hoveredId === images[5]?.id && (
              <div className="absolute inset-0 bg-black/20" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
