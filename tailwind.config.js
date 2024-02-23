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
        converter: {
          base: "var(--color-converter-text-base)",
          accent: "var(--color-converter-text-accent)",
        },
        card: {
          base: "var(--color-card-text-base)",
          muted: "var(--color-card-text-muted)",
          baseChecked: "var(--color-card-text-checked-muted)",
          mutedChecked: "var(--color-card-text-checked-muted)",
        },
        graph: {
          base: "var(--color-graph-text-base)",
          muted: "var(--color-graph-text-muted)",
          soft: "var(--color-graph-text-soft)",
        },
        electric: {
          base: "var(--color-electric-text-base)",
          muted: "var(--color-electric-text-muted)",
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
      converter: {
        base: "var(--color-converter-bg-base)",
        accent: "var(--color-converter-bg-accent)",
      },
      card: {
        base: "var(--color-card-bg-base)",
        accent: "var(--color-card-bg-accent)",
      },
      graph: {
        base: "var(--color-graph-bg-base)",
        muted: "var(--color-graph-bg-muted)",
      },
    },
    borderColor: {
      header: {
        base: "var(--color-header-border)",
      },
    },

    colors: {},
  },
  plugins: [],
};
