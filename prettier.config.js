const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
	...styleguide,
	plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
	useTabs: true,
	tabWidth: 4,
	printWidth: 120,
};
