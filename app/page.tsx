import { FeaturedCategories } from '@/features/home/FeaturedCategories';
import { HeroSection } from '@/features/home/HeroSection';
import { HeroSectionSkeleton } from '@/features/home/components/HeroSectionSekeleton';
import { WhyChooseUs } from '@/features/home/components/WhyChooseUs';
import { Suspense } from 'react';

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
