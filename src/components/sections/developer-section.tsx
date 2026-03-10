"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

// Sample health program implementations for different departments
const programExamples = {
  maternal: `// Maternal Health Program Structure
- Antenatal Care Schedule
  • First Visit: 1-12 weeks
  • Second Visit: 20-24 weeks  
  • Third Visit: 28-32 weeks
  • Fourth Visit: 36-40 weeks

- Services Included:
  • Health education and counseling
  • Physical examination
  • Laboratory tests (blood, urine)
  • Iron and folic acid supplementation
  • Tetanus toxoid immunization`,
  child: `# Child Health Services Protocol
immunization_schedule = {
  "birth": ["BCG", "OPV-0", "Hepatitis B"],
  "6_weeks": ["OPV-1", "DPT-1", "Hepatitis B-2"],
  "10_weeks": ["OPV-2", "DPT-2"],
  "14_weeks": ["OPV-3", "DPT-3", "Hepatitis B-3"],
  "9_months": ["Measles", "Yellow Fever"],
  "18_months": ["Measles-2", "DPT Booster"]
}`,
  community: `// Community Health Outreach Program
class CommunityOutreach {
  constructor() {
    this.target_communities = [
      "Adabokrom", "Ahenikrom", "Asanteman",
      "Camp 15", "Yawmatwa", "Nkrankrom"
    ];
    this.services = [
      "Health education",
      "Basic screening", 
      "Immunization",
      "Family planning"
    ];
  }
}`,
  emergency: `<?php
// Emergency Response Protocol
class EmergencyResponse {
  public $response_time = "< 30 minutes";
  public $coverage = "24/7";
  
  public function handleEmergency($case) {
    $priority = $this->assessPriority($case);
    return [
      'immediate_care' => true,
      'ambulance_dispatch' => $priority === 'critical',
      'referral_needed' => $priority === 'severe',
    ];
  }
}`,
  public: `// Public Health Surveillance System
surveillance_system = {
  diseases_monitored: [
    "Malaria", "Tuberculosis", "HIV/AIDS",
    "Hypertension", "Diabetes", "Diarrheal diseases"
  ],
  reporting_frequency: "Weekly",
  data_sources: [
    "Health facilities",
    "Community health workers", 
    "Laboratory results"
  ]
}`,
  systems: `// Health Information Management
class HealthInfoSystem {
  constructor() {
    this.facilities = 19; // Updated to reflect all facilities under the directorate
    this.data_points = [
      "Patient registrations",
      "Service delivery statistics",
      "Resource utilization",
      "Health outcomes"
    ];
  }
  
  generateReport(period) {
    return this.aggregateData(period);
  }
}`,
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
          ref={sectionRef}
          className="relative py-20 md:py-32"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={peelVariants}
        >
          <div className="container px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="space-y-6">
                <motion.h2
                  className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Comprehensive health programs
                </motion.h2>
                <motion.p
                  className="text-lg text-muted-foreground"
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
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/40 to-violet-400/40 opacity-20 blur-xl" />
                <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-background dark:bg-zinc-800 shadow-xl">
                  <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <Tabs
                      value={program}
                      onValueChange={setProgram}
                      className="w-auto"
                    >
                      <TabsList className="h-8 bg-muted/50 p-1 gap-1">
                        <TabsTrigger
                          value="maternal"
                          className="text-xs px-3 py-1 h-6 bg-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          Maternal Health
                        </TabsTrigger>
                        <TabsTrigger
                          value="child"
                          className="text-xs px-3 py-1 h-6 bg-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          Child Health
                        </TabsTrigger>
                        <TabsTrigger
                          value="community"
                          className="text-xs px-3 py-1 h-6 bg-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          Community
                        </TabsTrigger>
                        <TabsTrigger
                          value="emergency"
                          className="text-xs px-3 py-1 h-6 bg-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          Emergency
                        </TabsTrigger>
                        <TabsTrigger
                          value="public"
                          className="text-xs px-3 py-1 h-6 bg-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          Public Health
                        </TabsTrigger>
                        <TabsTrigger
                          value="systems"
                          className="text-xs px-3 py-1 h-6 bg-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          Health Systems
                        </TabsTrigger>
                      </TabsList>
                      {Object.entries(programExamples).map(([programType, example]) => (
                        <TabsContent
                          key={programType}
                          value={programType}
                          className="mt-0 relative min-h-[300px]"
                        >
                          <div className="bg-zinc-900 rounded-lg p-4 overflow-auto max-h-[350px]">
                            <pre className="font-mono text-sm text-zinc-100 leading-relaxed">
                              <code>{example}</code>
                            </pre>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 gap-1 rounded-md px-2 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                            >
                              Copy
                            </Button>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                  <div className="flex gap-4 items-center bg-muted/30 px-4 py-3 border-t border-border">
                    <div className="text-sm font-medium text-foreground">
                      Health Programs
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Implementation Guidelines
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm">
                  <Button variant="link" className="h-auto p-0 text-primary hover:underline">
                    API Reference <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                  <span className="text-muted-foreground">•</span>
                  <Button variant="link" className="h-auto p-0 text-primary hover:underline">
                    API Libraries <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
