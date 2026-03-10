"use client";

import { useRef, useEffect, useState } from "react";
import { Check, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

const plans = [
	{
		id: "basic",
		name: "Basic Care Package",
		description: "Essential health services for individuals and families",
		price: {
			monthly: "Free with NHIS",
			yearly: "Free with NHIS",
		},
		features: [
			"General consultations",
			"Basic immunizations",
			"Health education",
			"Emergency care",
			"Maternal health services",
			"Child health services",
		],
		limitations: [
			"No specialized procedures",
			"Referral required for complex cases",
			"Standard waiting times",
		],
		cta: "Get NHIS Coverage",
		popular: false,
	},
	{
		id: "comprehensive",
		name: "Comprehensive Care",
		description:
			"Enhanced healthcare with additional services and priority access",
		price: {
			monthly: "NHIS + Premium",
			yearly: "NHIS + Premium",
		},
		features: [
			"Everything in Basic Care",
			"Priority consultation booking",
			"Specialized health screening",
			"Extended diagnostic services",
			"Chronic disease management",
			"Health monitoring programs",
		],
		limitations: [
			"Some advanced procedures require referral",
			"Limited to district facility capacity",
		],
		cta: "Learn more",
		popular: true,
	},
	{
		id: "community",
		name: "Community Health Programs",
		description:
			"Large-scale health initiatives for organizations and communities",
		price: {
			monthly: "Partnership basis",
			yearly: "Partnership basis",
		},
		features: [
			"Everything in Comprehensive Care",
			"On-site health services",
			"Community health education",
			"Workplace health programs",
			"Custom health initiatives",
			"Health data analytics",
		],
		limitations: [],
		cta: "Partner with us",
		popular: false,
	},
];

const comparisonFeatures = [
	{
		id: "online-payments",
		name: "Online payments",
		tooltip: "Accept payments on your website or app",
		plans: {
			Standard: true,
			Plus: true,
			Enterprise: true,
		},
	},
	{
		id: "mobile-payments",
		name: "Mobile payments",
		tooltip: "Accept payments via mobile app or on the go",
		plans: {
			Standard: true,
			Plus: true,
			Enterprise: true,
		},
	},
	{
		id: "international-payments",
		name: "International payments",
		tooltip: "Accept payments in multiple currencies",
		plans: {
			Standard: true,
			Plus: true,
			Enterprise: true,
		},
	},
	{
		id: "subscription-billing",
		name: "Subscription billing",
		tooltip: "Recurring billing for subscription-based businesses",
		plans: {
			Standard: true,
			Plus: true,
			Enterprise: true,
		},
	},
	{
		id: "custom-checkout",
		name: "Custom checkout",
		tooltip: "Create a custom checkout experience",
		plans: {
			Standard: true,
			Plus: true,
			Enterprise: true,
		},
	},
	{
		id: "advanced-fraud",
		name: "Advanced fraud prevention",
		tooltip: "Enhanced protection against fraudulent transactions",
		plans: {
			Standard: false,
			Plus: true,
			Enterprise: true,
		},
	},
	{
		id: "dedicated-support",
		name: "Dedicated support",
		tooltip: "Direct access to support team",
		plans: {
			Standard: false,
			Plus: true,
			Enterprise: true,
		},
	},
	{
		id: "custom-reporting",
		name: "Custom reporting",
		tooltip: "Create custom reports for your business",
		plans: {
			Standard: false,
			Plus: true,
			Enterprise: true,
		},
	},
	{
		id: "account-manager",
		name: "Dedicated account manager",
		tooltip: "Personal account manager for your business",
		plans: {
			Standard: false,
			Plus: false,
			Enterprise: true,
		},
	},
	{
		id: "custom-contracts",
		name: "Custom contracts & SLAs",
		tooltip: "Tailored agreements for your business needs",
		plans: {
			Standard: false,
			Plus: false,
			Enterprise: true,
		},
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

export function PricingSection() {
	const [pricingCycle, setPricingCycle] = useState("monthly");
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

	// Animation variants
	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const fadeInUp = {
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
						<motion.div
							className="mx-auto max-w-2xl text-center mb-16"
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: isInView ? 1 : 0,
								y: isInView ? 0 : 20,
							}}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
								Healthcare Service Packages
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Accessible healthcare for everyone. Choose the package that best
								fits your health needs.
							</p>

							<div className="mt-10">
								<Tabs
									defaultValue="monthly"
									value={pricingCycle}
									onValueChange={setPricingCycle}
									className="mx-auto w-fit"
								>
									<TabsList className="grid w-64 grid-cols-2">
										<TabsTrigger value="monthly">Individual</TabsTrigger>
										<TabsTrigger value="yearly">Family Plan</TabsTrigger>
									</TabsList>
								</Tabs>
							</div>
						</motion.div>

						<motion.div
							className="grid gap-8 md:grid-cols-3 lg:gap-6"
							variants={staggerContainer}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
						>
								{plans.map((plan) => (
									<motion.div key={plan.id} variants={fadeInUp} className="h-full">
										<Card
											className={`relative overflow-hidden transition-all flex flex-col h-full ${
												plan.popular ? "shadow-lg border-primary/50 border-2" : "shadow-md border-border hover:border-primary/30"
											}`}
										>
										{plan.popular && (
											<div className="absolute top-0 right-0">
												<div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-bl-md">
													Most Popular
												</div>
											</div>
										)}
										<CardHeader>
											<CardTitle>{plan.name}</CardTitle>
											<CardDescription>{plan.description}</CardDescription>
										</CardHeader>
											<CardContent className="space-y-6 flex-grow">
											<div>
												<div className="flex items-baseline gap-2">
													<span className="text-4xl font-bold">
														{plan.price[pricingCycle as keyof typeof plan.price]}
													</span>
													{plan.price[pricingCycle as keyof typeof plan.price] !==
														"Custom" && (
														<span className="text-sm text-muted-foreground">
															per transaction
														</span>
													)}
												</div>
												{plan.name === "Plus" && (
													<p className="text-sm text-muted-foreground mt-2">
														Volume discounts available
													</p>
												)}
											</div>

											<div className="space-y-3">
												{plan.features.map((feature, idx) => (
													<div
														key={`${plan.id}-feature-${idx}`}
														className="flex items-center gap-2"
													>
														<Check className="h-4 w-4 text-green-500" />
														<span className="text-sm">{feature}</span>
													</div>
												))}
												{plan.limitations.map((limitation, idx) => (
													<div
														key={`${plan.id}-limitation-${idx}`}
														className="flex items-center gap-2 text-muted-foreground"
													>
														<X className="h-4 w-4" />
														<span className="text-sm">{limitation}</span>
													</div>
												))}
											</div>
										</CardContent>
										<CardFooter className="mt-auto">
											<Button
												variant={plan.popular ? "default" : "outline"}
												className="w-full"
											>
												{plan.cta}
											</Button>
										</CardFooter>
									</Card>
								</motion.div>
							))}
						</motion.div>

						<motion.div
							className="mt-24"
							initial={{ opacity: 0, y: 40 }}
							animate={{
								opacity: isInView ? 1 : 0,
								y: isInView ? 0 : 40,
							}}
							transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
						>
							<h3 className="text-2xl font-bold mb-8 text-center">
								Compare plans
							</h3>
							<div className="overflow-x-auto rounded-lg border border-border">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-border bg-muted/50">
											<th className="py-4 px-6 text-left font-medium">
												Features
											</th>
											{plans.map((plan) => (
												<th
													key={`table-head-${plan.id}`}
													className="py-4 px-6 text-left font-medium"
												>
													{plan.name}
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{comparisonFeatures.map((feature) => (
											<tr
												key={feature.id}
												className="border-b border-border hover:bg-muted/30 transition-colors"
											>
												<td className="py-4 px-6">
													<div className="flex items-center gap-1">
														{feature.name}
														<HoverCard>
															<HoverCardTrigger asChild>
																<Button
																	variant="ghost"
																	size="icon"
																	className="h-6 w-6"
																>
																	<HelpCircle className="h-4 w-4 text-muted-foreground" />
																	<span className="sr-only">Info</span>
																</Button>
															</HoverCardTrigger>
															<HoverCardContent className="w-64">
																<p className="text-sm">{feature.tooltip}</p>
															</HoverCardContent>
														</HoverCard>
													</div>
												</td>
												{plans.map((plan) => (
													<td
														key={`${feature.id}-${plan.id}`}
														className="py-4 px-6"
													>
														{feature.plans[plan.name as keyof typeof feature.plans] ? (
															<Check className="h-5 w-5 text-green-500" />
														) : (
															<X className="h-5 w-5 text-muted-foreground" />
														)}
													</td>
												))}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</motion.div>

						<motion.div
							className="mt-24 mx-auto max-w-3xl text-center"
							initial={{ opacity: 0, y: 40 }}
							animate={{
								opacity: isInView ? 1 : 0,
								y: isInView ? 0 : 40,
							}}
							transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
						>
							<h3 className="text-2xl font-bold mb-4">
								Need a custom solution?
							</h3>
							<p className="text-lg text-muted-foreground mb-8">
								Contact our sales team for a tailored plan that fits your specific
								business needs.
							</p>
							<Button size="lg">Contact sales</Button>
						</motion.div>
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
}
