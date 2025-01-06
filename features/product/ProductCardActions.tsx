'use client';

import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { useCart } from '@/store/cart.store';
import { FC } from 'react';

type Props = {
	product: Product;
};

/**
 * Product card actions component
 * Responsibility - Display actions like add to cart, view product details etc.
 *
 * @param product - Product object
 * @returns Product card actions component
 */

export const ProductCardActions: FC<Props> = ({ product }) => {
	const { addItem } = useCart();

	return (
		<Button size="sm" className="flex-1" onClick={() => addItem(product)}>
			Add to Cart
		</Button>
	);
};

ProductCardActions.displayName = 'ProductCardActions';
