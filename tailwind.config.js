/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#e6b34a',
          50:  '#fff8e6',
          100: '#f5cf7a',
          600: '#b8862c',
          700: '#a47a23',
          800: '#6b4d12',
        },
        ink: {
          0: '#000',
          1: '#0a0a0a',
          2: '#111',
          3: '#1a1612',
        },
      },
      fontFamily: {
        display: ['Anton', 'Inter', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        script:  ['Allura', 'cursive'],
      },
    },
  },
  plugins: [],
}
