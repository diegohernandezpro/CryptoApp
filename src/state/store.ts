import {configureStore} from "@reduxjs/toolkit";
import infographicReducer from "./infographic/infographicSlice";  // import the reducer from the slice file

export const store = configureStore({
    reducer:{
        infographic: infographicReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


