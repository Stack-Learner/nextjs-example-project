import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		ppr: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: 'github.com',
				protocol: 'https',
				port: '',
				pathname: '/**',
			},
			{
				hostname: 'images.unsplash.com',
				protocol: 'https',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
