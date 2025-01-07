import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCardActions } from './ProductCardActions';

type ProductCardProps = {
	product: Product;
};

/**
 * Product card component
 * Responsibility - Display product information in a card format with actions like add to cart, view product details etc.
 *
 * @param product - Product object
 * @returns Product card component
 */

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
			<Link href={`/products/${product.id}`} className="block">
				<div className="p-4">
					<div className="aspect-square relative mb-4">
						<Image
							src={product.image}
							alt={product.name}
							fill
							className="object-contain"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							priority
						/>
					</div>
					<div className="space-y-2">
						<h3 className="font-semibold truncate">{product.name}</h3>
						<p className="text-sm text-gray-600">{product.brand}</p>
						<div className="flex justify-between items-center">
							<p className="text-lg font-bold">${product.price}</p>
							<p className="text-sm text-gray-500">Stock: {product.stock}</p>
						</div>
					</div>
				</div>
			</Link>

			<div className="relative z-10 px-4 pb-4 pt-2">
				<ProductCardActions product={product} />
			</div>
		</div>
	);
};

ProductCard.displayName = 'ProductCard';
