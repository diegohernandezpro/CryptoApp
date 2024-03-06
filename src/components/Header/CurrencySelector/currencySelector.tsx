import React from "react";
import { useDispatch } from "react-redux";
import { setCurrency, useCurrency } from "@/state/currency/currencySlice.tsx";
import { AppDispatch } from "@/state/store";
import { useIsDark } from "@/state/theme/themeSlice";

export default function CurrencySelector() {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useCurrency();
  const isDark = useIsDark();

  // const handleClick = () => {
  //   console.log("currency element clicked");
  // };

  return (
    <div className="canvas-item flex gap-2 py-3 px-4 justify-around items-center w-[108px] hover:shadow-custom">
      <img
        src={
          isDark
            ? "src/assets/currency-icon-galaxy.svg"
            : "src/assets/currency-icon-glacier.svg"
        }
        alt="currency-selector-icon"
        className="w-6 h-6"
      />
      <select
        className="font-mono appearance-none cursor-pointer bg-header-muted text-header-base outline-none   w-[108px]"
        value={currency.currency}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(setCurrency(e.target.value))
        }
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
      </select>
      <img
        src={
          isDark
            ? "src/assets/down-arrow-currency-galaxy.svg"
            : "src/assets/down-arrow-currency-glacier.svg"
        }
        alt="down-arrow-icon"
      />
    </div>
  );
}
