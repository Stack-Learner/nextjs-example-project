import { ProductQuickView } from '@/features/product/ProductQuickView';
import { getProduct } from '@/lib/utils/products';
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
