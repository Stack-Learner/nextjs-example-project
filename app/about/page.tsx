import { AboutCTA } from '@/features/about/components/AboutCTA';
import { AboutHero } from '@/features/about/components/AboutHero';
import { CoreValues } from '@/features/about/components/CoreValues';
import { Stats } from '@/features/about/components/Stats';

export default function AboutPage() {
	return (
		<main className="min-h-screen">
			<AboutHero />
			<Stats />
			<CoreValues />
			<AboutCTA />
		</main>
	);
}
