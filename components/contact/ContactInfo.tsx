import { Mail, MapPin, Phone } from 'lucide-react';

/**
 * Contact Information component
 * Responsibility - Display contact information of the store
 *
 * @returns {JSX.Element} ContactInfo
 */

export const ContactInfo = () => {
	return (
		<div className="bg-white p-8 rounded-lg shadow-sm">
			<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
			<div className="space-y-6">
				<div className="flex items-start gap-4">
					<MapPin className="w-5 h-5 text-primary mt-1" />
					<div>
						<h3 className="font-medium">Address</h3>
						<p className="text-gray-600">123 Phone Street, City, Country</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<Phone className="w-5 h-5 text-primary mt-1" />
					<div>
						<h3 className="font-medium">Phone</h3>
						<p className="text-gray-600">(123) 456-7890</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<Mail className="w-5 h-5 text-primary mt-1" />
					<div>
						<h3 className="font-medium">Email</h3>
						<p className="text-gray-600">info@phonestore.com</p>
					</div>
				</div>

				<div className="mt-8">
					<h3 className="font-medium mb-2">Business Hours</h3>
					<div className="space-y-2 text-gray-600">
						<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
						<p>Saturday: 10:00 AM - 4:00 PM</p>
						<p>Sunday: Closed</p>
					</div>
				</div>
			</div>
		</div>
	);
};

ContactInfo.displayName = 'ContactInfo';
