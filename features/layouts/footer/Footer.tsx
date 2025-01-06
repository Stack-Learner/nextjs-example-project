import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const quickLinks = [
	{ name: 'About Us', href: '/about' },
	{ name: 'Contact', href: '/contact' },
	{ name: 'Privacy Policy', href: '/privacy' },
	{ name: 'Terms & Conditions', href: '/terms' },
];

const socialLinks = [
	{ name: 'Facebook', icon: Facebook, href: 'https://faceook.com' },
	{ name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
	{ name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
	{ name: 'Youtube', icon: Youtube, href: 'https://youtube.com' },
];

/**
 * Footer component
 *
 * @returns {JSX.Element} Footer
 */

export const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div>
						<h3 className="text-white text-lg font-semibold mb-4">
							PhoneStore
						</h3>
						<p className="text-sm">
							Your trusted destination for premium mobile phones and
							accessories.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-white text-lg font-semibold mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-sm hover:text-white transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-white text-lg font-semibold mb-4">
							Contact Us
						</h3>
						<div className="space-y-2 text-sm">
							<p>Email: info@phonestore.com</p>
							<p>Phone: (123) 456-7890</p>
							<p>Address: 123 Phone Street, City, Country</p>
						</div>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="text-white text-lg font-semibold mb-4">
							Newsletter
						</h3>
						<div className="space-y-4">
							<p className="text-sm">
								Subscribe to get updates on new products and special offers.
							</p>
							<div className="flex gap-2">
								<Input
									type="email"
									placeholder="Your email"
									className="bg-gray-800 border-gray-700"
								/>
								<Button>Subscribe</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Social Links */}
				<div className="mt-12 pt-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex gap-4">
							{socialLinks.map((link) => {
								const Icon = link.icon;
								return (
									<Link
										key={link.name}
										href={link.href}
										className="hover:text-white transition-colors"
										aria-label={link.name}
										target="_blank"
									>
										<Icon className="h-5 w-5" />
									</Link>
								);
							})}
						</div>
						<p className="text-sm">
							&copy; 2025 PhoneStore. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

Footer.displayName = 'Footer';
