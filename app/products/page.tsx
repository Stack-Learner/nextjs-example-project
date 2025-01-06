import { ProductsSkeleton } from '@/features/products/components/ProductsSkeleton';
import { FilterSidebar } from '@/features/products/FilterSidebar';
import { ProductsList } from '@/features/products/ProductsList';
import { SearchAndSort } from '@/features/products/SearchAndSort';
import { Suspense } from 'react';

type PageProps = {
	searchParams: Promise<{ [key: string]: string | string[] }>;
};

export default function ProductsPage({ searchParams }: PageProps) {
	return (
		<div className="container mx-auto py-8">
			<div className="flex gap-8">
				<aside className="w-64 flex-shrink-0">
					<Suspense>
						<FilterSidebar />
					</Suspense>
				</aside>

				<div className="flex-1">
					<Suspense>
						<SearchAndSort />
					</Suspense>
					<Suspense fallback={<ProductsSkeleton />}>
						<ProductsList searchParams={searchParams} />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
