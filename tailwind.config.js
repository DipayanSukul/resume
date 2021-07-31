module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: () => ({
				'hero-image': "url('/assets/images/bg.jpg')",
			}),
			backgroundColor: () => ({
				'modern-black': '#17181b',
				'slightly-black': '#2C2D2F',
				'grey-black': '#6b6c6d',
				'slightly-blue': '#00a3e1',
			}),
			textColor: () => ({
				'off-white': '#e1e1e1',
				'something-blue': '#029CD8',
			}),
			inset: {
				13: '3.125rem',
				'-13': '-3.125rem',
			},
			borderColor: () => ({
				'something-blue': '#029CD8',
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
