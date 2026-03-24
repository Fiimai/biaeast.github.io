"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

const testimonials = [
	{
		id: "testimonial-1",
		quote: "The DHD Bia East has transformed healthcare in our community. My family now has access to quality medical care close to home.",
		author: "Akua Mensah",
		role: "Community Member",
		company: "Sefwi Bekwai",
		logo: "https://placehold.co/100x40?text=Community",
	},
	{
		id: "testimonial-2",
		quote: "The maternal health services saved my life during delivery. The skilled staff and modern equipment gave me confidence throughout my pregnancy.",
		author: "Patience Osei",
		role: "New Mother",
		company: "Adiembra",
		logo: "https://placehold.co/100x40?text=Maternal",
	},
	{
		id: "testimonial-3",
		quote: "Our school health program has improved attendance rates by 30%. Children are healthier and more focused on their studies.",
		author: "Emmanuel Kwarteng",
		role: "Headteacher",
		company: "Sefwi Bekwai Methodist Primary",
		logo: "https://placehold.co/100x40?text=Education",
	},
	{
		id: "testimonial-4",
		quote: "The rapid response to the recent disease outbreak showed the excellent coordination and preparedness of the district health team.",
		author: "Dr. Mary Asante",
		role: "Regional Health Officer",
		company: "Western North Regional Health",
		logo: "https://placehold.co/100x40?text=Regional",
	},
	{
		id: "testimonial-5",
		quote: "The community health outreach programs have brought essential services to our remote village. We no longer have to travel hours for basic healthcare.",
		author: "Chief Nana Kwame",
		role: "Traditional Leader",
		company: "Yawmatwa Community",
		logo: "https://placehold.co/100x40?text=Traditional",
	},
	{
		id: "testimonial-6",
		quote: "As we expanded internationally, Stripe made it easy to accept payments in multiple currencies and comply with local regulations.",
		author: "James Wilson",
		role: "VP of Global Expansion",
		company: "WorldWide",
		logo: "https://placehold.co/100x40?text=WorldWide",
	},
];

const partnerLogos = [
	{ id: "logo-1", src: "https://placehold.co/128x40?text=Logo1", alt: "Partner logo 1" },
	{ id: "logo-2", src: "https://placehold.co/128x40?text=Logo2", alt: "Partner logo 2" },
	{ id: "logo-3", src: "https://placehold.co/128x40?text=Logo3", alt: "Partner logo 3" },
	{ id: "logo-4", src: "https://placehold.co/128x40?text=Logo4", alt: "Partner logo 4" },
	{ id: "logo-5", src: "https://placehold.co/128x40?text=Logo5", alt: "Partner logo 5" },
	{ id: "logo-6", src: "https://placehold.co/128x40?text=Logo6", alt: "Partner logo 6" },
];

const easing = cubicBezier(0.42, 0, 0.58, 1); // easeInOut equivalent
const peelVariants = {
	initial: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 },
	animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1, transition: { duration: 0.8, ease: easing } },
	exit: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0, transition: { duration: 0.8, ease: easing } },
};

export function TestimonialsSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isInView, setIsInView] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const sectionRef = useRef<HTMLElement>(null);
	const maxIndex = Math.ceil(testimonials.length / 3) - 1;

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
	};

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
								Community voices on our healthcare impact
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
								Hear from community members, patients, and partners about how our health services have made a difference in their lives.
							</motion.p>
						</div>

						<motion.div
							className="relative"
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: isInView ? 1 : 0,
								y: isInView ? 0 : 20,
							}}
							transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
						>
							<motion.div
								className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 overflow-hidden"
								animate={{
									x: `calc(-${currentIndex * 100}% / ${maxIndex + 1})`
								}}
								transition={{
									duration: 0.5,
									ease: "easeOut"
								}}
							>
								{testimonials.map((testimonial) => (
									<Card
										key={testimonial.id}
										className="bg-card border border-border transition-all hover:shadow-lg hover:border-primary/30 h-full min-w-full"
									>
										<CardContent className="p-6 flex flex-col h-full">
											<Quote className="h-8 w-8 text-primary/20 mb-4" />
											<p className="text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
											<div className="flex items-center">
												<div className="flex-1">
													<p className="font-medium">{testimonial.author}</p>
													<p className="text-sm text-muted-foreground">
														{testimonial.role}, {testimonial.company}
													</p>
												</div>
												<div className="h-10 w-24 relative">
													<Image
														src={testimonial.logo}
														alt={`${testimonial.company} logo`}
														fill
														style={{ objectFit: "contain" }}
													/>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</motion.div>

							<div className="mt-8 flex justify-center gap-4">
								<Button
									variant="outline"
									size="icon"
									onClick={handlePrev}
									disabled={currentIndex === 0}
									className="h-10 w-10 rounded-full"
								>
									<ArrowLeft className="h-4 w-4" />
									<span className="sr-only">Previous testimonials</span>
								</Button>
								<Button
									variant="outline"
									size="icon"
									onClick={handleNext}
									disabled={currentIndex === maxIndex}
									className="h-10 w-10 rounded-full"
								>
									<ArrowRight className="h-4 w-4" />
									<span className="sr-only">Next testimonials</span>
								</Button>
							</div>
						</motion.div>

						<motion.div
							className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 px-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: isInView ? 1 : 0,
								y: isInView ? 0 : 20,
							}}
							transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
						>
							{partnerLogos.map((logo) => (
								<div key={logo.id} className="flex items-center justify-center">
									<div className="h-10 w-32 relative">
										<Image
											src={logo.src}
											alt={logo.alt}
											fill
											style={{ objectFit: "contain" }}
										/>
									</div>
								</div>
							))}
						</motion.div>
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
}
