import { ProductActions } from '@/features/product-details/ProductActions';
import { ProductSpecs } from '@/features/product-details/components/ProductSpecs';
import { getProduct } from '@/lib/utils/products';
import Image from 'next/image';
import { FC } from 'react';

type ProductDetailsPageProps = {
	params: Promise<{ id: string }>;
};

const ProductDetailsPage: FC<ProductDetailsPageProps> = async ({ params }) => {
	const { id } = await params;

	const product = await getProduct(id);

	return (
		<div className="container mx-auto py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Image Section */}
				<div className="relative aspect-square">
					<Image
						src={product.image}
						alt={product.name}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-contain"
						priority
					/>
				</div>

				{/* Details Section */}
				<div className="space-y-6">
					<div>
						<h1 className="text-3xl font-bold">{product.name}</h1>
						<p className="text-lg text-gray-600 mt-2">{product.brand}</p>
					</div>

					<p className="text-2xl font-bold">${product.price}</p>

					<div className="space-y-4">
						<h2 className="text-xl font-semibold">Description</h2>
						<p className="text-gray-600">{product.longDescription}</p>
					</div>

					<ProductSpecs specs={product.specs} />

					<ProductActions product={product} />
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsPage;
