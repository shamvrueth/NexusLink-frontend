/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '-1rem 1rem 0 0 black',
        purple_shadow: '0 4px 20px rgba(128, 0, 128, 0.5)', 
      },
      fontFamily: {
        craftygirls: ["var(--craftygirls)"],
      },
      colors: {
        customBlue: "#3E8BFF", // Added custom color
      },
      screens: {
        small: { raw: "(max-height: 800px)" },
        'ws': '1300px',
      },
    },
  },
  plugins: [],
};
