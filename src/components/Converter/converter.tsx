import { useState } from "react";

export default function Converter() {
  const [selected, setSelected] = useState("Coins");

  const isSelected = (buttonName: string): boolean => {
    return selected === buttonName;
  };

  return (
    <div className="w-[506px] h-[53px] rounded-md p-1 flex bg-header-muted">
      <button
        onClick={() => setSelected("Coins")}
        className={`${
          isSelected("Coins") ? "converter-button-active " : ""
        } converter-button`}
      >
        Coins
      </button>
      <button
        onClick={() => setSelected("Converter")}
        className={`${
          isSelected("Converter") ? "converter-button-active " : ""
        } converter-button px-8`}
      >
        Converter
      </button>
    </div>
  );
}
