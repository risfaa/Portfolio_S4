/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'noir': '#1e1e1e',
      'bleu': '#2575A8',
      'bleuFonce': '#487089',
      'blanc': '#fafafa',
    },
    fontSize: {
      'sm': '.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.75rem', // 28px
      '4xl': '2.5rem', // 40px
      '5xl': '3.5rem', // 56px
    },
    fontFamily: {
      'Bold': ['Helvetica Neue Bold', 'sans-serif'],
      'Roman': ['Helvetica Neue Roman', 'sans-serif'],
      'Condensed': ['Helvetica Neue Condensed', 'sans-serif'],
      'Heavy': ['Helvetica Neue Heavy', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

