export default function TermsPage() {
	return (
		<main className="min-h-screen py-16">
			<div className="container mx-auto px-4 max-w-4xl">
				<h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
				<p className="text-gray-600 mb-8">Last updated: January 6, 2024</p>

				<div className="prose prose-gray max-w-none">
					<section className="mb-8">
						<h2 className="font-semibold text-lg">1. Agreement to Terms</h2>
						<p>
							By accessing and using PhoneStore&apos;s website and services, you
							agree to be bound by these Terms and Conditions. If you disagree
							with any part of these terms, you do not have permission to access
							our services.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">2. Intellectual Property</h2>
						<p>
							The content, features, and functionality of our website are owned
							by PhoneStore and are protected by international copyright,
							trademark, and other intellectual property laws.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">3. User Account</h2>
						<ul className="list-disc list-inside">
							<li>You must be 18 years or older to create an account</li>
							<li>You are responsible for maintaining account security</li>
							<li>You must provide accurate and complete information</li>
							<li>
								We reserve the right to terminate accounts at our discretion
							</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">4. Products and Pricing</h2>
						<p>
							We reserve the right to modify or discontinue products without
							notice. Prices are subject to change without notice. All
							descriptions of products are accurate to the best of our
							knowledge.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">5. Orders and Payment</h2>
						<ul className="list-disc list-inside">
							<li>All orders are subject to acceptance and availability</li>
							<li>Payments must be made through approved payment methods</li>
							<li>Prices are in USD unless otherwise specified</li>
							<li>We reserve the right to refuse any order</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">6. Shipping and Delivery</h2>
						<p>
							Delivery times are estimates only. We are not responsible for
							delays beyond our control. Risk of loss and title pass to you upon
							delivery.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">7. Returns and Refunds</h2>
						<ul className="list-disc list-inside">
							<li>30-day return policy for unused products</li>
							<li>Products must be in original packaging</li>
							<li>
								Shipping costs for returns are buyer&apos;s responsibility
							</li>
							<li>Refunds will be processed within 14 business days</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">
							8. Limitation of Liability
						</h2>
						<p>
							PhoneStore shall not be liable for any indirect, incidental,
							special, consequential, or punitive damages resulting from your
							use of our services.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">9. Contact Information</h2>
						<p>For questions about these Terms, please contact us:</p>
						<ul className="list-disc list-inside">
							<li>Email: legal@phonestore.com</li>
							<li>Phone: (123) 456-7890</li>
							<li>Address: 123 Phone Street, City, Country</li>
						</ul>
					</section>
				</div>
			</div>
		</main>
	);
}
