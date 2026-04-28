import type React from 'react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

interface PinterestGalleryProps {
  media: MediaItem[];
}

const PinterestGallery: React.FC<PinterestGalleryProps> = ({ media }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
      {media.map((item, index) => (
        <div
          className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-lg bg-white/70 dark:bg-zinc-900/70 backdrop-blur"
          key={index}
        >
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt={item.alt || `Gallery image ${index + 1}`}
              className="w-full object-cover transition-transform duration-200 hover:scale-105 hover:shadow-xl"
            />
          ) : (
            <video
              src={item.src}
              controls
              className="w-full object-cover transition-transform duration-200 hover:scale-105 hover:shadow-xl"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

export type { MediaItem };
export default PinterestGallery;
