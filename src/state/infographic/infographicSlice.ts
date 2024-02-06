import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "@/utils/DataRetriever";
import { formatNum } from "@/utils/NumberFormatter";
import FETCHING_STATE from "../fetchingState";


type Data = {
    numCoins: number,
    numExchange: number,
    totalMarketCap: number,
    formattedMarketCap: string,
    formattedCoinVolume: string,
    totalVolume: number,
    formattedBitCap: number,
    formattedEthCap: number,
    marketCapPercent: number,
    volumeVsMarketCap:  number,
}

interface InfographicState { // change. 
    status: string,
    errorMsg: string | null,
    coinsData: Data | null,
}

const initialState: InfographicState = {
    status: FETCHING_STATE.IDLE,
    errorMsg: null,
    coinsData: null,
    };

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
            .addCase(getData.pending, (state) => {
                state.status = FETCHING_STATE.PENDING;
            })
            .addCase(getData.fulfilled, (state, action: PayloadAction<Data>) => {
                state.status = FETCHING_STATE.FULFILLED;
                state.coinsData = action.payload;

            })
            .addCase(getData.rejected, (state) => {
                state.status = FETCHING_STATE.REJECTED;

            });
    }
});


export const getData = createAsyncThunk(
    "infographic/getData",
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


        
        const formattedMarketCap = formatNum( totalMarketCap["usd"], "$" );
        const formattedCoinVolume = formatNum( totalVolume["usd"], "$" );
        const volumeVsMarketCap = parseFloat(( (totalVolume["usd"] / totalMarketCap["usd"]) * 100 ).toFixed(2));
        const formattedBitCap = Math.round(marketCapPercent.btc);
        const formattedEthCap = Math.round(marketCapPercent.eth);

        const infographicData = {
            numCoins,
            numExchange,
            totalMarketCap,
            formattedMarketCap,
            formattedCoinVolume,
            formattedBitCap,
            formattedEthCap,
            totalVolume,
            marketCapPercent,
            volumeVsMarketCap
        };
        return infographicData;
    }
)



export default infographicSlice.reducer;

