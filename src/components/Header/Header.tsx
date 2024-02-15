import CurrencySelector from "./CurrencySelector";
import ThemeSelector from "./ThemeSelector";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import AppName from "./AppName";
import GetTheme from "@/utils/GetTheme";

export default function Header() {
  return (
    <div
      className={GetTheme(
        "flex h-20 py-4 px-[72px] top-12 left-[72px] w-screen justify-between gap-6 bg-header-base"
      )}
    >
      <AppName />
      <Navigation />

      <span className="gap-4 h-12 w-[540px] flex">
        <SearchBar />
        <CurrencySelector />
        <ThemeSelector />
      </span>
    </div>
  );
}
