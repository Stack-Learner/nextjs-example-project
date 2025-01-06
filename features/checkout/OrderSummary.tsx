'use client';

import { Separator } from '@/components/ui/separator';
import { useCart } from '@/store/cart.store';

/**
 * Order summary component.
 * Responsibility - Display order summary.
 *
 * @returns {JSX.Element} - Order summary component.
 */

export const OrderSummary = () => {
	const { items, getTotal } = useCart();
	const subtotal = getTotal();
	const shipping = 10;
	const total = subtotal + shipping;

	return (
		<div className="bg-gray-50 rounded-lg p-6">
			<h2 className="text-xl font-semibold mb-4">Order Summary</h2>

			<div className="space-y-4">
				{items.map((item) => (
					<div key={item.id} className="flex justify-between">
						<div>
							<p className="font-medium">{item.name}</p>
							<p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
						</div>
						<p className="font-medium">
							${(item.price * item.quantity).toFixed(2)}
						</p>
					</div>
				))}
			</div>

			<Separator className="my-4" />

			<div className="space-y-2">
				<div className="flex justify-between">
					<p>Subtotal</p>
					<p>${subtotal.toFixed(2)}</p>
				</div>
				<div className="flex justify-between">
					<p>Shipping</p>
					<p>${shipping.toFixed(2)}</p>
				</div>
				<Separator className="my-2" />
				<div className="flex justify-between font-semibold">
					<p>Total</p>
					<p>${total.toFixed(2)}</p>
				</div>
			</div>
		</div>
	);
};

OrderSummary.displayName = 'OrderSummary';
