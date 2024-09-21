/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#6F3F63',
				secondary: '#b7c9d3',
				accent: '#f4941d',
				purple: {
					100: '#a98ca1',
					200: '#9a7992',
					300: '#8c6582',
					400: '#7d5273',
					// the original color:
					500: '#6F3F63',

					600: '#643959',
					700: '#59324f',
					800: '#4e2c45',
					900: '#43263b',
				},
				gray: {
					// background color + regular text color
					400: '#9A9A9A',

					// title text color
					700: '#484848',
				},
				orange: {
					// original orange
					500: "#F5941D"
				},
				blue: {
					200: '#B7C9D3'
				}
			}
		},
	},
	plugins: [],
}
