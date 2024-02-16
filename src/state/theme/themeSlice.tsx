import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleTheme(state) {
      state.isDark = !state.isDark;
    },
  },
});

export const { toogleTheme } = themeSlice.actions;

export const useIsDark = () => {
  return useSelector((state: RootState) => state.theme.isDark);
};

export default themeSlice.reducer;
