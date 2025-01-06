import { Button } from '@/components/ui/button';
import { BLUR_DATA_URL } from '@/config/home/blurDataURL';
import { getFeaturedProduct } from '@/lib/utils/products';
import { sleep } from '@/lib/utils/sleep';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Fetch featured product from the API
 *
 * @returns {Promise<Product>} Featured product
 */
const fetchFeaturedProduct = async () => {
	await sleep(2000);

	return getFeaturedProduct();
};

/**
 * Hero section component
 * Responsibility - Fetch featured product and render it in a hero section.
 *
 * @returns {JSX.Element} Hero section component
 */
export const HeroSection = async () => {
	const featuredProduct = await fetchFeaturedProduct();

	return (
		<div className="relative h-[600px] w-full overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
			<Image
				src={featuredProduct.image}
				alt={featuredProduct.name}
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				className="object-cover"
				priority
				placeholder="blur"
				blurDataURL={BLUR_DATA_URL}
			/>

			{/* Content */}
			<div className="relative z-20 container mx-auto h-full flex items-center">
				<div className="max-w-2xl text-white">
					<h1 className="text-5xl font-bold mb-4">{featuredProduct.name}</h1>
					<p className="text-xl mb-6">{featuredProduct.description}</p>
					<div className="space-y-2">
						<p className="text-2xl font-bold">
							Starting from ${featuredProduct.price}
						</p>
						<Link href={`/products/${featuredProduct.id}`}>
							<Button
								size="lg"
								className="bg-white text-black hover:bg-gray-100"
							>
								Shop Now
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

HeroSection.displayName = 'HeroSection';
