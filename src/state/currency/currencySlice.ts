import { createSlice, PayloadAction } from "@reduxjs/toolkit"
interface CurrencyState {
    currency: string,
    symbol: string,
}

const initialState: CurrencyState = {
    currency: "USD",
    symbol: "$",
  };

enum SYMBOLS {
  USD = "$",
  GBP = "£",
  EUR = "€",
  BTC = "₿",
  ETH = "Ξ",
}

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state,  action: PayloadAction<string>) {
      state.currency = action.payload;
      state.symbol = SYMBOLS[action.payload as keyof typeof SYMBOLS] || "";
    },
  },
});

export const { setCurrency } = currencySlice.actions;

// export const getCurrencySelector = (state: ) => state.currency;

export default currencySlice.reducer;