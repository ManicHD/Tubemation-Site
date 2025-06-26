/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e2f1',
          200: '#b3c5e3',
          300: '#8da8d5',
          400: '#678bc7',
          500: '#476eb5',
          600: '#365594',
          700: '#294173',
          800: '#0a1929',
          900: '#050d15',
        },
        red: {
          50: '#fff0f0',
          100: '#ffd9d9',
          200: '#ffb3b3',
          300: '#ff8c8c',
          400: '#ff6666',
          500: '#ff4040',
          600: '#ff0f10',
          700: '#cc0000',
          800: '#990000',
          900: '#660000',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'inner-top': 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};