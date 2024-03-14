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
          currency: "var(--color-header-currency-text)",
        },
        converter: {
          base: "var(--color-converter-text-base)",
          accent: "var(--color-converter-text-accent)",
          bodyBase: "var(--color-converter-body-text-base)",
          bodyMuted: "var(--color-converter-body-text-muted)",
          cardBase: "var(--color-converter-card-text-base)",
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
          selector: "var(--color-graph-selector-text-base)",
          checked: "var(--color-graph-selector-text-checked)",
        },
        table: {
          base: "var(--color-table-text-base)",
          muted: "var(--color-table-text-muted)",
        },
        electric: {
          base: "var(--color-electric-text-positive)",
          muted: "var(--color-electric-text-negative)",
        },
        portfolio: {
          base: "var(--color-portfolio-text-base)",
          muted: "var(--color-portfolio-text-muted)",
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
        currency: "var(--color-header-currency-bg)",
      },
      converter: {
        base: "var(--color-converter-bg-base)",
        accent: "var(--color-converter-bg-accent)",
        cardBase: "var(--color-converter-card-bg-base)",
        cardMuted: "var(--color-converter-card-bg-muted)",
      },
      card: {
        base: "var(--color-card-bg-base)",
        accent: "var(--color-card-bg-accent)",
      },
      graph: {
        base: "var(--color-graph-bg-base)",
        muted: "var(--color-graph-bg-muted)",
        selector: "var(--color-graph-selector-bg-base)",
        checked: "var(--color-graph-selector-bg-checked)",
      },
      chart: {
        start: "var(--color-chart-line-start)",
        end: "var(--color-chart-line-end)",
      },
      table: {
        base: "var(--color-table-bg-base)",
      },
      portfolio: {
        base: "var(--color-portfolio-bg-base)",
        muted: "var(--color-portfolio-bg-muted)",
        image: "var(--color-portfolio-bg-image)",
      },
    },
    borderColor: {
      header: {
        base: "var(--color-header-border)",
      },
      graph: {
        base: "var(--color-graph-selector-bg)",
      },
      converter: {
        base: "var(--color-converter-border)",
      },
    },
    boxShadow: {
      custom: "4px 4px 20px 8px var(--color-graph-shadow)",
    },
    colors: {},
  },
  plugins: [],
};
