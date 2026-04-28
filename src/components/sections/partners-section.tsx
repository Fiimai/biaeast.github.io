"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

const partners = [
  {
    id: "nhis",
    name: "NHIS",
    fullName: "National Health Insurance Scheme",
    description: "Universal health coverage partner providing insurance services",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "jica",
    name: "JICA",
    fullName: "Japan International Cooperation Agency",
    description: "Development partner supporting health system capacity building",
    color: "from-red-500 to-red-600",
  },
  {
    id: "moh",
    name: "MOH",
    fullName: "Ministry of Health",
    description: "Government partner overseeing health policy and standards",
    color: "from-green-500 to-green-600",
  },
  {
    id: "who",
    name: "WHO",
    fullName: "World Health Organization",
    description: "International partner supporting disease surveillance and health programs",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "ghs",
    name: "GHS",
    fullName: "Ghana Health Service",
    description: "Parent organization providing strategic guidance and oversight",
    color: "from-orange-500 to-orange-600",
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

export function PartnersSection() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          ref={sectionRef}
          className="relative py-20 md:py-32 bg-gradient-to-b from-transparent to-black/30"
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
                Our Partners
              </h2>
              <p className="mt-4 text-lg text-white/80 drop-shadow-md">
                Collaborating with leading health organizations to improve healthcare
                in Bia East District
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-5"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {partners.map((partner) => (
                <motion.div key={partner.id} variants={itemVariants}>
                  <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-6 transition-all hover:border-white/40 hover:shadow-xl">
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`inline-block w-12 h-12 rounded-lg bg-gradient-to-br ${partner.color} flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform`}>
                        {partner.name}
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2">{partner.fullName}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{partner.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
