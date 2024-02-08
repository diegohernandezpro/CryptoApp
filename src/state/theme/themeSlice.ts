import { createSlice } from "@reduxjs/toolkit";

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

export default themeSlice.reducer;
