import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ghsLogo from "/images/ghs-official.png";

const healthServicesLinks = [
	{ name: "Primary Care", href: "#" },
	{ name: "Maternal Health", href: "#" },
	{ name: "Child Health", href: "#" },
	{ name: "Immunization", href: "#" },
	{ name: "Emergency Services", href: "#" },
	{ name: "Disease Surveillance", href: "#" },
	{ name: "Health Education", href: "#" },
	{ name: "Laboratory Services", href: "#" },
	{ name: "Mental Health", href: "#" },
	{ name: "Family Planning", href: "#" },
	{ name: "Outreach Programs", href: "#" },
	{ name: "Chronic Care", href: "#" },
	{ name: "Public Health", href: "#" },
	{ name: "Environmental Health", href: "#" },
	{ name: "Nutrition Programs", href: "#" },
];

const facilitiesLinks = [
	{ name: "Kaase Health Centre", href: "#" },
	{ name: "Amadu Nkwanta CHPS", href: "#" },
	{ name: "Fosukrom CHPS", href: "#" },
	{ name: "Kwasare CHPS", href: "#" },
	{ name: "Asemnyinakrom Health Centre", href: "#" },
	{ name: "Sebebia CHPS", href: "#" },
	{ name: "Atuakrom CHPS", href: "#" },
	{ name: "Arhinful CHPS", href: "#" },
	{ name: "Amangoase CHPS", href: "#" },
	{ name: "Massakrim CHPS", href: "#" },
	{ name: "Asoredanho CHPS", href: "#" },
	{ name: "Owonta CHPS", href: "#" },
	{ name: "Camp Junction CHPS", href: "#" },
	{ name: "Achiase CHPS", href: "#" },
	{ name: "Kofi Yeboah CHPS", href: "#" },
	{ name: "Camp 15 CHPS", href: "#" },
	{ name: "Ahimakrom CHPS", href: "#" },
	{ name: "Royal Christ Care Hospital", href: "#" },
	{ name: "Adabokrom Health Centre", href: "#" },
];

const aboutLinks = [
	{ name: "About DHD", href: "#" },
	{ name: "Our Mission", href: "#" },
	{ name: "Leadership Team", href: "#" },
	{ name: "Community Partners", href: "#" },
	{ name: "Career Opportunities", href: "#" },
	{ name: "Health Updates", href: "#" },
	{ name: "Annual Reports", href: "#" },
];

const resourceLinks = [
	{ name: "Patient Resources", href: "#" },
	{ name: "Health Guidelines", href: "#" },
	{ name: "Prevention Tips", href: "#" },
	{ name: "Community Stories", href: "#" },
	{ name: "Privacy Policy", href: "#" },
	{ name: "Licenses", href: "#" },
	{ name: "COVID-19", href: "#" },
	{ name: "Sitemap", href: "#" },
	{ name: "Cookie Settings", href: "#" },
];

export function Footer() {
	return (
		<footer className="bg-muted py-12 md:py-24">
			<div className="container">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
					<div>
						<div className="mb-4 flex items-center gap-3">
							<Image
								src={ghsLogo}
								alt="Ghana Health Service Logo"
								width={32}
								height={32}
								className="object-contain"
							/>
							<div>
								<h3 className="text-lg font-semibold">
									<Link href="/" className="font-semibold text-xl">
										<span className="font-bold text-primary">DHD Bia East</span>
									</Link>
								</h3>
							</div>
						</div>
						<div className="space-y-2">
							<span className="block text-sm text-muted-foreground">
								Bia East District, Western North, Ghana
							</span>
							<span className="block text-sm text-muted-foreground">
								Promoting Health & Wellbeing
							</span>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="font-medium">Facilities</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									All Facilities
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									Gallery
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									Health Services
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="font-medium">About</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									About DHD Bia East
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									Our Mission
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									Leadership
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									Community Initiatives
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="font-medium">Resources</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									News & Updates
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									Health Tips
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									Support
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									Privacy & Terms
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div className="flex items-center gap-4">
						<span className="text-sm text-muted-foreground">
							© 2025 DHD Bia East
						</span>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Privacy
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Terms
						</Link>
					</div>
					<div className="flex items-center gap-4">
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							<span className="sr-only">Twitter</span>
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
								className="h-5 w-5"
							>
								<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
							</svg>
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							<span className="sr-only">Facebook</span>
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
								className="h-5 w-5"
							>
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
							</svg>
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							<span className="sr-only">LinkedIn</span>
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
								className="h-5 w-5"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
								<rect width="4" height="12" x="2" y="9" />
								<circle cx="4" cy="4" r="2" />
							</svg>
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							<span className="sr-only">GitHub</span>
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
								className="h-5 w-5"
							>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
