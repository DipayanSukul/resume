module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: () => ({
				'hero-image': "url('/assets/images/bg.jpg')",
				'animated-liner-gradient': 'linear-gradient(#029CD8, #029CD8)',
			}),
			backgroundColor: () => ({
				'modern-black': '#17181b',
				'slightly-black': '#2C2D2F',
				'grey-black': '#6B6C6D',
				'slightly-blue': '#00A3E1',
				'something-blue': '#029CD8',
			}),
			textColor: () => ({
				'off-white': '#E1E1E1',
				'something-blue': '#029CD8',
			}),
			inset: {
				13: '3.125rem',
				'-13': '-3.125rem',
			},
			borderColor: () => ({
				'something-blue': '#029CD8',
			}),
			transitionProperty: () => ({
				'animated-background-size-color': 'background-size, color',
			}),
			transitionTimingFunction: () => ({
				'custom-ease': 'ease',
			}),
			backgroundSize: () => ({
				'animated-initial-background-size': '0% 100%',
				'animated-final-background-size': '100% 100%',
			}),
			backgroundPosition: () => ({
				'animated-background-position': '50% 50%',
			}),
			cursor: {
				grab: 'grab',
			},
			borderRadius: {
				custom: '50px',
				20: '20px',
			},
			flex: {
				50: '0 0 50%',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
