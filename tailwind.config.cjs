/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f5f8',
          100: '#e4ebf1',
          200: '#c6d4e0',
          300: '#9ab0c3',
          400: '#708ca5',
          500: '#506e89',
          600: '#36536f',
          700: '#243e57',
          800: '#142c45',
          900: '#0b1929',
        },
        accent: {
          50: '#fbf8f0',
          100: '#f5eddc',
          200: '#eddfbc',
          300: '#e5cc91',
          400: '#dbbb75',
          500: '#d5b16b',
          600: '#b38c43',
          700: '#967039',
          800: '#76572a',
          900: '#5d4322',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
