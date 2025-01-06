import { FeaturedCategories } from '@/components/home-page/FeaturedCategories';
import { HeroSection } from '@/components/home-page/HeroSection';
import { HeroSectionSkeleton } from '@/components/home-page/HeroSectionSekeleton';
import { WhyChooseUs } from '@/components/home-page/WhyChooseUs';
import { Suspense } from 'react';

export const revalidate = 3600;

export default function Home() {
	return (
		<main className="min-h-screen">
			<Suspense fallback={<HeroSectionSkeleton />}>
				<HeroSection />
			</Suspense>
			<FeaturedCategories />
			<WhyChooseUs />
		</main>
	);
}
