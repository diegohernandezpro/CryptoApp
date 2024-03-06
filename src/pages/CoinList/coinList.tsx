import { ConverterNav, Graphs, CoinTable } from "@/components";

export default function CoinList() {
  return (
    <div className="body-container">
      <ConverterNav />
      <div className="body-wrapper ">
        <Graphs />
        <CoinTable />
      </div>
    </div>
  );
}
