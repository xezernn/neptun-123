/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '500px',
        'mdl' : '992px',
        'lgx': '1200px'
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif'],
      },
  },
  plugins: [],
}
}
