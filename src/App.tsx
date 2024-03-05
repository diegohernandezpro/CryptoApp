import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import Infographic from "@/components/Infographic";
import Header from "@/components/Header";
import Converter from "@/components/Converter";
import Graphs from "./components/Graphs";
import CoinTable from "./components/CoinTable";

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
      <div className="body-container">
        {/* <Routes>
          <Route exact="true" path="/" element={<CoinList />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route exact="true" path="/portfolio" element={<Portfolio />} />
          <Route exact="true" path="/search" element={<SearchPage />} />
          <Route path="*" element={<ErrorAPICallPage />} />
        </Routes> */}
        <Converter />
        <div className="body-wrapper ">
          <Graphs />
          <CoinTable />
        </div>
      </div>
    </div>
  );
}
