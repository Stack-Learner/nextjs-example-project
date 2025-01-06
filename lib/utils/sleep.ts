/**
 * Sleep for a given amount of time
 *
 * @param ms - Time to sleep in milliseconds
 * @returns Promise<void> - Resolves after the given time
 */

export const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));
