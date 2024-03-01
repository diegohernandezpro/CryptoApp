import TableHeader from "./TableHeader/tableHeader";
import TableRow from "./TableRow/tableRow";

export default function CoinTable() {
  return (
    <div className="w-[1296px] h-[816px] gap-2">
      <TableHeader />
      <TableRow />
    </div>
  );
}
