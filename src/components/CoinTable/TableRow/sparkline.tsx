import {
  Chart as ChartJS,
  ScriptableContext,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Sparkline({
  data,
  color,
}: {
  data: number[] | undefined;
  color: string;
}) {
  if (!data) return null;
  const colorOpaque: string = color + "20";
  const getLabels = (array: number[] | undefined) => {
    return array?.map((_, index) => index + 1);
  };

  const lineData = () => {
    return {
      labels: getLabels(data),
      datasets: [
        {
          data,
          borderColor: color,
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 37);
            gradient.addColorStop(0, color);
            gradient.addColorStop(0.8, colorOpaque);
            return gradient;
          },
          pointRadius: 0,
          borderWidth: 3,
          fill: true,
        },
      ],
    };
  };

  return (
    <>
      <Line data={lineData()} options={options} width={"120"} height={"37"} />
    </>
  );
}

const options = {
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
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};
