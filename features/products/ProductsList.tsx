import { EmptyList } from '@/components/empty-list/EmptyList';
import { ProductCard } from '@/features/product/ProductCard';
import { getProducts } from '@/lib/utils/products';

type ProductsListProps = {
	searchParams: Promise<{ [key: string]: string | string[] }>;
};

const fetchProducts = async () => {
	return getProducts();
};

/**
 * Products list component
 * Responsibility - Display list of products based on search filters and sorting
 * @param searchParams - Search filters and sorting options
 * @returns Products list component
 */

export const ProductsList = async ({ searchParams }: ProductsListProps) => {
	const [products, params] = await Promise.all([fetchProducts(), searchParams]);

	// Apply search filter
	let filteredProducts = products.filter((product) => {
		const searchTerm = Array.isArray(params.search)
			? params.search[0]
			: params.search;
		if (!searchTerm) return true;

		const searchLower = searchTerm.toLowerCase();
		return (
			product.name.toLowerCase().includes(searchLower) ||
			product.brand.toLowerCase().includes(searchLower)
		);
	});

	// Apply brand filter
	const brands = params.brand
		? Array.isArray(params.brand)
			? params.brand
			: [params.brand]
		: [];

	if (brands.length > 0) {
		filteredProducts = filteredProducts.filter((product) =>
			brands.includes(product.brand)
		);
	}

	// Apply price filter
	const prices = params.price
		? Array.isArray(params.price)
			? params.price
			: [params.price]
		: [];

	if (prices.length > 0) {
		filteredProducts = filteredProducts.filter((product) =>
			prices.some((range) => {
				const [min, max] = range.split('-').map(Number);
				return max
					? product.price >= min && product.price <= max
					: product.price >= min;
			})
		);
	}

	// Apply sorting
	if (params.sort) {
		const [field, direction] = (params.sort as string).split('-');
		filteredProducts.sort((a, b) => {
			if (field === 'price') {
				return direction === 'asc' ? a.price - b.price : b.price - a.price;
			}
			if (field === 'name') {
				return direction === 'asc'
					? a.name.localeCompare(b.name)
					: b.name.localeCompare(a.name);
			}
			return 0;
		});
	}

	if (filteredProducts.length === 0) {
		return (
			<div className="mt-6">
				<EmptyList description="No products found according to recent filter" />
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
			{filteredProducts.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

ProductsList.displayName = 'ProductsList';
