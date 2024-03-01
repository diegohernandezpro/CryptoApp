import {
  Chart as ChartJS,
  CategoryScale,
  ScriptableContext,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line, Bar } from "react-chartjs-2";
import { barChart, lineChart, colors } from "./chartOptions";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export default function Chart({ chartType }: { chartType: "bar" | "line" }) {
  const { data: chartsData } = useSelector((state: RootState) => state.graph);

  if (!chartsData) return null;

  const dataClone = { ...chartsData };
  const labels =
    chartType === "line" ? dataClone.pricesLabels : dataClone.volumeLabels;
  const label = chartType === "line" ? "Price" : "Volume";
  const data = chartType === "line" ? dataClone.prices : dataClone.volumes;
  const borderWidth: number = chartType === "line" ? 3 : 0;
  const borderColor = () => {
    return chartType === "line" ? colors.borderLine : colors.borderBar;
  };

  type Context = "line" | "bar";

  const getDataPoints = {
    labels,
    datasets: [
      {
        label,
        data,
        borderColor,
        backgroundColor: (context: ScriptableContext<Context>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          if (chartType === "line") {
            gradient.addColorStop(0, colors.lineStart);
            gradient.addColorStop(0.6, colors.lineEnd);
          } else {
            gradient.addColorStop(0, colors.barStart);
            gradient.addColorStop(0.6, colors.barEnd);
          }
          return gradient;
        },
        pointRadius: 0,
        borderWidth,
        borderRadius: {
          topLeft: 3,
          topRight: 3,
        },
        fill: true,
      },
    ],
  };

  let content = <></>;

  switch (chartType) {
    case "line":
      content = (
        <Line
          data={getDataPoints}
          options={lineChart}
          width={"584"}
          height={"193"}
        />
      );
      break;
    case "bar":
      content = (
        <Bar
          data={getDataPoints}
          options={barChart}
          width={"584"}
          height={"193"}
        />
      );
      break;
    default:
      content = <></>;
      break;
  }

  return (
    <div className="w-[584px] h-[216px] gap-2 overflow-hidden">{content}</div>
  );
}
