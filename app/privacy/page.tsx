export default function PrivacyPage() {
	return (
		<main className="min-h-screen py-16">
			<div className="container mx-auto px-4 max-w-4xl">
				<h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
				<p className="text-gray-600 mb-8">Last updated: January 6, 2024</p>

				<div className="prose prose-gray max-w-none">
					<section className="mb-8">
						<h2 className="font-semibold text-lg">Introduction</h2>
						<p>
							PhoneStore (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
							committed to protecting your privacy. This Privacy Policy explains
							how we collect, use, and safeguard your personal information when
							you use our website and services.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">Information We Collect</h2>
						<h3 className="font-semibold">Personal Information</h3>
						<ul className="list-disc list-inside">
							<li>Name and contact details</li>
							<li>Shipping and billing addresses</li>
							<li>Payment information</li>
							<li>Email address</li>
							<li>Phone number</li>
						</ul>

						<h3 className="font-semibold">
							Automatically Collected Information
						</h3>
						<ul className="list-disc list-inside">
							<li>Device information</li>
							<li>IP address</li>
							<li>Browser type</li>
							<li>Usage data</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">
							How We Use Your Information
						</h2>
						<ul className="list-disc list-inside">
							<li>Process your orders</li>
							<li>Send order confirmations</li>
							<li>Provide customer support</li>
							<li>Send marketing communications (with consent)</li>
							<li>Improve our services</li>
							<li>Prevent fraud</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">Data Protection</h2>
						<p>
							We implement appropriate technical and organizational measures to
							protect your personal information against unauthorized access,
							alteration, disclosure, or destruction.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">Cookies</h2>
						<p>
							We use cookies and similar tracking technologies to improve your
							browsing experience, analyze site traffic, and understand where
							our visitors come from.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">Your Rights</h2>
						<p>You have the right to:</p>
						<ul className="list-disc list-inside">
							<li>Access your personal data</li>
							<li>Correct inaccurate data</li>
							<li>Request deletion of your data</li>
							<li>Object to data processing</li>
							<li>Data portability</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-semibold text-lg">Contact Us</h2>
						<p>
							If you have any questions about this Privacy Policy, please
							contact us:
						</p>
						<ul className="list-disc list-inside">
							<li>Email: privacy@phonestore.com</li>
							<li>Phone: (123) 456-7890</li>
							<li>Address: 123 Phone Street, City, Country</li>
						</ul>
					</section>
				</div>
			</div>
		</main>
	);
}
