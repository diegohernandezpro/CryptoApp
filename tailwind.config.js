/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
      },
      textColor: {
        info: {
          base: "var(--color-info-text-base)",
          muted: "var(--color-info-text-muted)",
        },
        header: {
          base: "var(--color-header-text-base)",
          muted: "var(--color-header-text-muted)",
        },
      },
    },
    backgroundColor: {
      skin: { base: "var(--color-skin-base)" },
      info: {
        base: "var(--color-info-base)",
      },
      header: {
        base: "var(--color-header-bg-base)",
        muted: "var(--color-header-bg-muted)",
        accent: "var(--color-header-bg-accent)",
      },
    },
    borderColor: {
      skin: {},
      info: {},
      header: {
        base: "var(--color-header-border)",
      },
    },
    colors: {},
  },

  plugins: [],
};

//in process of not having to write isDark everytime there is theme change.

// "prim-purple-blue": " #6A6A9F",
//       "prim-blueish-black": "#191932",
//       "prim-blue": "023AFF",
//       "prim-birches": "#01F1E3",
//       "grad1-purple": "#7517F8",
//       "grad1-pink": "#E323FF",
//       "grad2-blue": "#02A4FF",
//       "grad2-purple": "#7D40FF",
//       "grad3-light-blue": "#4DA1FF",
//       "grad3-teal": "#4DFFDF",
//       "sec-yellow": "#FFA63F",
//       "sec-electric-green": "#5EFF5A",
//       "sec-blue-blacksih": "#191925",
//       "sec-red": "#FF2D2E",
//       "sec-purple": "#991BFA",
//       "sec-birches": "#01F1E3",
//       "sec-black": "#05050F",
//       "theme-dark-border": "#232336",
