import CurrencySelector from "./CurrencySelector";

export default function Header() {
  return (
    <div className="flex h-[48px] justify-between">
      <CurrencySelector />
    </div>
  );
}
