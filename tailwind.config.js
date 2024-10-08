/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "3/4": "75%",
      },
      transitionProperty: {
        width: "width",
      },
      margin: {
        "10p": "10%",
      },
      padding: {
        "5p": "5%",
        "10p": "10%",
      },
      height: {
        "10p": "10%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
        "60p": "60%",
        "70p": "70%",
        "80p": "80%",
        "90p": "90%",
        "100p": "100%",
      },
      width: {
        "10p": "10%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
        "60p": "60%",
        "70p": "70%",
        "80p": "80%",
        "90p": "90%",
        "100p": "100%",
      },
      boxShadow: {
        'light': '0 4px 6px -1px rgb(255 255 255 / 0.5), 0 2px 4px -2px rgb(255 255 255 / 0.5)',
      },
    },
  },
  plugins: [],
};
