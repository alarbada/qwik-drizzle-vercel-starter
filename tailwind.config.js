const daisy = require("daisyui")
const lightTheme = require('daisyui/src/theming/themes')['[data-theme=light]']

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
	},

	daisyui: {
		themes: [
			{
				light: {
					...lightTheme,
					// Overwrite all border radius
					'--rounded-box': '0.2rem',
					'--rounded-btn': '0.2rem',
					'--rounded-badge': '0.2rem',
				},
			},
		],
	},

	plugins: [daisy],
}
