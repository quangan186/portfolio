/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
	daisyui: {
		themes: [],
	},
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1284px",
			xl: "1440px",
		},
		extend: {
			colors: {
				primary: {
					100: "#BAE1E7",
				},
				secondary: "#F1AFAA",
				tertiary: {
					
				}
			},
			keyframes: {
				beat: {
					"0%": { scale: "1" },
					"50%": { scale: "0.6" },
				},
				breath: {
					"50%": { color: "#FD788C" },
				},
			},
			animation: {
				beat: "beat 1s ease-in-out infinite",
				breath: "breath 1s ease-in-out infinite",
			},
		},
		fontFamily: {
			sourceSansPro: ["Source Sans Pro", "sans-serif"],
			now: ["Now", "sans-serif"],
		},
	},
	plugins: [],
}
