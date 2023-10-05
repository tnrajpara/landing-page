/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cal: ["CalSans", "sans-serif"],
      },
      boxShadow: {
        inputShrink: "0 0 5px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
