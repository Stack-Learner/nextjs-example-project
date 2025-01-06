'use client';

import { sortOptions } from '@/config/products/sortOptions';
import { Input } from '@/global/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/global/components/ui/select';
import { useSearchAndSort } from '@/hooks/useSearchAndSort';

/**
 * Search and sort component
 * Responsibility - Display search input and sort select
 * @returns Search and sort component
 */

export const SearchAndSort = () => {
	const {
		searchTerm,
		setSearchTerm,
		debouncedSearch,
		searchParams,
		handleSort,
	} = useSearchAndSort();

	return (
		<div className="flex gap-4">
			<Input
				placeholder="Search products..."
				className="flex-1"
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
					debouncedSearch(e.target.value);
				}}
			/>
			<Select value={searchParams.get('sort') || ''} onValueChange={handleSort}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Sort by" />
				</SelectTrigger>
				<SelectContent>
					{sortOptions.map(({ value, label }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

SearchAndSort.displayName = 'SearchAndSort';
