/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#7979FF',
				'primary-light': '#9999FF',
				'primary-dark': '#5959FF',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			backgroundImage: {
				'hero-pattern':
					"url('https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6107f3f9a7b00e6c67411e10_Pattern.svg')",
				'footer-pattern':
					"url('https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6107f3f9a7b00e6c67411e10_Pattern.svg')",
			},
		},
	},
	plugins: [],
}
