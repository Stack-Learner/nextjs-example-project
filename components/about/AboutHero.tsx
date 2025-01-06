/**
 * AboutHero component
 * Responsibility - Display about hero section
 *
 * @returns {JSX.Element} AboutHero
 */

export const AboutHero = () => {
	return (
		<section className="relative py-20 bg-gray-900 text-white">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl font-bold mb-6">
						Redefining Mobile Shopping Experience
					</h1>
					<p className="text-lg text-gray-300">
						We&apos;re on a mission to provide the best mobile phones with
						exceptional service and unmatched customer satisfaction.
					</p>
				</div>
			</div>
		</section>
	);
};

AboutHero.displayName = 'AboutHero';
