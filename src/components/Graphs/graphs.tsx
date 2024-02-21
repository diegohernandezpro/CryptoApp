import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "@/state/cards/cardsSlice";

export default function Graphs() {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useSelector((state: RootState) => state.currency);
  const { coinsData } = useSelector((state: RootState) => state.cards);
  const [startIndex, setStartIndex] = useState(0);
  const [clicked, setCliked] = useState(false);

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

  return (
    <div className="graph-container">
      <div className="graph-header">
        <div className="graph-title">
          <p className="graph-paragraph">
            Select the currency to view statistics
          </p>
        </div>
        <ul className="graph-card-wrapper">
          {dispalyedCoins.map((coin) => (
            <li
              key={coin.name}
              // className={`${clicked ? "graph-card-clicked" : "graph-card"}`}
              className="graph-card"
              onClick={() => setCliked(!clicked)}
            >
              <img
                src={coin.image}
                className="h-8 w-8"
                alt={`${coin.name} image`}
              />
              <div className="w-[164px] h-12 gap-1">
                <div className="w-[160px] h-6 font-medium text-base leading-6">
                  {`${coin.name} (${coin.symbol.toUpperCase()})`}
                </div>
                <div className="w-[164px] h-[18px] gap-[8px] flex justify-center items-center border-2 border-[red]">
                  <span className="w-[96px] h-[18px] text-sm text-card-muted border border-[green]">
                    {`${coin.price} ${currency.currency.toUpperCase()}`}
                  </span>
                  <span className="-[60px] h-[16px] gap-[4px] flex">
                    <span className="w-4 h-4 flex justify-center items-center">
                      <img
                        src="src/assets/arrow-price-up.svg"
                        className="price-arrow"
                      />
                    </span>
                    <span className="text-sm leading-4 text-right">
                      {`${2.35}%`}
                    </span>
                    {/* coin.percentChange format properly */}
                  </span>
                </div>
              </div>
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
