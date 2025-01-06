'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { brands } from '@/config/products/brands';
import { priceRanges } from '@/config/products/priceRanges';
import { useFilters } from '@/features/products/hooks/useFilters';

/**
 * Filter sidebar component
 * Responsibility - Display filter options for products
 * @returns Filter sidebar component
 */

export const FilterSidebar = () => {
	const { searchParams, updateFilters, router, pathname } = useFilters();

	return (
		<div className="space-y-6">
			<div>
				<h3 className="font-semibold mb-4">Brands</h3>
				<div className="space-y-2">
					{brands.map((brand) => (
						<div key={brand} className="flex items-center space-x-2">
							<Checkbox
								id={brand}
								checked={searchParams.getAll('brand').includes(brand)}
								onCheckedChange={() => updateFilters('brand', brand)}
							/>
							<Label htmlFor={brand}>{brand}</Label>
						</div>
					))}
				</div>
			</div>

			<div>
				<h3 className="font-semibold mb-4">Price Range</h3>
				<div className="space-y-2">
					{priceRanges.map((range) => (
						<div key={range} className="flex items-center space-x-2">
							<Checkbox
								id={range}
								checked={searchParams.getAll('price').includes(range)}
								onCheckedChange={() => updateFilters('price', range)}
							/>
							<Label htmlFor={range}>${range}</Label>
						</div>
					))}
				</div>
			</div>

			<Button
				className="w-full"
				onClick={() => router.push(pathname)}
				variant="outline"
			>
				Clear Filters
			</Button>
		</div>
	);
};

FilterSidebar.displayName = 'FilterSidebar';
