import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "@/utils/DataRetriever";
import FETCHING_STATE from "../fetchingState";
import { RootState } from "../store";
import {
  formatPercentage,
  formatPrice,
  formatSliderPrice,
  formatSparklineData,
} from "@/utils/NumberFormatter";
import type { DataTable, Coin } from "@/utils/DataTypes";

interface TableState {
  status: string;
  errorMsg: string | null;
  coinsData: Coin[] | null;
}

const initialState: TableState = {
  status: FETCHING_STATE.IDLE,
  errorMsg: null,
  coinsData: null,
};

const tableSlice = createSlice({
  name: "table",
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
  "table/getData",
  async (_, { getState }) => {
    const { currency } = (getState() as RootState).currency;
    const currencyType = currency.toLocaleLowerCase();

    const response = await api("/coins/markets", {
      vs_currency: currencyType,
      order: "market_cap_desc",
      per_page: 10,
      page: 1,
      sparkline: false,
    });
    const jsonresponse = JSON.stringify(response);
    const jsonData = JSON.parse(jsonresponse);

    const formatedCoinArray: Coin[] = jsonData.map((coin: DataTable): Coin => {
      return {
        image: coin.image,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: formatPrice(coin.current_price, true),
        percentChange1h: coin.price_change_percentage_1h_in_currency,
        formattedpercentChange1h: formatPercentage(
          coin.price_change_percentage_1h_in_currency,
          false
        ),
        percentChange24h: coin.price_change_percentage_24h_in_currency,
        formattedpercentChange24h: formatPercentage(
          coin.price_change_percentage_24h_in_currency,
          false
        ),
        percentChange7d: coin.price_change_percentage_7d_in_currency,
        formattedpercentChange7d: formatPercentage(
          coin.price_change_percentage_7d_in_currency,
          false
        ),
        totalSupply: formatSliderPrice(coin.total_supply),
        circulatingSupply: formatSliderPrice(coin.circulating_supply),
        marketCap: formatSliderPrice(coin.market_cap),
        totalVolume: formatSliderPrice(coin.total_volume),
        rank: coin.market_cap_rank,
        sparkline: formatSparklineData(coin.sparkline_in_7d.price),
        cirtulatingVsTotalSupply: coin.circulating_supply / coin.total_supply,
        marketCapVsVolume: coin.total_volume / coin.market_cap,
      };
    });
    return formatedCoinArray;
  }
);

export default tableSlice.reducer;
