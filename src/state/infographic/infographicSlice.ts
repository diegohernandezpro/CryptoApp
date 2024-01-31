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
            state.value = action.payload;
            console.log("FULLFILLED action: " + action.payload);
    
        })
        .addCase(getCoinInfo.rejected, () => {
            console.log("rejected");
        
        });
    }
});


export const getCoinInfo = createAsyncThunk(
    "infographic/getCoinData",
    async () => {
        console.log("before api call in async thunk");
        const response = await api("/global");
        console.log("inside getCoinInfo data following:" + response);
        return response;
          
    }
)

// export const { increment, decrement, incrementByAmount} = infographicSlice.actions;


export default infographicSlice.reducer;

