/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "var(--primary-color)",
        seconadryColor: "var(--secondary-color)",
        grayColor: "var(--gray-color)",
        whiteText: "var(--white-text)",
        blackText: "var(--black-text)",
        grayText: "var(--gray-text)",
      },
      width: {
        'fit': 'fit-content',
      },
      height: {
        'fit': 'fit-content',
      },
      fontFamily: {
        poppins: ['Poppins', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
