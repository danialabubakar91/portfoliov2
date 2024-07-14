/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '3/4':'75%',
      },
      transitionProperty: {
        'width': 'width',
      },
      margin: {
        '10p': '10%',
      },
      padding: {
        '5p': '5%',
        '10p': '10%',
      },
      width: {
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',

      }
    },
  },
  plugins: [],
}