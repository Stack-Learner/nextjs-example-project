/**
 * Stats component
 * Responsibility - Display stats section
 *
 * @returns {JSX.Element} Stats
 */

import { stats } from '@/config/about/stats';

export const Stats = () => {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat) => (
						<div key={stat.label} className="text-center">
							<div className="text-3xl font-bold text-primary mb-2">
								{stat.value}
							</div>
							<div className="text-gray-600">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

Stats.displayName = 'Stats';
