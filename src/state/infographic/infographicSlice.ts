import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"


interface InfographicState {
    value: number
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
        .addCase(incrementAsync.pending, () => {
          console.log('pending')
        })
        .addCase(incrementAsync.fulfilled, 
            (state, action: PayloadAction<number>) => {
            state.value += action.payload;
            console.log("fulfilled");
        })   
        .addCase(incrementAsync.rejected, () => {
            console.log("rejected");
        })
    }
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
     async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
     }
)

export const { increment, decrement, incrementByAmount} = infographicSlice.actions;



export default infographicSlice.reducer;


