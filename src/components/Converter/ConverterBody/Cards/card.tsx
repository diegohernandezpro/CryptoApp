import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/state";
import { formatAmount, formattedStringToNumber } from "@/utils";
import SearchResult from "./searchResults";
import {
  useIsDark,
  useCurrency,
  useCards,
  setAmount,
  setConvertedAmount,
} from "@/state";

export default function Card() {
  const currency = useCurrency();
  const isDark = useIsDark();
  const cards = useCards(); //here get new data when changed currency
  const dispatch = useDispatch<AppDispatch>();
  const [results, setResults] = useState(false);

  const showResults = () => {
    setResults(true);
  };

  const hideResults = () => {
    setResults(false);
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount: string = e.target.value;
    if (!cards.converter.to || !cards.converter.from) return undefined;

    const a = Number(amount);
    const b = formattedStringToNumber(cards.converter.from.price);
    const c = formattedStringToNumber(cards.converter.to.price);

    const product = (a * b) / c;
    const decimalPlaces = product.toFixed(3).toString().split(".")[1].length;
    const displayAmount = formatAmount(product, decimalPlaces);

    dispatch(setAmount(amount));
    dispatch(setConvertedAmount(displayAmount));
  };

  return (
    <div className="converter-card">
      <p className="w-[55px] h-[24px] text-sm leading-6 opacity-80 text-converter-cardBase">
        {`You sell`}
      </p>
      <div className="w-[588px] h-[88px] flex flex-col gap-[24px] ">
        <div className="w-[588px] h-[24px] flex justify-between items-center text-converter-cardBase ">
          <div className="h-[24px] flex justify-center items-center gap-2 ">
            <img
              src={cards.converter.from?.image}
              className="w-6 h-6 flex justify-center items-center"
            />
            <span
              className="h-[16px] text-[20px] leading-[16px] font-medium"
              onClick={showResults}
            >
              {cards.converter.from ? (
                `${cards.converter.from.name} (${cards.converter.from.symbol})`
              ) : (
                <p className="opacity-50 font-normal">Convert...</p>
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
            <input
              type="text"
              placeholder={`${currency.symbol}0.00`}
              onChange={handleChangeAmount}
              value={cards.converter.amount || ""}
              className="flex outline-none bg-converter-cardBase text-[20px] leading-[16px] font-medium text-converter-cardBase text-right"
            />
          </div>
        </div>
        <div className="w-[588px] h-[40px] flex flex-row gap-[10px] justify-between items-center text-converter-cardBase p-2 border-t-[1px] border-converter-base">
          <p className="font-normal text-sm leading-6">
            {cards.converter.from
              ? `1 ${cards.converter.from.symbol} = ${currency.symbol}${cards.converter.from.price}`
              : ""}
          </p>
        </div>
      </div>
      {results && (
        <div className="z-10">
          <SearchResult cardType={"buy"} hideResults={hideResults} />
        </div>
      )}
    </div>
  );
}
