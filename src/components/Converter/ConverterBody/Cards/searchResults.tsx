import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  useCards,
  getCardsData,
  AppDispatch,
  setConverterFrom,
  setConverterTo,
} from "@/state";
import { Coin } from "@/utils/DataTypes";

export default function SearchResult({
  cardType,
  hideResults,
}: {
  cardType: "buy" | "sell";
  hideResults: () => void;
}) {
  const cards = useCards();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCardsData());
  }, [dispatch]);

  const handleClick = (card: Coin) => {
    if (cardType === "buy") {
      dispatch(setConverterFrom(card));
    } else {
      dispatch(setConverterTo(card));
    }
    hideResults();
  };

  return (
    <div className="bg-converter-cardBase h-[300px] rounded-2xl p-7 flex flex-col gap-[40px] overflow-auto absolute">
      <ul className="overflow-visible flex flex-col justify-center items-start gap-1">
        {cards.coinsData?.map((card) => (
          <li
            key={card.name}
            onClick={() => handleClick(card)}
            className="hover:opacity-50 w-full"
          >
            <p>{card.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
