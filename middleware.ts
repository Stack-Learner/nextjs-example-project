/*
 * File: middleware.ts
 * Responsibility: Site-wide middleware for security and analytics.

 * Author: HM Nayem
 * Created: 2024-11-12
 * Last Modified By: Rasel Hossain 
 * Modified Details: Add the checkAuthAndRefresh function inside the middleware function to check the user is authenticated and refresh their tokens if necessary.
 * Last Modified At: 2024-11-26
 * Version: 1.0.0

 * Notes:
 * - Intentionally removed auth-related middleware.
 * - Intentionally removed Arcjet middleware.
 */

import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
	const { pathname, search } = request.nextUrl;
	const headers = new Headers(request.headers);

	// Add security headers

	headers.set('X-Frame-Options', 'DENY');
	headers.set('X-Content-Type-Options', 'nosniff');
	headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

	// Combine pathname and search to create the full route
	const route = search ? `${pathname}${search}` : pathname;
	headers.set('x-pathname', pathname);
	headers.set('x-route', route);
	headers.set('x-search', search);

	return NextResponse.next({
		headers,
	});
};

export const config = {
	// matcher tells Next.js which routes to run the middleware on.
	// This runs the middleware on all routes except for static assets.
	matcher: ['/((?!_next/static|_next/image|favicon.ico|healthz).*)'],
};
