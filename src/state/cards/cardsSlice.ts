import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/utils/DataRetriever";
import FETCHING_STATE from "../fetchingState";
import { RootState } from "../store";

type Data = {
  // numCoins: string;
};

interface CardState {
  status: string;
  errorMsg: string | null;
  coinsData: Data | null;
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
    builder;
    // .addCase(getData.pending, (state) => {
    //   state.status = FETCHING_STATE.PENDING;
    // })
    // .addCase(getData.fulfilled, (state, action: PayloadAction<Data>) => {
    //   state.status = FETCHING_STATE.FULFILLED;
    //   state.coinsData = action.payload;
    // })
    // .addCase(getData.rejected, (state) => {
    //   state.status = FETCHING_STATE.REJECTED;
    // });
  },
});

export const getData = createAsyncThunk("graphCards/getData", async () => {});

export default cardsSlice.reducer;
