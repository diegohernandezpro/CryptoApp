export default function TableHeader() {
  return (
    <div className="table-header sticky">
      <span className="w-[15px] h-[18px] gap-2.5">#</span>
      <span className="w-[208px] h-[18px] gap-2.5">Name</span>
      <span className="w-[80px] h-[18px] gap-2.5">Price</span>
      <span className="w-[72px] h-[18px] gap-2.5">1h%</span>
      <span className="w-[72px] h-[18px] gap-2.5">24h%</span>
      <span className="w-[72px] h-[18px] gap-2.5">7d%</span>
      <span className="w-[228px] h-[18px] gap-2.5">Volume / Market Cap</span>
      <span className="w-[228px] h-[18px] gap-2.5">
        Circulating / Total supply
      </span>
      <span className="w-[120px] h-[18px] gap-2.5">Last 7 days</span>
    </div>
  );
}
