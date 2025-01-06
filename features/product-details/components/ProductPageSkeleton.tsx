import { Skeleton } from '@/components/ui/skeleton';

/**
 * Product page skeleton component
 * Responsibility - Display skeleton UI for product page
 * @returns Product page skeleton component
 */

export const ProductPageSkeleton = () => {
	return (
		<div className="container mx-auto py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<Skeleton className="aspect-square" />
				<div className="space-y-6">
					<div>
						<Skeleton className="h-8 w-3/4" />
						<Skeleton className="h-6 w-1/2 mt-2" />
					</div>
					<Skeleton className="h-8 w-1/4" />
					<div className="space-y-4">
						<Skeleton className="h-6 w-1/4" />
						<Skeleton className="h-24 w-full" />
					</div>
					<div className="space-y-4">
						<Skeleton className="h-12 w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

ProductPageSkeleton.displayName = 'ProductPageSkeleton';
