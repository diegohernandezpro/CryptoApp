import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCards, getCardsData, AppDispatch } from "@/state";

export default function SearchResult() {
  const cards = ();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCardsData());
  }, [dispatch]);

  return (
    <div className="bg-converter-cardBase h-[300px] rounded-2xl p-7 flex flex-col gap-[40px]">
      <ul>
        {cards.cardsData?.map((card) => (
          <li key={card.name}>
            <p>{card.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
