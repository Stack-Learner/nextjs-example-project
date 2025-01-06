import { Skeleton } from '@/components/ui/skeleton';

/**
 * UserNavigationSkeleton component
 * Responsibility - Display user navigation skeleton
 * @returns {JSX.Element} UserNavigationSkeleton
 */

export const UserNavigationSkeleton = () => {
	return (
		<div className="flex items-center space-x-4">
			<div className="relative">
				<Skeleton className="h-8 w-8" />
				<Skeleton className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center" />
			</div>

			<div>
				<Skeleton className="h-8 w-8" />
			</div>
		</div>
	);
};

UserNavigationSkeleton.displayName = 'UserNavigationSkeleton';
