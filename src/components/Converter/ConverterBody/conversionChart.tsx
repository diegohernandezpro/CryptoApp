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

import { Line } from "react-chartjs-2";
import { colors, lineChart } from "./conversionChartOptions";
import { useCards, useGraph } from "@/state";

export function ConversionChart() {
  const cards = useCards();
  const { data: chartsData } = useGraph();

  if (!chartsData) return null;

  const dataClone = { ...chartsData };
  const labels = dataClone.pricesLabels;
  const label = "Price";
  const data = dataClone.prices;
  const borderWidth: number = 3;
  const borderColor = () => {
    return colors.borderLine;
  };

  type Context = "line";

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
          gradient.addColorStop(0, colors.lineStart);
          gradient.addColorStop(0.6, colors.lineEnd);
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

  return (
    <div className="w-[1296px] h-[293px] rounded-xl p-6 gap-[24px] bg-converter-cardBase flex flex-col">
      <div className="h-[24px] gap-[16px] flex flex-row leading-6 text-[20px] text-converter-base">
        <p>{`${cards.converter.from?.name} (${cards.converter.from?.symbol})`}</p>
        <p className="opacity-70">to</p>
        <p>{`${cards.converter.to?.name} (${cards.converter.to?.symbol})`}</p>
      </div>
      <div className="w-[1248px] h-[197px] gap-[8px]">
        <Line
          data={getDataPoints}
          options={lineChart}
          width={"1248"}
          height={"197"}
        />
      </div>
    </div>
  );
}
