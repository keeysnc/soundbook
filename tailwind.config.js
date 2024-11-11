/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
			custom: ["acumin-pro", "sans-serif"],
			custom2: ["bebas-neue", "sans-serif"],
		},
		fontSize: {
			sm: "0.8rem",
			base: "1rem",
			h5: "1.25rem",
			h4: "1.563rem",
			h3: "1.953rem",
			h2: "2.441rem",
			h1: "3.052rem",
		},
		extend: {
			spacing: {
				12: "3rem",
				13: "3.25rem",
				14: "3.75rem",
				15: "4rem",
				16: "4.25rem",
				17: "4.5rem",
				18: "4.75rem",
				19: "5rem",
				20: "5.25rem",
				21: "5.5rem",
				22: "5.75rem",
				23: "6rem",
				24: "6.25rem",
				25: "6.5rem",
				128: "33rem",
			},
			keyframes: {
				scrollText: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},
			animation: {
				scrollText: "scrollText 15s linear infinite",
			},
		},
	},
	plugins: [],
};
