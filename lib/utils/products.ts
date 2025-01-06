import { Product } from '@/lib/types';
import {
	unstable_cacheLife as cacheLife,
	unstable_cacheTag as cacheTag,
} from 'next/cache';

const baseUrl = process.env.API_URL;

export const getProducts = async (): Promise<Product[]> => {
	'use cache';
	const res = await fetch(`${baseUrl}/products`);
	const data = res.json();

	cacheTag('products');
	cacheLife('minutes');
	return data;
};

export const getProduct = async (id: string): Promise<Product> => {
	const products = await getProducts();
	const product = products.find((product) => product.id === id);
	if (!product) {
		throw new Error(`Product with id ${id} not found`);
	}
	return product;
};

export const getFeaturedProduct = async (): Promise<Product> => {
	const products = await getProducts();
	const featuredProducts = products.filter((product) => product.isFeatured);
	return featuredProducts[0];
};

export const getBestSellers = async (): Promise<Product[]> => {
	const products = await getProducts();
	return products.filter((product) => product.isBestSeller);
};
