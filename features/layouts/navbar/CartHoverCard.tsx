'use client';

import { Button } from '@/components/ui/button';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useCart } from '@/store/cart.store';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { CartItem } from './CartItem';

/**
 * CartHoverCard component
 * Responsibility - Display cart items in a hover card
 * @returns {JSX.Element} CartHoverCard
 */

export const CartHoverCard = () => {
	const { items, getTotal, getCartQuantity } = useCart();

	return (
		<HoverCard openDelay={0} closeDelay={0}>
			<HoverCardTrigger asChild>
				<Button variant="ghost" className="relative">
					<ShoppingCart className="h-5 w-5" />
					{items.length > 0 && (
						<span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
							{getCartQuantity()}
						</span>
					)}
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="space-y-4">
					<h3 className="font-medium">Cart Items</h3>
					{items.length === 0 ? (
						<p className="text-sm text-gray-500">Your cart is empty</p>
					) : (
						<>
							<div className="space-y-2">
								{items.map((item) => (
									<CartItem key={item.id} item={item} />
								))}
							</div>
							<div className="pt-4 border-t">
								<div className="flex justify-between">
									<span>Total:</span>
									<span className="font-medium">${getTotal()}</span>
								</div>
								<Link href="/checkout">
									<Button className="w-full mt-4">Checkout</Button>
								</Link>
							</div>
						</>
					)}
				</div>
			</HoverCardContent>
		</HoverCard>
	);
};

CartHoverCard.displayName = 'CartHoverCard';
