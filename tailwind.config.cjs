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
        '480': '480px'
      },
      height: {
        'full-screen': '100vw',
        '40rem': '40rem',
        '424': '424px'
      },
      colors: {
        khaki: 'rgb(231 222 190 / <alpha-value>)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    },
  },
  plugins: [],
};
