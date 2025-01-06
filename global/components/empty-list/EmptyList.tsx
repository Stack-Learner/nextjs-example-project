import { Inbox, LucideIcon } from 'lucide-react';
import { FC } from 'react';

type EmptyListProps = {
	icon?: LucideIcon;
	title?: string;
	description?: string;
	className?: string;
};

/**
 * EmptyList component is used to show a message when there are no items to display
 *
 * @param {LucideIcon} icon - Icon to display
 * @param {string} title - Title to display
 * @param {string} description - Description to display
 * @param {string} className - Additional classes to apply
 * @returns {ReactElement} - EmptyList component
 */

export const EmptyList: FC<EmptyListProps> = ({
	icon: Icon = Inbox,
	title = 'No Items Found',
	description = 'Get started by adding your first item',
	className,
}) => {
	return (
		<div
			className={`flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground p-8 ${className}`}
		>
			{Icon && <Icon className="h-12 w-12 text-muted-foreground" />}
			<div className="text-center">
				<p className="text-lg font-medium">{title}</p>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
		</div>
	);
};

EmptyList.displayName = 'EmptyList';
