import { AboutCTA } from '@/components/about/AboutCTA';
import { AboutHero } from '@/components/about/AboutHero';
import { CoreValues } from '@/components/about/CoreValues';
import { Stats } from '@/components/about/Stats';

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
