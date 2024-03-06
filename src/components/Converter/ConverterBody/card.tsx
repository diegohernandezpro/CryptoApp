import { useState } from "react";
// import { api } from "@/utils/DataRetriever";
import type { Coin } from "@/utils/DataTypes";
import SearchResult from "./searchResults";
import { useIsDark, useCurrency } from "@/state";

export default function Card({
  cardType,
  coin,
}: {
  cardType: "buy" | "sell";
  coin?: Coin;
}) {
  const currency = useCurrency();
  const isDark = useIsDark();
  const [results, showResults] = useState(false);

  const handleClick = () => {
    showResults(!results);
  };

  return (
    <div className="converter-card" onClick={handleClick}>
      <p className="w-[55px] h-[24px] text-sm leading-6 opacity-80 text-converter-cardBase">
        {`You ${cardType}`}
      </p>
      <div className="w-[588px] h-[88px] flex flex-col gap-[24px] ">
        <div className="w-[588px] h-[24px] flex justify-between items-center text-converter-cardBase ">
          <div className="h-[24px] flex justify-center items-center gap-2 ">
            <img
              src="src/assets/bitcoin.svg"
              className="w-6 h-6 flex justify-center items-center"
            />
            <span className="h-[16px] text-[20px] leading-[16px] font-medium">
              {coin ? (
                `${coin.name} (${coin.symbol})`
              ) : cardType === "buy" ? (
                <p className="opacity-50 font-normal">Convert...</p>
              ) : (
                <p className="opacity-50 font-normal">To...</p>
              )}
            </span>
            {isDark ? (
              !results ? (
                <img src="src/assets/converter-card-arrow-galaxy.svg" />
              ) : (
                <img
                  src="src/assets/converter-card-arrow-galaxy.svg"
                  className="rotate-180"
                />
              )
            ) : !results ? (
              <img src="src/assets/converter-card-arrow-glacier.svg" />
            ) : (
              <img
                src="src/assets/converter-card-arrow-glacier.svg"
                className="rotate-180"
              />
            )}
          </div>
          <div className="h-[16px] text-[20px] leading-[16px] font-medium flex justify-center items-center">
            amount
          </div>
        </div>
        <div className="w-[588px] h-[40px] flex flex-row gap-[10px] justify-between items-center text-converter-cardBase p-2 border-t-[1px] border-converter-base">
          <p className="font-normal text-sm leading-6">
            {coin ? `1 ${coin.symbol} = ${currency.symbol}${coin.price}` : ""}
          </p>
        </div>
      </div>
      {results && (
        <div className="z-10">
          <SearchResult />
        </div>
      )}
    </div>
  );
}
