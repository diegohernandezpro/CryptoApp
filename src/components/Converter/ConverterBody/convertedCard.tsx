import { useState } from "react";
import SearchResult from "./searchResults";
import { useIsDark, useCurrency, useCards } from "@/state";

export default function ConvertedCard() {
  const currency = useCurrency();
  const isDark = useIsDark();
  const cards = useCards();
  const [results, setResults] = useState(false);

  const showResults = () => {
    setResults(true);
  };

  const hideResults = () => {
    setResults(false);
  };

  return (
    <div className="converter-card">
      <p className="w-[55px] h-[24px] text-sm leading-6 opacity-80 text-converter-cardBase">
        {`You buy`}
      </p>
      <div className="w-[588px] h-[88px] flex flex-col gap-[24px] ">
        <div className="w-[588px] h-[24px] flex justify-between items-center text-converter-cardBase ">
          <div className="h-[24px] flex justify-center items-center gap-2 ">
            <img
              src={cards.converter.to?.image}
              className="w-6 h-6 flex justify-center items-center"
            />
            <span
              className="h-[16px] text-[20px] leading-[16px] font-medium"
              onClick={showResults}
            >
              {cards.converter.to ? (
                `${cards.converter.to.name} (${cards.converter.to.symbol})`
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
            <div>
              {cards.converter.convertedAmount
                ? `${currency.symbol}${cards.converter.convertedAmount}`
                : `${currency.symbol}0.00`}
            </div>
          </div>
        </div>
        <div className="w-[588px] h-[40px] flex flex-row gap-[10px] justify-between items-center text-converter-cardBase p-2 border-t-[1px] border-converter-base">
          <p className="font-normal text-sm leading-6">
            {cards.converter.to
              ? `1 ${cards.converter.to.symbol} = ${currency.symbol}${cards.converter.to.price}`
              : ""}
          </p>
        </div>
      </div>
      {results && (
        <div className="z-10">
          <SearchResult cardType={"sell"} hideResults={hideResults} />
        </div>
      )}
    </div>
  );
}
