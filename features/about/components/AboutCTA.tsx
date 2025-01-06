import { Button } from '@/components/ui/button';
import Link from 'next/link';

/**
 * AboutCTA component
 *
 * @returns {JSX.Element} AboutCTA
 */

export const AboutCTA = () => {
	return (
		<section className="py-20 bg-primary text-white">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-6">
					Ready to Experience the Best?
				</h2>
				<p className="mb-8 text-lg">
					Browse our collection of premium mobile phones today.
				</p>
				<Link href="/products">
					<Button size="lg" variant="secondary">
						Shop Now
					</Button>
				</Link>
			</div>
		</section>
	);
};

AboutCTA.displayName = 'AboutCTA';
