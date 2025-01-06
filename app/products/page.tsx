import { FilterSidebar } from '@/components/products/FilterSidebar';
import { ProductsList } from '@/components/products/ProductsList';
import { ProductsSkeleton } from '@/components/products/ProductsSkeleton';
import { SearchAndSort } from '@/components/products/SearchAndSort';
import { Suspense } from 'react';

export const revalidate = 3600;

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
