import { AppDispatch } from "@/state/store";
import { useDispatch } from "react-redux";
import { toogleTheme } from "@/state/theme/themeSlice";
import { useEffect } from "react";
import GetTheme, { GetThemeBoolean } from "@/utils/GetTheme";

const ThemeSelector = () => {
  const dispatch = useDispatch<AppDispatch>();
  const themeCheck: boolean = GetThemeBoolean();

  useEffect(() => {}, [themeCheck]);

  return (
    <button
      className={GetTheme("canvas-item w-12 h-12 p-2.75 gap-2.5")}
      onClick={() => dispatch(toogleTheme())}
    >
      {GetThemeBoolean() ? (
        <img className="h-6 w-6" src="src/assets/sun.svg" alt="" />
      ) : (
        <img className="h-6 w-6" src="src/assets/moon.svg" alt="" />
      )}
    </button>
  );
};

export default ThemeSelector;
