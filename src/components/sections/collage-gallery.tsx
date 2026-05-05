"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1631217b5fcd-461c-11eda-aed0-121741963f3c?auto=format&fit=crop&w=500&q=80",
    type: "image",
    alt: "Health facility",
    size: "large",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1576091160550-112173f7f869?auto=format&fit=crop&w=400&q=80",
    type: "image",
    alt: "Medical staff",
    size: "medium",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
    type: "image",
    alt: "Healthcare services",
    size: "medium",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1584308666744-24d5f400f7d1?auto=format&fit=crop&w=400&q=80",
    type: "image",
    alt: "Medical consultation",
    size: "small",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1631217b5fcd-461c-11eda-aed0-121741963f3c?auto=format&fit=crop&w=400&q=80",
    type: "image",
    alt: "Health education",
    size: "medium",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1576091160499-112f61c1c7c4?auto=format&fit=crop&w=400&q=80",
    type: "image",
    alt: "Community health",
    size: "small",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1586226260726-d6e5c5ab8a8c?auto=format&fit=crop&w=500&q=80",
    type: "image",
    alt: "Health initiative",
    size: "large",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1579154204601-01d5c6180e88?auto=format&fit=crop&w=400&q=80",
    type: "image",
    alt: "Health services",
    size: "medium",
  },
];

const easing = cubicBezier(0.42, 0, 0.58, 1);
const peelVariants = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
    transition: { duration: 0.8, ease: easing },
  },
  exit: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    opacity: 0,
    transition: { duration: 0.8, ease: easing },
  },
};

export function CollageGallery() {
  const [isInView, setIsInView] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getSizeClass = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-1";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          id="gallery"
          ref={sectionRef}
          className="relative py-20 md:py-32 bg-gradient-to-b from-black/20 to-transparent"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={peelVariants}
        >
          <div className="container px-4 sm:px-6">
            <motion.div
              className="mx-auto max-w-2xl text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl">
                Explore Our Health Initiatives
              </h2>
              <p className="mt-4 text-lg text-white/80 drop-shadow-md">
                Discover the health services and community initiatives happening across
                Bia East District through our photo and video gallery
              </p>
            </motion.div>

            <motion.div
              className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 40,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {galleryItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className={`${getSizeClass(
                    item.size
                  )} group relative overflow-hidden rounded-xl cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                >
                  <motion.img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                  >
                    <p className="text-white text-sm font-medium">{item.alt}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
