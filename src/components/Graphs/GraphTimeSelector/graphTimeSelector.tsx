import { RootState, AppDispatch } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { setSelection } from "@/state/graph/graphSlice";

export default function GraphTimeSelector() {
  const { graphTimeFrame } = useSelector((state: RootState) => state.graph);
  console.log("🚀 ~ graphTimeFrame:", graphTimeFrame);
  const dispatch = useDispatch<AppDispatch>();

  const TIME_OPTIONS = {
    "1D": "24h",
    "7D": "7D",
    "14D": "14D",
    "1M": "1M",
    "1Y": "1Y",
    ALL: "ALL",
  };

  const handleTimeChange = (time: { timeFrame: string; dayFrame: string }) => {
    dispatchTimeChange(time);
  };

  const dispatchTimeChange = (time: {
    dayFrame: string;
    timeFrame: string;
  }) => {
    dispatch(setSelection(time));
  };

  return (
    <ul className="graph-selector-container">
      {Object.entries(TIME_OPTIONS).map((option) => {
        console.log("🚀 ~ {Object.entries ~ option:", option);
        const isSelected = graphTimeFrame.dayFrame === option[0];
        return (
          <li
            key={option[1]}
            className={`graph-selector-element ${
              isSelected && "graph-selector-element-checked"
            }`}
            onClick={() =>
              dispatchTimeChange({ dayFrame: option[0], timeFrame: option[1] })
            }
          >
            <input
              type="radio"
              id={option[0]}
              name="time"
              value={option[0]}
              className="hidden"
              onChange={() =>
                handleTimeChange({ dayFrame: option[0], timeFrame: option[1] })
              }
              checked={isSelected}
            />
            <label htmlFor={option[0]} className="cursor-pointer">
              {option[0]}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
