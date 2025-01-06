import { categories } from '@/config/home/categories';
import { CategoryCard } from './components/CategoryCard';

/**
 * FeaturedCategories component
 * Responsibility - Display featured categories
 * @returns {JSX.Element} FeaturedCategories
 */

export const FeaturedCategories = () => {
	return (
		<section className="py-16 container mx-auto">
			<h2 className="text-3xl font-bold text-center mb-12">Popular Brands</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
				{categories.map((category) => (
					<CategoryCard key={category.id} category={category} />
				))}
			</div>
		</section>
	);
};

FeaturedCategories.displayName = 'FeaturedCategories';
