import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

/**
 * useSearchAndSort hook
 * Responsibility - Handle search and sort
 *
 * @returns {Object} Search and sort
 */

export const useSearchAndSort = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [searchTerm, setSearchTerm] = useState(
		searchParams.get('search') || ''
	);

	useEffect(() => {
		setSearchTerm(searchParams.get('search') || '');
	}, [searchParams]);

	const debouncedSearch = useDebouncedCallback((term: string) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set('search', term);
		} else {
			params.delete('search');
		}
		router.push(`${pathname}?${params.toString()}`);
	}, 300);

	const handleSort = (value: string) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set('sort', value);
		} else {
			params.delete('sort');
		}
		router.push(`${pathname}?${params.toString()}`);
	};

	return {
		searchTerm,
		setSearchTerm,
		debouncedSearch,
		handleSort,
		searchParams,
	};
};
