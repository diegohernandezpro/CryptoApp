import { useDispatch } from "react-redux";
import { AppDispatch, useCards } from "@/state";
import Card from "./card";

export default function ConverterBody() {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useCards();
  const converterFrom = cards.converter.from;
  const converterTo = cards.converter.to;

  return (
    <div className="converter-body">
      <span className="w-[1296px] h-[277px] flex flex-col gap-[24px]">
        <div className="w-[253px] h-[53px] gap-2 flex flex-col">
          <span className="w-[253px] h-[24px] text-xl leading-6 font-medium text-converter-bodyBase">
            Online currency converter
          </span>
          <span className="w-[132px] h-[21px] font-normal leading-[20.42px] text-converter-bodyMuted">
            09/29/2023 14:15
          </span>
        </div>
        <div className="w-[1296px] h-[200px] gap-[24px] flex flex-row">
          <Card cardType="buy" coin={converterFrom} />
          <Card cardType="sell" coin={converterTo} />
        </div>
      </span>
      <span className="w-[1296px] h-[375px] gap-[40px] border-2 border-[yellow]"></span>
      <span className="w-[463px] h-[42px] gap-[8px] rounded-lg p-1 border-2 border-[yellow]"></span>
    </div>
  );
}
