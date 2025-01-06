import { getProduct } from '@/app/api/products';
import { ProductQuickView } from '@/components/product/ProductQuickView';
import { FC } from 'react';

type ProductDetailsPageProps = {
	params: Promise<{ id: string }>;
};

const ProductDetailsModal: FC<ProductDetailsPageProps> = async ({ params }) => {
	const { id } = await params;
	const product = await getProduct(id);

	return <ProductQuickView product={product} />;
};

export default ProductDetailsModal;
