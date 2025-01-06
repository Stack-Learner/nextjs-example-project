export type Product = {
	id: string;
	name: string;
	brand: string;
	price: number;
	description: string;
	longDescription: string;
	specs: {
		screen: string;
		storage: string;
		color: string;
	};
	image: string;
	stock: number;
	isFeatured?: boolean;
	isNewArrival?: boolean;
	isBestSeller?: boolean;
	discount?: number;
	category?: string;
};

export type CartItem = {
	quantity: number;
} & Product;

export type User = {
	id: string;
	email: string;
	name: string;
	avatar?: string;
};

export type Category = {
	id: string;
	name: string;
	image: string;
	slug: string;
};
