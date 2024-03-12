import { RootState, AppDispatch } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { setSelection } from "@/state/graph/graphSlice";
import type { TimeFrame, TimeOptions } from "@/utils/DataTypes";

export default function ConverterTimeSelector() {
  const { graphTimeFrame } = useSelector((state: RootState) => state.graph);
  const dispatch = useDispatch<AppDispatch>();

  const TIME_OPTIONS: TimeOptions = {
    "1D": ["24h", "1", "hourly"],
    "7D": ["7D", "7", "daily"],
    "14D": ["14D", "14", "daily"],
    "1M": ["1M", "30", "daily"],
    "1Y": ["1Y", "365", "daily"],
    ALL: ["ALL", "max", "daily"],
  };

  const handleTimeChange = (time: TimeFrame) => {
    dispatchTimeChange(time);
  };

  const dispatchTimeChange = (time: TimeFrame) => {
    dispatch(setSelection(time));
  };

  return (
    <ul className="graph-selector-container">
      {Object.entries(TIME_OPTIONS).map((option) => {
        const isSelected = graphTimeFrame.timeFrame === option[0];
        return (
          <li
            key={option[0]}
            className={`graph-selector-element ${
              isSelected && "graph-selector-element-checked"
            }`}
            onClick={() =>
              dispatchTimeChange({
                timeFrame: option[0],
                displayString: option[1][0],
                days: option[1][1],
                interval: option[1][2],
              })
            }
          >
            <input
              type="radio"
              id={option[0]}
              name="time"
              value={option[0]}
              className="hidden"
              onChange={() =>
                handleTimeChange({
                  timeFrame: option[0],
                  displayString: option[1][0],
                  days: option[1][1],
                  interval: option[1][2],
                })
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
