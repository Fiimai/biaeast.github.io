"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const facilities = [
  {
    id: 1,
    name: "Kaase Health Centre",
    type: "Health Centre",
    commissioned: "2010-05-12",
    head: "Dr. Ama Mensah",
    description: "Primary health facility serving the Kaase community and surrounding areas",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    name: "Amadu Nkwanta CHPS",
    type: "CHPS Compound",
    commissioned: "2012-08-30",
    head: "Dr. Kwame Nkrumah",
    description: "Community Health Planning Services providing grassroots healthcare",
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30",
  },
  {
    id: 3,
    name: "Fosukrom CHPS",
    type: "CHPS Compound",
    commissioned: "2015-03-15",
    head: "Dr. Abena Serwaah",
    description: "Community-based healthcare facility with focus on maternal health",
    color: "from-emerald-500/20 to-emerald-600/20",
    borderColor: "border-emerald-500/30",
  },
  {
    id: 4,
    name: "Kwasare CHPS",
    type: "CHPS Compound",
    commissioned: "2018-11-20",
    head: "Dr. Richard Atta",
    description: "Modern CHPS facility providing comprehensive community health services",
    color: "from-teal-500/20 to-teal-600/20",
    borderColor: "border-teal-500/30",
  },
  {
    id: 5,
    name: "Asemnyinakrom Health Centre",
    type: "Health Centre",
    commissioned: "2011-06-10",
    head: "Dr. Grace Ofori",
    description: "District-level health centre with enhanced diagnostic capabilities",
    color: "from-cyan-500/20 to-cyan-600/20",
    borderColor: "border-cyan-500/30",
  },
  {
    id: 6,
    name: "Sebebia CHPS",
    type: "CHPS Compound",
    commissioned: "2013-09-25",
    head: "Dr. Samuel Owusu",
    description: "Community outreach focused facility serving remote communities",
    color: "from-sky-500/20 to-sky-600/20",
    borderColor: "border-sky-500/30",
  },
  {
    id: 7,
    name: "Atuakrom CHPS",
    type: "CHPS Compound",
    commissioned: "2016-04-18",
    head: "Dr. Josephine Mensah",
    description: "Primary healthcare facility with strong maternal and child health focus",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: 8,
    name: "Arhinful CHPS",
    type: "CHPS Compound",
    commissioned: "2019-01-05",
    head: "Dr. Daniel Kofi",
    description: "Recently established CHPS with modern infrastructure",
    color: "from-indigo-500/20 to-indigo-600/20",
    borderColor: "border-indigo-500/30",
  },
  {
    id: 9,
    name: "Amangoase CHPS",
    type: "CHPS Compound",
    commissioned: "2014-07-22",
    head: "Dr. Akosua Adoma",
    description: "Community health facility focusing on disease surveillance",
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
  },
  {
    id: 10,
    name: "Massakrim CHPS",
    type: "CHPS Compound",
    commissioned: "2017-10-30",
    head: "Dr. Ernestina Ababio",
    description: "Health facility with strong community partnerships",
    color: "from-violet-500/20 to-violet-600/20",
    borderColor: "border-violet-500/30",
  },
  {
    id: 11,
    name: "Asoredanho CHPS",
    type: "CHPS Compound",
    commissioned: "2020-02-14",
    head: "Dr. Beatrice Serwaa",
    description: "Modern facility with emphasis on preventive health services",
    color: "from-fuchsia-500/20 to-fuchsia-600/20",
    borderColor: "border-fuchsia-500/30",
  },
  {
    id: 12,
    name: "Owonta CHPS",
    type: "CHPS Compound",
    commissioned: "2011-11-11",
    head: "Dr. Kwabena Boateng",
    description: "Community health facility serving remote populations",
    color: "from-pink-500/20 to-pink-600/20",
    borderColor: "border-pink-500/30",
  },
  {
    id: 13,
    name: "Camp Junction CHPS",
    type: "CHPS Compound",
    commissioned: "2015-05-30",
    head: "Dr. Afia Pokua",
    description: "Well-equipped CHPS facility with comprehensive health services",
    color: "from-rose-500/20 to-rose-600/20",
    borderColor: "border-rose-500/30",
  },
  {
    id: 14,
    name: "Achiase CHPS",
    type: "CHPS Compound",
    commissioned: "2018-12-12",
    head: "Dr. Samuel Nkrumah",
    description: "Community facility with strong health education programs",
    color: "from-red-500/20 to-red-600/20",
    borderColor: "border-red-500/30",
  },
  {
    id: 15,
    name: "Kofi Yeboah CHPS",
    type: "CHPS Compound",
    commissioned: "2019-07-07",
    head: "Dr. Abena Osei",
    description: "Modern CHPS providing accessible healthcare to catchment area",
    color: "from-orange-500/20 to-orange-600/20",
    borderColor: "border-orange-500/30",
  },
  {
    id: 16,
    name: "Camp 15 CHPS",
    type: "CHPS Compound",
    commissioned: "2020-10-10",
    head: "Dr. Kwame Adjei",
    description: "Newly commissioned facility with state-of-the-art equipment",
    color: "from-amber-500/20 to-amber-600/20",
    borderColor: "border-amber-500/30",
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

export function FacilitiesStackSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);

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

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % facilities.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  // Get visible cards (left, center, right) for horizontal carousel
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (currentIndex + i + facilities.length) % facilities.length;
      cards.push({ facility: facilities[idx], position: i });
    }
    return cards;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          ref={sectionRef}
          className="relative py-20 md:py-32 bg-gradient-to-b from-black/20 to-transparent"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={peelVariants}
        >
          <div className="container">
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
                Health Facilities Across Bia East
              </h2>
              <p className="mt-4 text-lg text-white/80 drop-shadow-md">
                Discover our 16 health facilities providing quality healthcare across all
                communities
              </p>
            </motion.div>

            <div className="relative mx-auto max-w-6xl">
              {/* Horizontal Carousel Container */}
              <div className="relative py-8">
                <AnimatePresence mode="wait">
                  <div className="flex items-center justify-center gap-4 md:gap-6 px-4">
                    {getVisibleCards().map(({ facility, position }) => (
                      <motion.div
                        key={`${facility.id}-${currentIndex}`}
                        className="flex-shrink-0 w-full max-w-[280px] md:max-w-[320px] cursor-pointer"
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                          x: position * 100,
                        }}
                        animate={{
                          opacity: position === 0 ? 1 : 0.4,
                          scale: position === 0 ? 1 : 0.8,
                          x: 0,
                          filter: position === 0 ? "blur(0px)" : "blur(2px)",
                          transition: {
                            duration: 0.5,
                            ease: "easeOut",
                          },
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.7,
                          x: direction === "next" ? -100 : 100,
                        }}
                        onClick={() => {
                          if (position < 0) handlePrev();
                          else if (position > 0) handleNext();
                        }}
                      >
                        <motion.div
                          className={`relative rounded-2xl border-2 ${facility.borderColor} bg-gradient-to-br ${facility.color} backdrop-blur-md p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all h-[420px] flex flex-col`}
                          whileHover={position === 0 ? { scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" } : {}}
                        >
                          {/* Animated background elements */}
                          <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <motion.div
                              className="absolute inset-0"
                              animate={{
                                background: [
                                  "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                                  "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                                ],
                              }}
                              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                            />
                          </div>

                          <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                    {facility.name}
                                  </h3>
                                  <p className="text-xs md:text-sm text-white/70">{facility.type}</p>
                                </div>
                              </div>

                              <p className="text-white/80 mb-6 leading-relaxed text-sm">
                                {facility.description}
                              </p>
                            </div>

                            <div className="space-y-3 border-t border-white/20 pt-6">
                              <div className="flex items-center gap-3 text-xs md:text-sm text-white/80">
                                <Calendar className="h-4 w-4 flex-shrink-0" />
                                <span>
                                  {new Date(facility.commissioned).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-3 text-xs md:text-sm text-white/80">
                                <Users className="h-4 w-4 flex-shrink-0" />
                                <span>{facility.head}</span>
                              </div>
                            </div>

                            {position === 0 && (
                              <div className="mt-6 pt-6 border-t border-white/20">
                                <p className="text-xs text-white/60 text-center">
                                  Click left or right to explore
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-20 px-4">
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2">
                  {facilities.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNext}
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Facility Counter */}
              <div className="text-center mt-8">
                <p className="text-white/60 text-sm">
                  Facility {currentIndex + 1} of {facilities.length}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
