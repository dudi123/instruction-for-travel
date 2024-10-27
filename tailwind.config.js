/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arimo: ['Arimo']
      },
      colors: {
        title: '#212d39',
        headerTitle: '#00CCF2',
        button: '#2b6aff'
      }
    }
  },
  plugins: []
}
