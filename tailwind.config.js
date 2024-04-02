/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      oswald: 'Oswald, sans-serif',
      inter: 'Inter, sans-serif'
    },
    extend: {
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [],
}

