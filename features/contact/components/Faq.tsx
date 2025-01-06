import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/config/contact/faqs';

/**
 * Faq component
 * Responsibility - Display frequently asked questions
 * @returns {JSX.Element} Faq
 */

export const Faq = () => {
	return (
		<div className="mt-16">
			<h2 className="text-2xl font-semibold text-center mb-8">
				Frequently Asked Questions
			</h2>
			<div className="max-w-3xl mx-auto">
				<Accordion type="single" collapsible>
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

Faq.displayName = 'Faq';
