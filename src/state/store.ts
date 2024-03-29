import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import infographicReducer from "./infographic/infographicSlice";
import currencyReducer from "./currency/currencySlice";
import themeReducer from "./theme/themeSlice";
import cardReducer from "./cards/cardsSlice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["currency", "theme", "cards"],
};

const rootReducer = combineReducers({
  currency: currencyReducer,
  infographic: infographicReducer,
  theme: themeReducer,
  cards: cardReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
