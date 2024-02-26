import { useState } from "react";

export default function GraphTimeSelector() {
  const [selectedTime, setSelectedTime] = useState("1D");

  const TIME_OPTIONS = {
    "1D": "1D",
    "7D": "7D",
    "14D": "14D",
    "1M": "1M",
    "1Y": "1Y",
    ALL: "ALL",
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value);
  };

  console.log({ selectedTime });

  return (
    <ul className="graph-selector-container">
      {Object.keys(TIME_OPTIONS).map((option) => {
        const isSelected = selectedTime === option;
        return (
          <li
            key={option}
            className={`graph-selector-element ${
              isSelected && "graph-selector-element-checked"
            }`}
            onClick={() => setSelectedTime(option)}
          >
            <input
              type="radio"
              id={option}
              name="time"
              value={option}
              className="hidden"
              onChange={handleTimeChange}
              checked={isSelected}
            />
            <label htmlFor={option} className="cursor-pointer">
              {option}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
