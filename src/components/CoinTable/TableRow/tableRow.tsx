import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import Slider from "../Slider";
import ColorDot from "../Slider/colorDot";
import Sparkline from "../TableRow/sparkline";
import { Colors } from "./colors";
import type { Coin } from "@/utils/DataTypes";

export default function TableRow({ coin }: { coin: Coin }) {
  const currency = useSelector((state: RootState) => state.currency);

  const colorIndex: number =
    (coin.rank && Math.floor(coin.rank % Colors.length)) || 0;
  const color: string = Colors[colorIndex];

  return (
    <div className="table-element">
      <span className="w-[16px] h-[24px] gap-2.5 leading-6 text-table-muted">
        {coin.rank}
      </span>
      <span className="w-[208px] h-[32px] gap-4 text-table-base flex flex-row justify-center items-center">
        <img src={coin.image} alt="table-element-image" className="w-8 h-8" />
        <span className="w-[160px] h-[24px] leading-6  font-medium overflow-auto">
          {coin.name} ({coin.symbol})
        </span>
      </span>
      <span className="w-[80px] h-[24px] font-medium leading-6 text-table-base ">
        {`${currency.symbol}${coin.price}`}
      </span>
      <span className="table-price-element">
        <span className="w-4 h-4 flex justify-center items-center">
          <img
            src={
              coin.percentChange1h && coin.percentChange1h > 0
                ? "src/assets/arrow-price-up.svg"
                : "src/assets/arrow-price-down.svg"
            }
          />
        </span>
        <span
          className={`table-price-element-text ${
            coin.percentChange1h && coin.percentChange1h > 0
              ? "text-[var(--color-electric-text-positive)]"
              : "text-[var(--color-electric-text-negative)]"
          }`}
        >
          {coin.formattedpercentChange1h}
        </span>
      </span>

      <span className="table-price-element ">
        <span className="w-4 h-4 flex justify-center items-center">
          <img
            src={
              coin.percentChange24h && coin.percentChange24h > 0
                ? "src/assets/arrow-price-up.svg"
                : "src/assets/arrow-price-down.svg"
            }
          />
        </span>
        <span
          className={`table-price-element-text ${
            coin.percentChange24h && coin.percentChange24h > 0
              ? "text-[var(--color-electric-text-positive)]"
              : "text-[var(--color-electric-text-negative)]"
          }`}
        >
          {coin.formattedpercentChange24h}
        </span>
      </span>

      <span className="table-price-element ">
        <span className="w-4 h-4 flex justify-center items-center">
          <img
            src={
              coin.percentChange7d && coin.percentChange7d > 0
                ? "src/assets/arrow-price-up.svg"
                : "src/assets/arrow-price-down.svg"
            }
          />
        </span>
        <span
          className={`table-price-element-text ${
            coin.percentChange7d && coin.percentChange7d > 0
              ? "text-[var(--color-electric-text-positive)]"
              : "text-[var(--color-electric-text-negative)]"
          }`}
        >
          {coin.formattedpercentChange7d}
        </span>
      </span>

      <span className="w-[228px] h-[26px] gap-1 flex flex-col overflow-hidden">
        <span className="w-[228px] h-[16px] flex justify-between ">
          <span className="w-fit h-[16px] gap-1 flex justify-center items-center">
            <ColorDot color={color} />
            <span className="w-fit h-[16px] text-xs leading-[15.31px] text-table-base">
              {`${currency.symbol}${coin.totalVolume}`}
            </span>
          </span>
          <span className="w-fit h-[16px] gap-1 flex justify-center items-center">
            <span className="opacity-50">
              <ColorDot color={color} />
            </span>
            <span className="w-fit h-[16px] text-xs leading-[15.31px] text-table-base">
              {`${currency.symbol}${coin.marketCap}`}
            </span>
          </span>
        </span>
        <Slider color={color} percent={coin.marketCapVsVolume} />
      </span>

      <span className="w-[228px] h-[26px] gap-1 flex flex-col overflow-hidden">
        <span className="w-[228px] h-[16px] flex justify-between ">
          <span className="w-fit h-[16px] gap-1 flex justify-center items-center">
            <ColorDot color={color} />
            <span className="w-fit h-[16px] text-xs leading-[15.31px] text-table-base">
              {`${currency.symbol}${coin.circulatingSupply}`}
            </span>
          </span>
          <span className="w-fit h-[16px] gap-1 flex justify-center items-center">
            <span className="opacity-50">
              <ColorDot color={color} />
            </span>
            <span className="w-fit h-[16px] text-xs leading-[15.31px] text-table-base">
              {`${currency.symbol}${coin.totalSupply}`}
            </span>
          </span>
        </span>
        <Slider color={color} percent={coin.cirtulatingVsTotalSupply} />
      </span>

      <span className="w-[120px] h-[37px] overflow-visible">
        <Sparkline data={coin.sparkline} color={color} />
      </span>
    </div>
  );
}
