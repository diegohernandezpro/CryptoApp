import CurrencySelector from "./CurrencySelector";
import ThemeSelector from "./ThemeSelector";

export default function Header() {
  return (
    <div className="flex h-[48px] justify-center">
      <CurrencySelector />
      <ThemeSelector />
    </div>
  );
}
