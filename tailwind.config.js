/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffc8ad",

          secondary: "#56f7ef",

          accent: "#079e91",

          neutral: "#201E24",

          "base-100": "#353940",

          info: "#3D9CF0",

          success: "#17A173",

          warning: "#FAD82E",

          error: "#F94355",
        },
      },
    ],
  },
};
