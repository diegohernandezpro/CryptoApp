import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "@/state/currency/currencySlice";
import { RootState, AppDispatch } from "@/state/store";
import React from "react";

export default function CurrencySelector() {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useSelector((state: RootState) => state.currency);
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  return (
    <div
      className={[
        "canvas-item flex gap-2 py-3 px-4 justify-around items-center w-[108px]",
        `theme-${isDark ? "galaxy" : "glacier"}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
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
        className="font-mono appearance-none cursor-pointer bg-skin-base text-header-base"
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
      <img src="src/assets/down-selector-arrow.svg" alt="down-arrow-icon" />
    </div>
  );
}
