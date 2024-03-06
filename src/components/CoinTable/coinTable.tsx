import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTableData, RootState, AppDispatch } from "@/state";
import TableHeader from "./TableHeader/tableHeader";
import TableRow from "./TableRow/tableRow";
import type { Coin } from "@/utils/DataTypes";

export default function CoinTable() {
  const dispatch = useDispatch<AppDispatch>();
  const table = useSelector((state: RootState) => state.table);

  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch]);

  return (
    <div className="w-[1296px] h-[816px] gap-2 overflow-auto flex flex-col mb-8">
      <TableHeader />
      {table.coinsData?.map((coin: Coin) => (
        <TableRow key={coin.rank} coin={coin} />
      ))}
    </div>
  );
}
