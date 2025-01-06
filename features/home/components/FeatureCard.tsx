import { LucideIcon } from 'lucide-react';
import { FC } from 'react';

type FeatureCardProps = {
	icon: LucideIcon;
	title: string;
	description: string;
};

/**
 * Feature card component
 * Responsibility - Display feature card with icon, title and description
 *
 * @param icon - Icon component
 * @param title - Feature title
 * @param description - Feature description
 *
 * @returns FeatureCard
 */

export const FeatureCard: FC<FeatureCardProps> = ({
	icon: Icon,
	title,
	description,
}) => {
	return (
		<div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
			<div className="p-3 rounded-full bg-primary/10 mb-4">
				<Icon className="h-6 w-6 text-primary" />
			</div>
			<h3 className="text-lg font-semibold mb-2">{title}</h3>
			<p className="text-sm text-gray-600">{description}</p>
		</div>
	);
};

FeatureCard.displayName = 'FeatureCard';
