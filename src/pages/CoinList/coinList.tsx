import Converter from "@/components/Converter";
import Graphs from "@/components/Graphs";
import CoinTable from "@/components/CoinTable";

export default function CoinList() {
  return (
    <div className="body-container">
      <Converter />
      <div className="body-wrapper ">
        <Graphs />
        <CoinTable />
      </div>
    </div>
  );
}
