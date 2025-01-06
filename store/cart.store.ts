import { CartItem, Product } from '@/lib/types';
import { create } from 'zustand';

type CartStore = {
	items: CartItem[];
	addItem: (product: Product) => void;
	removeItem: (id: string) => void;
	increaseQuantity: (id: string) => void;
	decreaseQuantity: (id: string) => void;
	getTotal: () => number;
	getCartQuantity: () => number;
	reset: () => void;
};

/**
 * Cart store
 * Responsibility - Manage cart state
 */

export const useCart = create<CartStore>((set, get) => ({
	items: [],

	// Add item to cart
	addItem: (product) =>
		set((state) => {
			const existingItem = state.items.find((item) => item.id === product.id);

			if (existingItem) {
				return {
					items: state.items.map((item) =>
						item.id === product.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			}

			return {
				items: [...state.items, { ...product, quantity: 1 }],
			};
		}),

	// Remove item from cart
	removeItem: (id) =>
		set((state) => ({
			items: state.items.filter((item) => item.id !== id),
		})),

	// Increase item quantity
	increaseQuantity: (id) =>
		set((state) => ({
			items: state.items.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			),
		})),

	// Decrease item quantity
	decreaseQuantity: (id) =>
		set((state) => ({
			items: state.items
				.map((item) =>
					item.id === id && item.quantity > 0
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter((item) => item.quantity > 0),
		})),

	// Get total cart amount
	getTotal: () => {
		const state = get();
		return state.items.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	},

	// Get total cart quantity
	getCartQuantity: () => {
		const state = get();
		return state.items.reduce((total, item) => total + item.quantity, 0);
	},

	reset: () => set({ items: [] }),
}));
