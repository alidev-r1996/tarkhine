import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import storage from 'redux-persist/lib/storage'
import {REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer, FLUSH } from 'redux-persist'

const persistConfig = {key: 'root', storage}

const PersistReducer = persistReducer(persistConfig, cartSlice)

export const store = configureStore({
  reducer: {
    cart: PersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store)


