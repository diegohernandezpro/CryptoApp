import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../utils/DataRetriever";


interface InfographicState { //correc this and learn to use interafce in ts
    status: string,
    errorMsg: string,
    coinsData: {
        [key: string]: any;
    }[] | string[] | string | any
}

const initialState: InfographicState = {
    status: "IDLE",
    errorMsg: "",
    coinsData: ["coin1", "coin2"],
}

const infographicSlice = createSlice({
    name: 'infographic',
    initialState,
    reducers: {
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // }   
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCoinInfo.pending, () => {
            console.log("pending");
        })
        .addCase(getCoinInfo.fulfilled, (state, action: PayloadAction<any>) => {
            console.log("FULLFILLED.......action.payload is: " + action.payload);
            state.coinsData = action.payload;
    
        })
        .addCase(getCoinInfo.rejected, () => {
            console.log("rejected");
        
        });
    }
});


export const getCoinInfo = createAsyncThunk(
    "infographic/getCoinData",
    async () => {
        const response = await api("/global");
        const jsonresponse = JSON.stringify(response);
        const jsonData = JSON.parse(jsonresponse);

        const {
              active_cryptocurrencies: numCoins,
              markets: numExchange,
              total_market_cap: totalMarketCap,
              total_volume: totalVolume,
              market_cap_percentage: marketCapPercent,
          } = jsonData


          const infographicData = {
            numCoins,
            numExchange,
            totalMarketCap,
            totalVolume,
            marketCapPercent
          };
          console.log("🚀 ~ infographicData:", infographicData)

        
        return infographicData;
    }
)



export default infographicSlice.reducer;

