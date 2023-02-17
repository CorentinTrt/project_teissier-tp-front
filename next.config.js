/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'standalone',
	sassOptions: {
		additionalData: `@use "src/styles/utils/mixins.scss" as M; @use "src/styles/utils/typography.scss" as T; @use "src/styles/utils/variables.scss" as V;`,
		excludePaths: '/styles',
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};

		return config;
	},
	swcMinify: true,
};

module.exports = nextConfig;
