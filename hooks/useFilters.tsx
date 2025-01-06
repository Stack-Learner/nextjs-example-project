import { usePathname, useRouter, useSearchParams } from 'next/navigation';

/**
 * useFilters hook
 * Responsibility - Handle filters
 *
 * @returns {Object} Filters
 */

export const useFilters = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const updateFilters = (key: string, value: string) => {
		const params = new URLSearchParams(searchParams);
		const values = params.getAll(key);

		if (values.includes(value)) {
			const newValues = values.filter((v) => v !== value);
			params.delete(key);
			newValues.forEach((v) => params.append(key, v));
		} else {
			params.append(key, value);
		}

		router.push(`${pathname}?${params.toString()}`);
	};

	return {
		searchParams,
		updateFilters,
		router,
		pathname,
	};
};
