import Link from 'next/link';
import { UserNavigation } from './UserNavigation';

/**
 * Navbar component
 * Responsibility - Display the navbar
 * @returns {JSX.Element} Navbar
 */

export const Navbar = () => {
	return (
		<nav className="flex items-center justify-between p-4 bg-white shadow-md">
			<div className="flex items-center space-x-4">
				<Link href="/" className="text-xl font-bold">
					PhoneStore
				</Link>
				<Link href="/products">Products</Link>
			</div>
			<UserNavigation />
		</nav>
	);
};

Navbar.displayName = 'Navbar';
