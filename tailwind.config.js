/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // App Router files
    './src/pages/**/*.{js,ts,jsx,tsx}',  // Pages files
    './src/components/**/*.{js,ts,jsx,tsx}',  // Components files
    './src/**/*.html',  // Any HTML files, if applicable
  ],
  darkMode: 'class', // Enable dark mode class toggling
  theme: {
    extend: {},
  },
  plugins: [],
}
