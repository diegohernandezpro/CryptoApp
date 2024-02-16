import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import Infographic from "@/components/Infographic";
import Header from "@/components/Header";

export default function App() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="app-css">
      <Infographic />
      <Header />
    </div>
  );
}
