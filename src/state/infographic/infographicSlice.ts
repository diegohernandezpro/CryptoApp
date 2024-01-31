import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../utils/DataRetriever";


interface InfographicState {
    value: any
    };

const initialState: InfographicState = {
    value: 0
}

const infographicSlice = createSlice({
    name: 'infographic',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }   
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCoinInfo.pending, () => {
            console.log("pending");
        })
        .addCase(getCoinInfo.fulfilled, (state, action: PayloadAction<any>) => {
            console.log("fulfilled");
            state.value = action.payload;
            console.log("action: " + action.payload);
    
        })
        .addCase(getCoinInfo.rejected, () => {
            console.log("rejected");
        
        });
    }
});

// export const incrementAsync = createAsyncThunk(
//     "counter/incrementAsync",
//      async (amount: number) => {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         return amount;
//      }
// )

export const getCoinInfo = createAsyncThunk(
    "infographic/getCoinData",
    // async (coin: string) => {
    //     console.log("before api call in async thunk");
    //     const response = await api("/coins/", coin);
    //     // return response.data;
    //     return response;
    // }
    async () => {
        console.log("before api call in async thunk");
        const response = await api("/coins/", "bitcoin");
        // return response.data;
        return response;
    }
)

export const { increment, decrement, incrementByAmount} = infographicSlice.actions;

// export const getInfographicSelector = (state) => state.infographic;

export default infographicSlice.reducer;

