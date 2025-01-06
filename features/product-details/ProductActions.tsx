'use client';

import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { useCart } from '@/store/cart.store';

type ProductActionsProps = {
	product: Product;
};

/**
 * Product actions component
 * Responsibility - Display actions like add to cart, view product details etc.
 *
 * @param product - Product object
 * @returns Product actions component
 */

export const ProductActions = ({ product }: ProductActionsProps) => {
	const { addItem } = useCart();

	return (
		<div className="space-y-4">
			<div className="flex items-center gap-2">
				<Button size="lg" className="w-full" onClick={() => addItem(product)}>
					Add to Cart
				</Button>
			</div>
			<p className="text-sm text-gray-500">
				Stock: {product.stock} units available
			</p>
		</div>
	);
};

ProductActions.displayName = 'ProductActions';
