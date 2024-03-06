import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import Infographic from "@/components/Infographic";
import Header from "@/components/Header";
import CoinList from "@/pages/CoinList";
import CoinPage from "@/pages/CoinPage";
import Portfolio from "@/pages/Portfolio";
import ConverterPage from "@/pages/ConverterPage";

export default function App() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

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
