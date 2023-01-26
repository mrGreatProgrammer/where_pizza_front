import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";
// import type { RootState } from "../../app/store";

// Define a type for the slice state
interface AppState {
  value: number;
  burgerOpened: boolean;
  authorized: boolean;
  userInfo: any;
}

// Define the initial state using that type
const initialState: AppState = {
  value: 0,
  burgerOpened: false,
  authorized: false,
  userInfo: null
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleBurgerMenuAC(state, action:PayloadAction<boolean>){
      state.burgerOpened=action.payload;
    }
  },
});

export const { toggleBurgerMenuAC } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default appSlice.reducer;
