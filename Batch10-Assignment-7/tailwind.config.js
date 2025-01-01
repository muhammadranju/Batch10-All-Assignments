import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-shadow": "url('/assets/bg-shadow.png')",
        Color: "#E7FE29",
      },
    },
  },
  plugins: [daisyui],
};
