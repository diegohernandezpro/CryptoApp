import { AppDispatch, RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "@/state/theme/themeSlice";
import { useEffect } from "react";

const ThemeSelector = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isDark: boolean = useSelector((state: RootState) => state.theme.isDark);

  useEffect(() => {}, [isDark]);

  return (
    <button
      className="canvas-item w-12 h-12 p-2.75 gap-2.5 rounded-2xl"
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
