import CurrencySelector from "./CurrencySelector";
import ThemeSelector from "./ThemeSelector";
import SearchBar from "./SearchBar";
import GetTheme from "@/utils/GetTheme";

export default function Header() {
  return (
    <div
      className={GetTheme(
        "flex h-20 py-4 px-[72px] top-12 left-[72px] w-screen justify-between gap-6 bg-header-base"
      )}
    >
      <div className="h-12 w-[265px] flex gap-6 ">
        <span
          className={GetTheme(
            "w-[110px] h-12 text-header-base flex justify-center items-center"
          )}
        >
          Home
        </span>
        <span
          className={GetTheme(
            "w-[131px] h-12 text-header-base flex justify-center items-center"
          )}
        >
          Portfolio
        </span>
      </div>

      <div className="gap-4 h-12 w-[540px] flex">
        <SearchBar />
        <CurrencySelector />
        <ThemeSelector />
      </div>
    </div>
  );
}
