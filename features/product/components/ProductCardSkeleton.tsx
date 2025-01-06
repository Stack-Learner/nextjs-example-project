/**
 * Product card skeleton component
 * Responsibility - Render skeleton card while the product is being fetched.
 *
 * @returns {JSX.Element} Product card skeleton component
 */

import { Skeleton } from '@/components/ui/skeleton';

export const ProductCardSkeleton = () => {
	return (
		<div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
			<div className="block">
				<div className="p-4">
					<div className="aspect-square relative mb-4">
						<Skeleton className="h-full w-full" />
					</div>
					<div className="space-y-2">
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-4 w-3/4" />
						<div className="flex justify-between items-center">
							<Skeleton className="h-6 w-1/4" />
							<Skeleton className="h-4 w-1/4" />
						</div>
					</div>
				</div>
			</div>

			<div className="relative z-10 px-4 pb-4">
				<div className="flex gap-2 pt-2">
					<Skeleton className="h-8 w-1/2" />
					<Skeleton className="h-8 w-1/2" />
				</div>
			</div>
		</div>
	);
};

ProductCardSkeleton.displayName = 'ProductCardSkeleton';
