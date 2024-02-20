import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/utils/DataRetriever";
import FETCHING_STATE from "../fetchingState";
import { RootState } from "../store";
import type { DataTable } from "@/utils/DataTypes";

type Coin = {
  image: string;
  name: string;
  symbol: string;
  price: number;
  percentChange: number;
};

interface CardState {
  status: string;
  errorMsg: string | null;
  coinsData: Coin[] | null;
}

const initialState: CardState = {
  status: FETCHING_STATE.IDLE,
  errorMsg: null,
  coinsData: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = FETCHING_STATE.PENDING;
      })
      .addCase(getData.fulfilled, (state, action: PayloadAction<Coin[]>) => {
        state.status = FETCHING_STATE.FULFILLED;
        state.coinsData = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.status = FETCHING_STATE.REJECTED;
      });
  },
});

export const getData = createAsyncThunk(
  "graphCards/getData",
  async (_, { getState }) => {
    const { currency } = (getState() as RootState).currency;
    const currencyType = currency.toLocaleLowerCase();

    const response = await api(
      "/coins/markets",
      `?vs_currency=${currencyType}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    const jsonresponse = JSON.stringify(response);
    const jsonData = JSON.parse(jsonresponse);

    const formatedCoinArray: Coin[] = jsonData.map((coin: DataTable): Coin => {
      return {
        image: coin.image,
        name: coin.name,
        symbol: coin.symbol,
        price: coin.current_price,
        percentChange: coin.price_change_percentage_24h,
      };
    });
    return formatedCoinArray;
  }
);

export default cardsSlice.reducer;
