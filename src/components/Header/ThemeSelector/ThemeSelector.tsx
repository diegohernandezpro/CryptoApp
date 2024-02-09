import { AppDispatch, RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { toogleTheme } from "@/state/theme/themeSlice";
import { useEffect } from "react";

const ThemeSelector = () => {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {}, [isDark]);

  return (
    <button
      className={[
        "canvas-item w-12 h-12 p-2.75 gap-2.5",
        `theme-${isDark ? "galaxy" : "glacier"}`,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => dispatch(toogleTheme())}
    >
      {isDark ? (
        <img className="h-6 w-6" src="src/assets/sun.svg" alt="" />
      ) : (
        <img className="h-6 w-6" src="src/assets/moon.svg" alt="" />
      )}
    </button>
  );
};

export default ThemeSelector;
