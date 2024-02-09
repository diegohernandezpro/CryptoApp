import CurrencySelector from "./CurrencySelector";
import ThemeSelector from "./ThemeSelector";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export default function Header() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  return (
    <div
      className={[
        "flex h-20 py-4 px-[72px] top-12 w-screen justify-between gap-6 bg-header-base",
        `theme-${isDark ? "galaxy" : "glacier"}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="gap-4 h-12 w-[540px] flex">
        <CurrencySelector />
        <ThemeSelector />
      </span>
    </div>
  );
}
