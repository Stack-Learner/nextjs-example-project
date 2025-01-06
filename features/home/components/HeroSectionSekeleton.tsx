/**
 * Hero section skeleton
 *
 * @returns {JSX.Element} Hero section skeleton
 */

import { Skeleton } from '@/components/ui/skeleton';

export const HeroSectionSkeleton = () => {
	return (
		<div className="h-[600px] w-full overflow-hidden">
			<Skeleton className="h-full bg-gray-500" />
		</div>
	);
};

HeroSectionSkeleton.displayName = 'HeroSectionSkeleton';
