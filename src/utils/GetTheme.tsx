import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export default function GetTheme(custom?: string): string {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const themeMode: string = isDark ? "galaxy" : "glacier";

  return `${custom} theme-${themeMode}`;
}

export function GetThemeBoolean(): boolean {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  return isDark ? true : false;
}
