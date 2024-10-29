/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{css.scss}',
  ],
  theme: {
    extend: {
      width: {
        'full-screen': '100vw',
      },
      height: {
        'full-screen': '100vw',
        '40rem': '40rem'
      },
      colors: {
        khaki: 'rgb(231 222 190 / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
