import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/products";
import { fakeProducts } from "../../fakeData/productsFake";
// import { RootState } from "../store";
// import type { RootState } from "../../app/store";

// Define a type for the slice state
interface productsState {
  products: null | IProduct[];
}

// Define the initial state using that type
const initialState: productsState = {
  products: fakeProducts
};

export const productsSlice = createSlice({
  name: "productsSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    filterProductAC:(state)=>{
      state.products=null;
    }
  },
});

export const {
  filterProductAC
   } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default productsSlice.reducer;
