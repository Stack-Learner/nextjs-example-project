import { Product } from '@/lib/types';
import axios from 'axios';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getProducts = async (): Promise<Product[]> => {
	const response = await api.get('/products');
	return response.data;
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
