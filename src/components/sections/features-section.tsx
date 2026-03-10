"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Globe, Shield, Zap, PieChart, Coins, CreditCard, UserPlus, BarChart } from "lucide-react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

const features = [
	{
		id: "primary-care",
		title: "Primary Care",
		description: "Essential healthcare services for all community members.",
		icon: Shield,
		items: [
			{
				id: "primary-1",
				title: "General consultations",
				description: "Comprehensive health check-ups and medical consultations.",
			},
			{
				id: "primary-2",
				title: "Preventive care",
				description: "Immunizations, screenings, and health education programs.",
			},
			{
				id: "primary-3",
				title: "Chronic disease management",
				description: "Ongoing care for diabetes, hypertension, and other conditions.",
			},
			{
				id: "primary-4",
				title: "Emergency services",
				description: "24/7 emergency care and rapid response services.",
			},
			{
				id: "primary-5",
				title: "Community outreach",
				description: "Health education and services reaching remote communities.",
			},
			{
				id: "primary-6",
				title: "Telemedicine",
				description: "Remote consultations and health monitoring services.",
			},
		],
	},
	{
		id: "maternal-child",
		title: "Maternal & Child Health",
		description: "Specialized care for mothers and children.",
		icon: UserPlus,
		items: [
			{
				id: "maternal-1",
				title: "Antenatal care",
				description: "Comprehensive prenatal care and monitoring.",
			},
			{
				id: "maternal-2",
				title: "Safe delivery services",
				description: "Skilled birth attendance and delivery care.",
			},
			{
				id: "maternal-3",
				title: "Postnatal care",
				description: "Support for mothers and newborns after delivery.",
			},
			{
				id: "maternal-4",
				title: "Child immunization",
				description: "Complete vaccination programs for children.",
			},
			{
				id: "maternal-5",
				title: "Nutrition programs",
				description: "Malnutrition prevention and treatment services.",
			},
			{
				id: "maternal-6",
				title: "Family planning",
				description: "Contraceptive services and reproductive health education.",
			},
		],
	},
	{
		id: "public-health",
		title: "Public Health Programs",
		description: "Community-wide health initiatives and disease prevention.",
		icon: Globe,
		items: [
			{
				id: "public-1",
				title: "Disease surveillance",
				description: "Monitoring and tracking of communicable diseases.",
			},
			{
				id: "public-2",
				title: "Health promotion",
				description: "Community education on healthy lifestyle practices.",
			},
			{
				id: "public-3",
				title: "Environmental health",
				description: "Water, sanitation, and hygiene improvement programs.",
			},
			{
				id: "public-4",
				title: "Epidemic response",
				description: "Rapid response to disease outbreaks and health emergencies.",
			},
			{
				id: "public-5",
				title: "School health programs",
				description: "Health services and education in schools.",
			},
			{
				id: "public-6",
				title: "Community partnerships",
				description: "Collaborations with local organizations and leaders.",
			},
		],
	},
	{
		id: "health-systems",
		title: "Health Systems Strengthening",
		description: "Building robust healthcare infrastructure and capacity.",
		icon: BarChart,
		items: [
			{
				id: "systems-1",
				title: "Facility management",
				description: "Supervision and support for 19 health facilities under the directorate: Kaase Health Centre, Amadu Nkwanta CHPS, Fosukrom CHPS, Kwasare CHPS, Asemnyinakrom Health Centre, Sebebia CHPS, Atuakrom CHPS, Arhinful CHPS, Amangoase CHPS, Massakrim CHPS, Asoredanho CHPS, Owonta CHPS, Camp Junction CHPS, Achiase CHPS, Kofi Yeboah CHPS, Camp 15 CHPS, Ahimakrom CHPS, Royal Christ Care Hospital, Adabokrom Health Centre.",
			},
			{
				id: "systems-2",
				title: "Staff training",
				description: "Continuous professional development for healthcare workers.",
			},
			{
				id: "systems-3",
				title: "Supply chain management",
				description: "Ensuring adequate medical supplies and equipment.",
			},
			{
				id: "systems-4",
				title: "Quality assurance",
				description: "Monitoring and improving healthcare service quality.",
			},
			{
				id: "systems-5",
				title: "Health information systems",
				description: "Data collection, analysis, and reporting systems.",
			},
			{
				id: "systems-6",
				title: "Strategic planning",
				description: "District health planning and resource allocation.",
			},
		],
	},
];

const easing = cubicBezier(0.42, 0, 0.58, 1); // easeInOut equivalent
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

export function FeaturesSection() {
	const [activeTab, setActiveTab] = useState("primary-care");
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

	// Animation variants for staggered children animations
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
			transition: { duration: 0.5 },
		},
	};

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
						<div className="mx-auto max-w-2xl text-center mb-16">
							<motion.h2
								className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: isInView ? 1 : 0,
									y: isInView ? 0 : 20,
								}}
								transition={{ duration: 0.8, ease: "easeOut" }}
							>
								Comprehensive healthcare services for Bia East District
							</motion.h2>
							<motion.p
								className="mt-4 text-lg text-muted-foreground"
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: isInView ? 1 : 0,
									y: isInView ? 0 : 20,
								}}
								transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
							>
								We provide essential health services across all communities, from primary care to specialized programs, ensuring quality healthcare for everyone.
							</motion.p>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: isInView ? 1 : 0,
								y: isInView ? 0 : 20,
							}}
							transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
						>
							<Tabs
								defaultValue="primary-care"
								value={activeTab}
								onValueChange={setActiveTab}
								className="w-full"
							>
								<TabsList className="mx-auto mb-8 flex h-auto flex-wrap justify-center gap-4">
									{features.map((feature) => (
										<TabsTrigger
											key={feature.id}
											value={feature.id}
											className="data-[state=active]:shadow-md flex items-center gap-2 h-auto rounded-lg py-2 px-4"
										>
											<feature.icon className="h-5 w-5" />
											<span>{feature.title}</span>
										</TabsTrigger>
									))}
								</TabsList>

								{features.map((feature) => (
									<TabsContent key={feature.id} value={feature.id} className="mt-0">
										<motion.div
											className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
											variants={containerVariants}
											initial="hidden"
											animate={activeTab === feature.id ? "visible" : "hidden"}
										>
											{feature.items.map((item) => (
												<motion.div key={item.id} variants={itemVariants}>
													<Card className="bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border transition-all hover:shadow-lg hover:border-primary/50 flex flex-col h-full">
														<CardHeader>
															<CardTitle className="text-lg">{item.title}</CardTitle>
															<CardDescription className="line-clamp-3">{item.description}</CardDescription>
														</CardHeader>
														<CardContent className="pt-0 mt-auto">
															<button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
																Learn more <ArrowRight className="h-4 w-4" />
															</button>
														</CardContent>
													</Card>
												</motion.div>
											))}
										</motion.div>
									</TabsContent>
								))}
							</Tabs>
						</motion.div>
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
}
