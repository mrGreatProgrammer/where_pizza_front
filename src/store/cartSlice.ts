import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProductCart } from "../types/cart";

import { message } from "antd";

// import { RootState } from "../store";
// import type { RootState } from "../../app/store";
// import {IProduct} from '../types/products'

// interface IProductCart extends IProduct {
//   count: number;
// }

// Define a type for the slice state
interface CartState {
  totalCountProducts: number;
  totalPrice: number;
  products: IProductCart[] | [];
}

// Define the initial state using that type
const initialState: CartState = {
  totalCountProducts: 0,
  totalPrice: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProductToCartAC(state, action: PayloadAction<IProductCart>) {
      if (state.products.length > 0) {
        console.log("afdfaff\n -------", state.products.length);
        //@ts-ignore

        state.products.find((e) => e.id === action.payload.id)
          ? //@ts-ignore
            (state.products = state.products.map((e) => {
              if (e.id === action.payload.id) {
                return { ...e, count: e.count + 1 };
              } else {
                return e;
              }
            }))
          : //@ts-ignore
            state.products.push(action.payload);

        //@ts-ignore
        state.totalCountProducts = state.products.reduce((a, b) => {
          return a + b.count;
        }, 0);
        //@ts-ignore
        state.totalPrice = state.products.reduce((a, b) => {
          return a + b.price * b.count;
        }, 0);
      } else {
        console.log(
          "afdfaff\n state.products.length",
          state.products.length,
          "\nproductId",
          action.payload.id
        );
        //@ts-ignore
        state.products.push(action.payload);
      }
      message["open"]({
        type: "success",
        content: "Товар добавлен в корзину",
        className: "message__added_to_cart",
        style: {
          marginTop: "8vh",
        },
      });
    },
  },
});

export const {
  //  toggleBurgerMenuAC
  addProductToCartAC,
} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootStimport { IProduct } from './../types/products';
// ate) => state.counter.value;

export default cartSlice.reducer;
