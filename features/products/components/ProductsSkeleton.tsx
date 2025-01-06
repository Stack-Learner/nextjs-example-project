import { ProductCardSkeleton } from '../../product/components/ProductCardSkeleton';

/**
 * Products skeleton component
 * Responsibility - Display skeleton UI for products list
 * @returns Products skeleton component
 */

export const ProductsSkeleton = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
			{[...Array(6)].map((_, i) => (
				<ProductCardSkeleton key={i} />
			))}
		</div>
	);
};

ProductsSkeleton.displayName = 'ProductsSkeleton';
