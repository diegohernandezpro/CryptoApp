import React from "react";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "@/state/cards/cardsSlice";
import { isActive } from "@/state/cards/cardsSlice";

export default function Graphs() {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useSelector((state: RootState) => state.currency);
  const { coinsData } = useSelector((state: RootState) => state.cards);
  const cards = useSelector((state: RootState) => state.cards);
  console.log("🚀 ~ Graphs ~ cards:", cards);
  const [startIndex, setStartIndex] = useState(0);
  const [clickedIndices, setClickedIndices] = useState<number[]>([]);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch, currency]);

  if (!coinsData) return null;

  const dispalyedCoins = coinsData.slice(startIndex, startIndex + 5);

  const showNextCoins = () => {
    if (startIndex + 5 < coinsData.length) {
      setStartIndex(startIndex + 5);
    }
  };

  const handleChange = (index: number) => {
    const newClickedIndices = [...clickedIndices];
    const indexInArray: number = newClickedIndices.indexOf(index);

    if (indexInArray === -1) {
      newClickedIndices.push(index);
    } else {
      newClickedIndices.splice(indexInArray, 1);
    }
    setClickedIndices(newClickedIndices);
    dispatch(isActive({ index, clicked: newClickedIndices.includes(index) }));
  };

  return (
    <div className="graph-container">
      <div className="graph-header">
        <div className="graph-title">
          <p className="graph-paragraph">
            Select the currency to view statistics
          </p>
        </div>
        <ul className="graph-card-wrapper">
          {dispalyedCoins.map((coin, index) => (
            <li key={index} className="graph-card">
              <input
                type="checkbox"
                className="border-2 border-card-muted w-4 h-4"
                checked={clickedIndices.includes(index)}
                onChange={() => handleChange(index)}
              />
              <label>
                <img
                  src={coin.image}
                  className="h-8 w-8"
                  alt={`${coin.name} image`}
                />
                <div className="w-[164px] h-12 gap-1">
                  <div className="w-[160px] h-6 font-medium text-base leading-6 overflow-auto">
                    {`${coin.name} (${coin.symbol.toUpperCase()})`}
                  </div>
                  <div className="w-[164px] h-[18px] gap-[8px] flex justify-center items-center">
                    <span className="w-[96px] h-[18px] text-sm text-card-muted ">
                      {`${coin.price} ${currency.currency.toUpperCase()}`}
                    </span>
                    <span className="-[60px] h-[16px] gap-[4px] flex">
                      <span className="w-4 h-4 flex justify-center items-center">
                        <img
                          src={
                            coin.percentChange > 0
                              ? "src/assets/arrow-price-up.svg"
                              : `src/assets/arrow-price-down.svg`
                          }
                        />
                      </span>
                      <span
                        className={`text-sm leading-4 text-right ${
                          coin.percentChange > 0
                            ? "text-electric-base"
                            : "text-electric-muted"
                        }`}
                      >
                        {coin.formattedPercentChange}
                      </span>
                    </span>
                  </div>
                </div>
              </label>
            </li>
          ))}
        </ul>
        <button onClick={showNextCoins} className="graph-card-button">
          <img src="src/assets/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
    </div>
  );
}
