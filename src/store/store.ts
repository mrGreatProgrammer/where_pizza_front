import { configureStore, combineReducers } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "../http/services/post";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import counterSlice from "./counterSlice/counterSlice";
import productsSlice from "./productsSlice/productsSlice";
import appSlice from "./appSlice/app";
import userSlice from "./userSlice/userSlice";

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
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  appSlice,
  userSlice,
  counterSlice: counterSlice,
  productsSlice: productsSlice,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["appSlice", "userSlice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // reducer: {
  //   persistedReducer,
  //   // Add the generated reducer as a specific top-level slice
  //   [pokemonApi.reducerPath]: pokemonApi.reducer,
  //   // appSlice,
  //   // userSlice,
  //   // counterSlice: counterSlice,
  //   // productsSlice: productsSlice,
  //   // ...persistedReducer
  // },
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pokemonApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export default store