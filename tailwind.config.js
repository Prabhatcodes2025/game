/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff7ff',
          100: '#dceeff',
          500: '#2589ff',
          600: '#1677ff',
          700: '#0d62db',
          900: '#123257',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 35px rgba(21, 91, 164, 0.09)',
        soft: '0 8px 24px rgba(22, 119, 255, 0.12)',
      },
    },
  },
  plugins: [],
}
