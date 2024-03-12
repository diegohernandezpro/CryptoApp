import { useEffect, useState } from "react";
import { Results } from "./results";
import { useIsDark, useCurrency } from "@/state";

export default function CurrencySelector() {
  const [results, setResults] = useState(false);
  const isDark = useIsDark();
  const currency = useCurrency();

  const showResults = () => {
    setResults(true);
  };

  const hideResults = () => {
    setResults(false);
  };

  const toggleResults = () => {
    setResults(!results);
  };

  useEffect(() => {}, [results]);

  return (
    <div
      className="z-10 h-full flex flex-col items-center"
      onClick={() => toggleResults()}
    >
      <div
        className={`canvas-item flex flex-row gap-2 py-3 px-2 justify-around items-center w-[108px] hover:shadow-custom`}
        onClick={() => showResults()}
      >
        <div className="w-6 h-6 rounded-2xl flex justify-center items-center border-2 p-3 border-none bg-header-currency text-header-currency">
          {currency.symbol}
        </div>
        <p className="text-header-muted">{currency.currency}</p>
        {!results ? (
          <img
            src={
              isDark
                ? "src/assets/down-arrow-currency-galaxy.svg"
                : "src/assets/down-arrow-currency-glacier.svg"
            }
            alt="down-arrow-icon"
          />
        ) : (
          <img
            src={
              isDark
                ? "src/assets/down-arrow-currency-galaxy.svg"
                : "src/assets/down-arrow-currency-glacier.svg"
            }
            className="rotate-180"
          />
        )}
      </div>
      {results && <Results hideResults={hideResults} />}
    </div>
  );
}
