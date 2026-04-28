"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

// Health program details with key services and targets
type ProgramContent = {
  label: string;
  value?: string;
  items?: string[];
};

type ProgramDetails = {
  title: string;
  content: ProgramContent[];
};

const programDetails: Record<string, ProgramDetails> = {
  maternal: {
    title: "Maternal Health Services",
    content: [
      { label: "Antenatal Care Visits", value: "4 scheduled visits per pregnancy" },
      { label: "Safe Delivery Services", value: "Skilled birth attendance at all facilities" },
      { label: "Postnatal Care", value: "Follow-up care within 48 hours of delivery" },
      { label: "Maternal Mortality Target", value: "Reduce MMR by 30% by 2025" },
      { label: "Key Services", items: ["Health education", "Nutritional support", "Tetanus immunization", "Blood screening"] },
    ],
  },
  child: {
    title: "Child Health Programs",
    content: [
      { label: "Immunization Coverage", value: "95% for children under 5" },
      { label: "Exclusive Breastfeeding", value: "Promotion for first 6 months" },
      { label: "Nutrition Programs", value: "Preventing malnutrition in children" },
      { label: "Under-5 Mortality Target", value: "Reduce by 25% by 2025" },
      { label: "Key Services", items: ["Full immunization schedule", "Growth monitoring", "Diarrhea management", "Malaria prevention"] },
    ],
  },
  community: {
    title: "Community Health Outreach",
    content: [
      { label: "Communities Reached", value: "All 16+ communities in Bia East District" },
      { label: "Outreach Frequency", value: "Monthly health education campaigns" },
      { label: "Services Provided", value: "Screening, education, basic treatment" },
      { label: "Focus Areas", items: ["Hygiene & sanitation", "Nutrition education", "Disease prevention", "Family planning"] },
    ],
  },
  emergency: {
    title: "Emergency Response Services",
    content: [
      { label: "24/7 Coverage", value: "Round-the-clock emergency services available" },
      { label: "Response Time", value: "Less than 30 minutes to emergencies" },
      { label: "Ambulance Service", value: "Mobile units at all major facilities" },
      { label: "Referral Network", value: "Coordinated with district hospital" },
      { label: "Key Services", items: ["Emergency care", "Trauma management", "Rapid transport", "Stabilization & referral"] },
    ],
  },
  public: {
    title: "Public Health Surveillance",
    content: [
      { label: "Diseases Monitored", value: "10+ communicable and non-communicable diseases" },
      { label: "Reporting System", value: "Weekly surveillance reports to regional level" },
      { label: "Data Sources", items: ["All health facilities", "Community health workers", "Laboratory results", "Hospital admissions"] },
      { label: "Outbreak Response", value: "Rapid response team deployment within 24 hours" },
    ],
  },
  systems: {
    title: "Health Systems Strengthening",
    content: [
      { label: "Facilities Under DHD", value: "19 health facilities across district" },
      { label: "Staff Training", value: "Continuous professional development programs" },
      { label: "Data Management", value: "DHIS2-based health information system" },
      { label: "Quality Assurance", value: "Regular supervision and supportive visits" },
      { label: "Key Services", items: ["Facility management", "Supply chain support", "Quality monitoring", "Strategic planning"] },
    ],
  },
};

const healthFeatures = [
  {
    id: "programs",
    title: "Health program protocols",
    description: "Standardized procedures for maternal and child health services.",
  },
  {
    id: "guidelines",
    title: "Clinical guidelines",
    description: "Evidence-based treatment and care protocols.",
  },
  {
    id: "training",
    title: "Training materials",
    description: "Resources for continuous professional development.",
  },
  {
    id: "monitoring",
    title: "Monitoring systems",
    description: "Track health outcomes and service delivery quality.",
  },
  {
    id: "outreach",
    title: "Community outreach",
    description: "Programs to reach underserved populations.",
  },
  {
    id: "reporting",
    title: "Health information",
    description: "Data collection and reporting systems.",
  },
];

const easing = cubicBezier(0.42, 0, 0.58, 1); // easeInOut equivalent
const peelVariants = {
  initial: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 },
  animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1, transition: { duration: 0.8, ease: easing } },
  exit: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0, transition: { duration: 0.8, ease: easing } },
};

export function DeveloperSection() {
  const [program, setProgram] = useState("maternal");
  const [isInView, setIsInView] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  // Observer for section entering viewport
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

  // For demonstration, auto-hide after 3s to show peel effect
  // Remove this in production, or trigger on scroll/navigation
  useEffect(() => {
    // setTimeout(() => setIsVisible(false), 3000);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          id="programs"
          ref={sectionRef}
          className="relative py-20 md:py-32 bg-gradient-to-b from-transparent to-black/30"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={peelVariants}
        >
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="space-y-6">
                <motion.h2
                  className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Comprehensive Health Programs
                </motion.h2>
                <motion.p
                  className="text-lg text-white/80 drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  Our health programs are designed to be comprehensive, evidence-based,
                  and accessible. Explore our standardized protocols, training materials,
                  and implementation guidelines for quality healthcare delivery.
                </motion.p>

                <motion.div
                  className="grid gap-6 sm:grid-cols-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  {healthFeatures.map((feature) => (
                    <div key={feature.id} className="flex items-start space-x-3">
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                  <Button className="gap-2 mt-4">
                    Learn more about our programs <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 40,
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              >
                <div className="relative rounded-2xl border border-primary/20 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-xl overflow-hidden">
                  <Tabs
                    value={program}
                    onValueChange={setProgram}
                    className="w-full"
                  >
                    <div className="border-b border-border bg-white/5 px-6 py-4">
                      <TabsList className="h-auto bg-transparent p-0 gap-2 flex flex-wrap">
                        <TabsTrigger
                          value="maternal"
                          className="text-sm px-3 py-2 h-auto bg-white/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg border border-white/10 data-[state=active]:border-primary"
                        >
                          Maternal Health
                        </TabsTrigger>
                        <TabsTrigger
                          value="child"
                          className="text-sm px-3 py-2 h-auto bg-white/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg border border-white/10 data-[state=active]:border-primary"
                        >
                          Child Health
                        </TabsTrigger>
                        <TabsTrigger
                          value="community"
                          className="text-sm px-3 py-2 h-auto bg-white/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg border border-white/10 data-[state=active]:border-primary"
                        >
                          Community
                        </TabsTrigger>
                        <TabsTrigger
                          value="emergency"
                          className="text-sm px-3 py-2 h-auto bg-white/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg border border-white/10 data-[state=active]:border-primary"
                        >
                          Emergency
                        </TabsTrigger>
                        <TabsTrigger
                          value="public"
                          className="text-sm px-3 py-2 h-auto bg-white/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg border border-white/10 data-[state=active]:border-primary"
                        >
                          Public Health
                        </TabsTrigger>
                        <TabsTrigger
                          value="systems"
                          className="text-sm px-3 py-2 h-auto bg-white/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg border border-white/10 data-[state=active]:border-primary"
                        >
                          Health Systems
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    {Object.entries(programDetails).map(([programType, details]) => (
                      <TabsContent
                        key={programType}
                        value={programType}
                        className="mt-0 p-6 md:p-8 min-h-[400px]"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                            {details.title}
                          </h3>
                          <div className="space-y-4">
                            {details.content.map((item, idx) => (
                              <div key={idx} className="space-y-2">
                                <div className="flex items-start justify-between">
                                  <h4 className="font-semibold text-foreground text-lg">
                                    {item.label}
                                  </h4>
                                  {"value" in item && (
                                    <span className="text-primary font-medium text-right">
                                      {item.value}
                                    </span>
                                  )}
                                </div>
                                {item.items && (
                                  <div className="grid grid-cols-2 gap-2 ml-4">
                                    {item.items.map((subItem: string, subIdx: number) => (
                                      <div key={subIdx} className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span className="text-sm text-muted-foreground">
                                          {subItem}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>

                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                >
                  <Button className="gap-2">
                    Learn More About Our Programs <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
