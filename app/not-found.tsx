import { Button } from '@/components/ui/button';
import { Footer } from '@/features/layouts/footer/Footer';
import { Navbar } from '@/features/layouts/navbar/Navbar';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

export default function NotFound() {
	return (
		<Suspense>
			<Navbar />
			<div className="flex min-h-screen items-center justify-center">
				<div className="space-y-6 px-4 text-center">
					<h1 className="text-9xl font-bold">404</h1>
					<h2 className="text-3xl font-semibold">Page Not Found</h2>
					<p className="mx-auto max-w-lg text-muted-foreground">
						The page you are looking for might have been removed, had its name
						changed, or is temporarily unavailable.
					</p>
					<div>
						<Link href="/">
							<Button>
								<ArrowLeft className="mr-2 h-4 w-4" />
								Return to Homepage
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</Suspense>
	);
}
