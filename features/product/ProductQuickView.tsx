'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Product } from '@/lib/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { ProductCardActions } from './ProductCardActions';

type ProductQuickViewProps = {
	product: Product | null;
};

/**
 * Product quick view component
 * Responsibility - Display product information in a dialog format with actions like add to cart, view product details etc.
 *
 * @param product - Product object
 * @returns Product quick view component
 */

export const ProductQuickView: FC<ProductQuickViewProps> = ({ product }) => {
	const router = useRouter();

	if (!product) return null;

	const handleClose = () => {
		router.back();
	};

	const handleDetails = () => {
		window.location.reload();
	};

	return (
		<Dialog open={true} defaultOpen={true} onOpenChange={handleClose}>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<DialogTitle>{product.name}</DialogTitle>
				</DialogHeader>
				<div className="grid grid-cols-2 gap-4">
					<div className="relative aspect-square">
						<Image
							src={product.image}
							alt={product.name}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-contain"
						/>
					</div>
					<div>
						<p className="text-lg mb-2">{product.brand}</p>
						<p className="text-2xl font-bold mb-4">${product.price}</p>
						<p className="text-gray-600 mb-4">{product.description}</p>
						<div className="space-y-2">
							<p>
								<strong>Screen:</strong> {product.specs.screen}
							</p>
							<p>
								<strong>Storage:</strong> {product.specs.storage}
							</p>
							<p>
								<strong>Color:</strong> {product.specs.color}
							</p>
						</div>
						<div className="flex items-center gap-4 mt-4">
							<ProductCardActions product={product} />
							<Button variant="outline" onClick={handleDetails}>
								View Details
							</Button>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

ProductQuickView.displayName = 'ProductQuickView';
