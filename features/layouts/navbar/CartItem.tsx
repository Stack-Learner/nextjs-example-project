'use client';

import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/lib/types';
import { useCart } from '@/store/cart.store';
import Image from 'next/image';

type CartItemProps = {
	item: CartItemType;
};

/**
 * CartItem component
 * Responsibility - Display a single cart item
 * @param {CartItemProps} props - CartItem props
 * @returns {JSX.Element} CartItem
 */

export const CartItem = ({ item }: CartItemProps) => {
	const { increaseQuantity, decreaseQuantity } = useCart();

	return (
		<div className="flex items-center gap-2">
			<Image
				src={item.image}
				alt={item.name}
				width={50}
				height={50}
				className="rounded-md"
			/>
			<div className="flex-1">
				<h4 className="text-sm font-medium">{item.name}</h4>
				<p className="text-sm text-gray-500">${item.price}</p>
			</div>
			<div className="flex items-center gap-1">
				<Button
					variant="outline"
					size="sm"
					onClick={() => decreaseQuantity(item.id)}
				>
					-
				</Button>
				<span className="w-8 text-center">{item.quantity}</span>
				<Button
					variant="outline"
					size="sm"
					onClick={() => increaseQuantity(item.id)}
				>
					+
				</Button>
			</div>
		</div>
	);
};

CartItem.displayName = 'CartItem';
