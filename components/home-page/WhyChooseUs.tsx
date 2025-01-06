import { features } from '@/config/home/features';
import { FeatureCard } from './FeatureCard';

/**
 * Why Choose Us section
 * Responsibility - Display why choose us section with feature cards
 *
 * @returns WhyChooseUs
 */

export const WhyChooseUs = () => {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						We provide the best mobile shopping experience with authentic
						products and exceptional service
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature) => (
						<FeatureCard
							key={feature.title}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

WhyChooseUs.displayName = 'WhyChooseUs';
