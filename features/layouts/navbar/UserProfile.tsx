'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from '@/lib/types';

type UserProfileProps = {
	user: User;
	onLogout: () => void;
};

/**
 * UserProfile component
 * Responsibility - Display user profile dropdown
 * @param {UserProfileProps} props - UserProfile props
 * @returns {JSX.Element} UserProfile
 */

export default function UserProfile({ user, onLogout }: UserProfileProps) {
	const getInitials = (name: string) => {
		return name
			.split(' ')
			.map((word) => word[0])
			.join('')
			.toUpperCase();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="focus:outline-none">
				<Avatar className="h-8 w-8 cursor-pointer">
					<AvatarImage src={user.avatar} alt={user.name} />
					<AvatarFallback>{getInitials(user.name)}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuLabel>
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{user.name}</p>
						<p className="text-xs leading-none text-muted-foreground">
							{user.email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="text-red-600" onClick={onLogout}>
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

UserProfile.displayName = 'UserProfile';
