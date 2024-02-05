import { configureStore } from "@reduxjs/toolkit";
import infographicReducer from "./infographic/infographicSlice";
import currencyReducer from "./currency/currencySlice";


export const store = configureStore({
    reducer: {
        infographic: infographicReducer,
        currency: currencyReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


