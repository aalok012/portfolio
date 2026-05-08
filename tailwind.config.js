/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#1B1B1B',
        surface: '#242424',
        yellow:  { DEFAULT: '#F8B400', dim: '#D49A00' },
        red:     { DEFAULT: '#E63946' },
        white:   '#FFFFFF',
      },
    },
  },
  plugins: [],
}
