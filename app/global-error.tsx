'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function GlobalError() {
	return (
		<html>
			<body>
				<div className="flex min-h-screen items-center justify-center">
					<div className="space-y-6 px-4 text-center">
						<h1 className="text-9xl font-bold text-red-600">500</h1>
						<h2 className="text-3xl font-semibold">Something went wrong!</h2>
						<p className="mx-auto max-w-lg text-muted-foreground">
							We apologize for the inconvenience. Our team has been notified and
							is working to fix the issue. Please try refreshing the page or
							come back later.
						</p>
						<div>
							<Button
								onClick={() => window.location.reload()}
								className="inline-flex items-center gap-2"
							>
								<ArrowLeft className="h-4 w-4" />
								Refresh Page
							</Button>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
