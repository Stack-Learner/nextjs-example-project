'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { CartHoverCard } from './CartHoverCard';
import UserProfile from './UserProfile';

const mockUser = {
	id: 'user-01',
	name: 'John Doe',
	email: 'john@example.com',
	avatar: 'https://github.com/shadcn.png',
};

/**
 * UserNavigation component
 * Responsibility - Display user navigation
 * @returns {JSX.Element} UserNavigation
 */

export const UserNavigation = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	if (!isLoggedIn) {
		return (
			<div>
				<Button variant={'ghost'} onClick={() => setIsLoggedIn(true)}>
					Login
				</Button>
			</div>
		);
	}

	return (
		<div className="flex items-center space-x-4">
			<CartHoverCard />
			<UserProfile user={mockUser} onLogout={() => setIsLoggedIn(false)} />
		</div>
	);
};

UserNavigation.displayName = 'UserNavigation';
