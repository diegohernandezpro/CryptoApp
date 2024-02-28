import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GraphSelectorState {
  graphTimeFrame: {
    dayFrame: string;
    timeFrame: string;
  };
}

const initialState: GraphSelectorState = {
  graphTimeFrame: {
    dayFrame: "1D",
    timeFrame: "24h",
  },
};

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    setSelection(
      state,
      action: PayloadAction<{
        timeFrame: string;
        dayFrame: string;
      }>
    ) {
      state.graphTimeFrame = action.payload;
    },
  },
});

export const { setSelection } = graphSlice.actions;

export default graphSlice.reducer;
