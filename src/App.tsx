import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useCurrency, useIsDark } from "./state";
import { Header, Infographic } from "@/components";
import { CoinList, CoinPage, Portfolio, ConverterPage } from "@/pages";

export default function App() {
  const isDark = useIsDark();
  const currency = useCurrency();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {}, [currency]);

  return (
    <div className="app-css">
      <span>
        <Infographic />
        <Header />
      </span>
      <Routes>
        <Route path="/" element={<CoinList />} />
        <Route path="/converter" element={<ConverterPage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route exact={true} path="/search" element={<SearchPage />} />
          <Route path="*" element={<ErrorAPICallPage />} />  */}
      </Routes>
    </div>
  );
}
