import { createSlice } from "@reduxjs/toolkit";
import { editProfile, logInApi, registerApi } from "../../http/user/user";
import { IUserData } from "../../types/forms";
import type { PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
// import { IProduct } from "../../types/products";
// import { fakeProducts } from "../../fakeData/productsFake";
// import { RootState } from "../store";
// import type { RootState } from "../../app/store";

// Define a type for the slice state
interface userState {
  token: string | null;
  user: IUserData | null;
  loading: boolean;
  error: string;
  editerOpened: boolean;
}

type registerApiReturnType = {
  token: string;
  user: IUserData;
};

// Define the initial state using that type
const initialState: userState = {
  token: null,
  user: null,
  loading: false,
  error: "",
  editerOpened: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logoutAC(state) {
      state.user = null;
      state.token = null;
    },
    setEditerOpenedAC(state, action: PayloadAction<boolean>) {
      state.editerOpened = action.payload;
    },
    // filterProductAC:(state)=>{
    //   state.token=null;
    // }
  },
  extraReducers: {
    [registerApi.pending.type]: (state, action) => {
      state.loading = true;
      state.error = "";
      state.token = null;
      state.user = null;
    },
    [registerApi.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.token = null;
      state.user = null;
    },
    [registerApi.fulfilled.type]: (
      state,
      action: PayloadAction<registerApiReturnType>
    ) => {
      state.loading = false;
      state.error = "";
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    [logInApi.pending.type]: (state, action) => {
      state.loading = true;
      state.error = "";
      state.token = null;
      state.user = null;
    },
    [logInApi.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.token = null;
      state.user = null;
    },
    [logInApi.fulfilled.type]: (
      state,
      action: PayloadAction<registerApiReturnType>
    ) => {
      state.loading = false;
      state.error = "";
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    [editProfile.pending.type]: (state, action) => {
      state.loading = true;
      state.error = "";
    },
    [editProfile.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      notification["error"]({
        message: "Ошибка!",
        description: "Ошибка при при попытке изменить профиль",
      });
    },
    [editProfile.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = "";
      state.user = action.payload.user;
      notification["success"]({
        message: "Успешно!",
        description: "Данные профиля успшно изменены",
      });
      state.editerOpened=false;
    },
  },
});

export const {
  // filterProductAC
  logoutAC,
  setEditerOpenedAC
} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
