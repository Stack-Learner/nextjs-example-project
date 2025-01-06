'use client';

import { OrderSummary } from '@/features/checkout/OrderSummary';
import { ShippingForm } from '@/features/checkout/ShippingForm';
import { useCart } from '@/store/cart.store';
import { redirect } from 'next/navigation';

export default function CheckoutPage() {
	const { items } = useCart();

	if (items.length === 0) {
		redirect('/');
	}

	return (
		<div className="container mx-auto py-16 px-4">
			<h1 className="text-3xl font-bold mb-8">Checkout</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="space-y-8">
					<ShippingForm />
				</div>
				<div>
					<OrderSummary />
				</div>
			</div>
		</div>
	);
}
