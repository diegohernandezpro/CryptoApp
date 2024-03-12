import { AppDispatch } from "@/state/store";
import { useDispatch } from "react-redux";
import { toogleTheme } from "@/state/theme/themeSlice";
import { useEffect } from "react";
import { useIsDark } from "@/state";

const ThemeSelector = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isDark = useIsDark();
  useEffect(() => {}, [isDark]);

  return (
    <button
      className="canvas-item w-12 h-12 p-2.75 gap-2.5 rounded-2xl hover:shadow-custom"
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
