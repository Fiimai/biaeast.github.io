"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

const easing = cubicBezier(0.42, 0, 0.58, 1); // easeInOut equivalent
const peelVariants = {
  initial: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 },
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

export function CTASection() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  // Observer for section entering viewport
  useEffect(() => {
    // setTimeout(() => setIsVisible(false), 3000);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          ref={sectionRef}
          className="relative py-24 overflow-hidden"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={peelVariants}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-violet-100/20 dark:from-primary/5 dark:to-violet-900/10" />

          {/* Wavy pattern overlay */}
          <div className="absolute inset-0 opacity-10 pattern-wavy" />

          <div className="container relative z-10">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Join us in building a healthier Bia East District
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Partner with us in our mission to provide quality healthcare for
                all. Whether you're seeking services or looking to collaborate,
                we're here to help.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  Find Health Services{" "}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                  Partner with us
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Quality healthcare is a right, not a privilege. Let's work
                together for a healthier community.
              </p>
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 40,
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="text-center p-6 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium">24/7 Emergency Care</h3>
                <p className="mt-2 text-muted-foreground">
                  Round-the-clock emergency services for urgent health needs.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium">Community Outreach</h3>
                <p className="mt-2 text-muted-foreground">
                  Health services reaching every corner of our district.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium">Health Education</h3>
                <p className="mt-2 text-muted-foreground">
                  Comprehensive resources and guidance for healthy living.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
