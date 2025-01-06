/**
 * CoreValues component
 * Responsibility - Display core values section
 *
 * @returns {JSX.Element} CoreValues
 */

import { values } from '@/config/about/values';

export const CoreValues = () => {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					Our Core Values
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{values.map((value) => (
						<div
							key={value.title}
							className="bg-white p-6 rounded-lg shadow-sm"
						>
							<h3 className="text-xl font-semibold mb-3">{value.title}</h3>
							<p className="text-gray-600">{value.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

CoreValues.displayName = 'CoreValues';
