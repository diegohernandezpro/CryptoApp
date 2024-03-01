export default function TableRow() {
  return (
    <div className="table-element">
      <span className="w-[16px] h-[24px] gap-2.5 leading-6 text-table-muted border-2 border-[orange]">
        1
      </span>
      <span className="w-[208px] h-[32px] gap-4 text-table-base border-2 border-[orange] flex flex-row">
        <img src="src/assets/bitcoin.svg" alt="table-element-image" />
        <span className="w-[160px] h-[24px] leading-6  font-medium">
          Bitcoin (BTC)
        </span>
      </span>
      <span className="w-[80px] h-[24px] font-medium leading-6 text-table-base border-2 border-[orange]">
        $29,000
      </span>
      <span className="table-price-element border-2 border-[orange]">
        <span className="w-4 h-4 flex justify-center items-center ">
          <img src="src/assets/arrow-price-up.svg" />
        </span>
        <span className="table-price-element-text">2.35%</span>
      </span>

      <span className="table-price-element border-2 border-[orange]">
        <span className="w-4 h-4 flex justify-center items-center">
          <img src="src/assets/arrow-price-up.svg" />
        </span>
        <span className="table-price-element-text">11.35%</span>
      </span>

      <span className="table-price-element border-2 border-[orange]">
        <span className="w-4 h-4 flex justify-center items-center">
          <img src="src/assets/arrow-price-up.svg" />
        </span>
        <span className="table-price-element-text">8.41%</span>
      </span>
    </div>
  );
}
