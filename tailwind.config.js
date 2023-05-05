/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
    },
    extend: {
      colors: {
        primary: "hsl(220, 98%, 61%)",
        "blue-gradient": "hsl(192, 100%, 67%)",
        "pink-gradient": "hsl(280, 87%, 65%)",
        "grayish-100": "hsl(0, 0%, 98%)",
        "grayish-200": "hsl(236, 33%, 92%)",
        "grayish-300": "hsl(234, 39%, 85%)",
        "grayish-400": "hsl(236, 9%, 61%)",
        "grayish-500": "hsl(234, 11%, 52%)",
        "grayish-600": "hsl(233, 14%, 35%)",
        "grayish-700": "hsl(235, 19%, 35%)",
        "grayish-800": "hsl(237, 14%, 26%)",
        "grayish-900": "hsl(235, 24%, 19%)",
        "grayish-1000": "hsl(235, 21%, 11%)",
      },
    },
  },
  plugins: [],
};
