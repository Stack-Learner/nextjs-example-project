import { Category } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
	category: Category;
};

/**
 * CategoryCard component
 * Responsibility - Display a single category card
 *
 * @param {CategoryCardProps} category - CategoryCard props
 * @returns {JSX.Element} CategoryCard
 */

export const CategoryCard = ({ category }: CategoryCardProps) => {
	return (
		<Link
			href={`/products?brand=${category.slug}`}
			className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
		>
			<div className="aspect-square relative p-6">
				<Image
					src={category.image}
					alt={category.name}
					fill
					className="object-contain p-4"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
				<h3 className="text-white text-xl font-semibold">{category.name}</h3>
			</div>
		</Link>
	);
};

CategoryCard.displayName = 'CategoryCard';
