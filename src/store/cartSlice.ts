import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";
// import type { RootState } from "../../app/store";

interface IProductCart {
  id?: string | number;
  price: number;
  discount: number;
  count: number;
}

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
    // toggleBurgerMenuAC(state, action:PayloadAction<boolean>){
    //   state.burgerOpened=action.payload;
    // }
    addProductToCartAC(state, action: PayloadAction<IProductCart>) {
      // state.products.push(action.payload);
      // state.products = [...state.products, action.payload];
      if (state.products.length > 0) {
        console.log("afdfaff\n -------", state.products.length);
        // state.products.find(e=>e.id===action.payload.id);
        //@ts-ignore
        // state.products.some((e) => e.id === action.payload.id)? state.products.find(e=>e.id===action.payload.id)?.count++:state.products.push(action.payload) ;

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
        // for (let i = 0; i < state.products.length; i++) {
        //   const element = state.products[i];
        //   if (
        //     state.products.find((e) => e.id === action.payload.id) &&
        //     element.id === action.payload.id
        //   ) {
        //     element.count = element.count + 1;
        //     console.log(
        //       "afdfaff\n +++++++++",
        //       state.products.length,
        //       "\nproductId",
        //       action.payload.id,
        //       "\nboolean",
        //       state.products.find((e) => e.id === action.payload.id)
        //     );
        //     break;
        //   } else {
        //     //@ts-ignore
        //     state.products.push(action.payload);
        //     console.log(
        //       "afdfaff\n ********",
        //       state.products.length,
        //       "\nproductId",
        //       action.payload.id,
        //       "\nboolean",
        //       state.products.find((e) => e.id === action.payload.id)
        //     );
        //     break;
        //   }
        // }
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
    },
  },
});

export const {
  //  toggleBurgerMenuAC
  addProductToCartAC,
} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
