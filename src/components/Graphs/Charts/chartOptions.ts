export const lineChart = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    x: {
      display: true,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  tension: 0.5,
};

export const barChart = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,

  scales: {
    y: {
      display: false,
    },
    x: {
      display: true,
      grid: {
        display: false,
      },
      ticks: {
        display: true,
      },
    },
  },
};

export const backgroundChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    x: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  tension: 0.5,
};

export const colors = {
  lineStart: "rgba(116, 116, 242, 0.6)",
  lineEnd: "rgba(116, 116, 242, 0.01)",
  barStart: "rgba(157, 98, 217, 1)",
  barEnd: "rgba(179, 116, 242, 0.01)",
  borderLine: "#7878FF",
  borderBar: "rgba(157, 98, 217, 1)",
};
