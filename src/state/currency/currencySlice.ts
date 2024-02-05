import { createSlice } from "@reduxjs/toolkit"
// import { api } from "@/utils/DataRetriever";
// import { FetchingStates } from "@/utils/FetchingStates";
// import { formatNum } from "@/utils/NumberFormatter";

interface CurrencyState {
    type: string,
    symbol: string,
}

const initialState: CurrencyState = {
    type: "USD",
    symbol: "$",
  };

enum CURRENCYSMBOLS{
  USD = "$",
  GBP = "£",
  EUR = "€",
  BTC = "₿",
  ETH = "Ξ",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action) {
      state.type = action.payload;
      state.symbol = currencySymbols[action.payload] || "";
    },
  },
});

export const { setCurrency } = currencySlice.actions;

// export const getCurrencySelector = (state) => state.currency;

export default currencySlice.reducer;