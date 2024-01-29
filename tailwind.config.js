/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "prim-purple-blue": "#5A5A89",
        "prim-blueish-black": "#14142B",
        "prim-blue": "023AFF",
        "prim-birches": "#01F1E3",
        "grad1-purple": "#7517F8",
        "grad1-pink": "#E323FF",
        "grad2-blue": "#02A4FF",
        "grad2-purple": "#7D40FF",
        "grad3-light-blue": "#4DA1FF",
        "grad3-teal": "#4DFFDF",
        "sec-yellow": "#FFA63F",
        "sec-electric-green": "#5EFF5A",
        "sec-red": "#FF2D2E",
        "sec-purple": "#991BFA",
        "sec-birches": "#01F1E3",
        "sec-black": "#05050F",
      },
    },
  },
  plugins: [],
};
