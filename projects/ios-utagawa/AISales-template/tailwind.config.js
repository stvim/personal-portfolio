/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
    "./index.html",          // Main HTML file
    "./src/**/*.{html,js,jsx}", // Scan only inside `src/` (adjust if needed)
    "./components/**/*.{js,jsx}", // Include components if applicable
	],
	theme: {
		extend: {
			colors: {
				primary: "#db3714",
				secondary: "#db3714",
			}
		},
	},
	plugins: [],
}

