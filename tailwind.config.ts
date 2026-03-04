import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f4f5f7',
          100: '#dfe3e8',
          300: '#b6bec8',
          500: '#8d99a8',
          700: '#4f5c6f',
          900: '#1c2633'
        },
        accent: '#d4af37'
      },
      boxShadow: {
        premium: '0 24px 60px -28px rgba(16,24,40,0.45)'
      }
    }
  },
  plugins: []
} satisfies Config;
