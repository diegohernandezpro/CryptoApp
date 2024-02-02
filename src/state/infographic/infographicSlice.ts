import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "@/utils/DataRetriever";
import { FetchingStates } from "@/utils/FetchingStates";


type Data = {
    numCoins: number,
    numExchange: number,
    totalMarketCap: number,
    totalVolume: number,
    marketCapPercent: number
}

interface InfographicState { // change. 
    status: string,
    errorMsg: string | null,
    coinsData: Data | null,
}

const initialState: InfographicState = {
    status: FetchingStates.IDLE,
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
            .addCase(getInfographicData.pending, (state) => {
                state.status = FetchingStates.PENDING;
                // console.log("pending");
            })
            .addCase(getInfographicData.fulfilled, (state, action: PayloadAction<Data>) => {
                state.status = FetchingStates.FULFILLED;
                // console.log("FULLFILLED.......action.payload is: " + action.payload);
                state.coinsData = action.payload;

            })
            .addCase(getInfographicData.rejected, (state) => {
                state.status = FetchingStates.REJECTED;
                // console.log("rejected");

            });
    }
});


export const getInfographicData = createAsyncThunk(
    "infographic/getInfographicData",
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


        return infographicData;
    }
)



export default infographicSlice.reducer;

