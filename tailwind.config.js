/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: { "light-gray": "#EDEDED" },
			container: {
				screens: {
					xl: "1200px",
					"2xl": "1200px",
				},
			},
		},
	},
	plugins: [],
};
