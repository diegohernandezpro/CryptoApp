import { useDispatch } from "react-redux";
import { setCurrency, AppDispatch } from "@/state";

export function Results({ hideResults }: { hideResults: () => void }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (
    currency: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    hideResults();
    dispatch(setCurrency(currency));
  };

  const currencies = ["USD", "GBP", "EUR", "BTC", "ETH"];

  return (
    <ul className="w-[60px] font-mono flex flex-col justify-center items-center cursor-pointer bg-header-muted text-header-base outline-none">
      {currencies.map((c) => (
        <button
          key={c}
          onClick={(event) => handleClick(c, event)}
          className="w-full hover:cursor-pointer hover:bg-header-accent hover:text-lg"
        >
          {c}
        </button>
      ))}
    </ul>
  );
}
