/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		colors: {
    			primary: '#6F3F63',
    			secondary: '#b7c9d3',
    			accent: '#f4941d',
    			purple: {
    				'100': '#a98ca1',
    				'200': '#9a7992',
    				'300': '#8c6582',
    				'400': '#7d5273',
    				'500': '#6F3F63',
    				'600': '#643959',
    				'700': '#59324f',
    				'800': '#4e2c45',
    				'900': '#43263b'
    			},
    			gray: {
    				'400': '#9A9A9A',
    				'700': '#484848'
    			},
    			orange: {
    				'500': '#F5941D',
					'800': '#ac6814'
    			},
    			blue: {
    				'200': '#B7C9D3'
    			}
    		},
			boxShadow: {
				'sm': '0px 0px 2px 2px rgb(0 0 0 / 0.05)',
				'md': '0px 0px 2px 2px rgb(0 0 0 / 0.05)',

			}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
