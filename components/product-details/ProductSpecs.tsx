type ProductSpecsProps = {
	specs: {
		screen: string;
		storage: string;
		color: string;
	};
};

/**
 * Product specs component
 * Responsibility - Display product specifications
 *
 * @param specs - Product specifications
 * @returns Product specs component
 */

export const ProductSpecs = ({ specs }: ProductSpecsProps) => {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Specifications</h2>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<p className="text-gray-600">Screen</p>
					<p className="font-medium">{specs.screen}</p>
				</div>
				<div>
					<p className="text-gray-600">Storage</p>
					<p className="font-medium">{specs.storage}</p>
				</div>
				<div>
					<p className="text-gray-600">Color</p>
					<p className="font-medium">{specs.color}</p>
				</div>
			</div>
		</div>
	);
};

ProductSpecs.displayName = 'ProductSpecs';
