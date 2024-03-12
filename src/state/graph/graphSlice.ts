import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { api } from "@/utils/DataRetriever";
import FETCHING_STATE from "../fetchingState";
import type { DataGraph, TimeFrame } from "@/utils/DataTypes";
import { formatNum } from "@/utils/NumberFormatter";

interface GraphSelectorState {
  status: string;
  errorMsg?: string | null;
  graphTimeFrame: TimeFrame;
  data?: DataGraph;
}

const initialState: GraphSelectorState = {
  status: FETCHING_STATE.IDLE,
  errorMsg: null,
  graphTimeFrame: {
    timeFrame: "1D",
    displayString: "24h",
    days: "1",
    interval: "hourly",
  },
};

export const getGraphData = createAsyncThunk(
  "graph/getGraphData",
  async (_, { getState }) => {
    const { currency } = (getState() as RootState).currency;
    const { graphTimeFrame } = (getState() as RootState).graph;
    const currencyType = currency.toLowerCase();

    const response = await api(
      "/coins/bitcoin/market_chart",
      `?vs_currency=${currencyType}&days=${graphTimeFrame.days}&interval=${graphTimeFrame.interval}`
    );
    const jsonresponse: string = JSON.stringify(response);
    const jsonData = JSON.parse(jsonresponse);
    console.log("🚀 ~ jsonData:", jsonData);

    const prices: number[] = jsonData.prices.map(
      (priceTuple: [number, number]) => priceTuple[1]
    );
    const pricesLabels: number[] = jsonData.prices.map(
      (priceTuple: [number, number]) => new Date(priceTuple[0]).getDate()
    );
    const avgPrice: string = formatNum(
      prices.reduce((a, b) => a + b, 0) / prices.length
    );

    const volumes: number[] = jsonData.total_volumes.map(
      (volumeTuple: [number, number]) => volumeTuple[1]
    );
    const volumeLabels: number[] = jsonData.total_volumes.map(
      (volumeTuple: [number, number]) => new Date(volumeTuple[0]).getDate()
    );
    const avgVolume: string = formatNum(
      volumes.reduce((a, b) => a + b, 0) / volumes.length
    );

    return {
      prices,
      pricesLabels,
      volumes,
      volumeLabels,
      avgPrice,
      avgVolume,
    };
  }
);

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    setSelection(state, action: PayloadAction<TimeFrame>) {
      state.graphTimeFrame = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGraphData.pending, (state) => {
        state.status = FETCHING_STATE.PENDING;
        state.errorMsg = "";
      })
      .addCase(
        getGraphData.fulfilled,
        (state, action: PayloadAction<DataGraph>) => {
          state.status = FETCHING_STATE.FULFILLED;
          state.data = action.payload;
        }
      )
      .addCase(getGraphData.rejected, (state) => {
        state.status = FETCHING_STATE.REJECTED;
        state.errorMsg = "Error Retrieving Chart Data. Please Try Again Later.";
      });
  },
});

export const { setSelection } = graphSlice.actions;

export default graphSlice.reducer;
