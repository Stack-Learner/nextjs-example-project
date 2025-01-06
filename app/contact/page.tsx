import { ContactForm } from '@/features/contact/ContactForm';
import { ContactInfo } from '@/features/contact/components/ContactInfo';
import { Faq } from '@/features/contact/components/Faq';

export default function ContactPage() {
	return (
		<main className="min-h-screen py-16">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<ContactForm />
					<ContactInfo />
				</div>
				<Faq />
			</div>
		</main>
	);
}
