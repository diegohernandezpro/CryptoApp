import { RootState } from "@/state/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { type Coin } from "@/utils/DataTypes";

export default function GraphSummary({ volume = false }: { volume?: boolean }) {
  let content: JSX.Element | null = null;
  const { graphTimeFrame } = useSelector((state: RootState) => state.graph);
  const { coinsData } = useSelector((state: RootState) => state.cards);
  const { symbol } = useSelector((state: RootState) => state.currency);
  const [selectedCoins, setSelectedCoins] = useState<Coin[]>([]);
  const todayDate = new Date().toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (selectedCoins.length === 1) {
    if (!volume) {
      content = (
        <>
          <span className="w-[160px] h-[24px] text-graph-muted">
            {`${selectedCoins[0].name} (${selectedCoins[0].symbol})`}
          </span>
          <span className="w-[160px] h-[68px] flex flex-col gap-[16px]">
            <div className="w-[158px] h-[28px] font-bold leading-7 text-[28px] text-graph-base">
              {`${symbol}${selectedCoins[0].price}`}
            </div>
            <div className="w-[160px] h-[24px] text-graph-soft font-normal text-base leading-6">
              {todayDate}
            </div>
          </span>
        </>
      );
    } else {
      content = (
        <>
          <span className="w-[160px] h-[24px] text-graph-muted">
            {`Volume ${graphTimeFrame.timeFrame}`}
          </span>
          <span className="w-[160px] h-[68px] flex flex-col gap-[16px]">
            <div className="w-[158px] h-[28px] font-bold leading-7 text-[28px] text-graph-base">
              {`Volume price`}
            </div>
            <div className="w-[160px] h-[24px] text-graph-soft font-normal text-base leading-6">
              {todayDate}
            </div>
          </span>
        </>
      );
    }
  }

  useEffect(() => {
    function getSelectedCoins() {
      const coins = coinsData?.filter((coin) => coin.clicked === true);
      typeof coins !== "undefined" && setSelectedCoins(coins);
    }

    getSelectedCoins();
  }, [coinsData]);

  return (
    <div className="w-[160px] h-[116px] gap-6 flex flex-col">{content}</div>
  );
}
