import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ILoginForm, IRegisterForm } from "../../types/forms";

export const registerApi = createAsyncThunk(
  "user/auth/register",
  async (formData: IRegisterForm, thankAPI) => {
    try {
      console.log({ ...formData, role: "USER" });
      const { status, data } = await axios.post(
        "http://192.168.0.103/api/user/registration",
        {
          ...formData,
          role: "USER",
        }
      );

      // console.log("res", res);

      // console.log(res);

      if (status === 200 && data) {
        return thankAPI.fulfillWithValue({
          token: data.token,
          user: data.user,
        });
      } else {
      }
    } catch (error) {
      console.log(error);
      return thankAPI.rejectWithValue(error);
    }
  }
);

export const logInApi = createAsyncThunk(
  "user/auth/login",
  async (formData: ILoginForm, thankAPI) => {
    try {
      console.log({ ...formData, role: "USER" });
      const { status, data } = await axios.post(
        "http://192.168.0.103:4000/api/user/login",
        formData
      );

      // console.log("res", res);

      // console.log(res);

      if (status === 200 && data) {
        return thankAPI.fulfillWithValue({
          token: data.token,
          user: data.user,
        });
      } else {
        return thankAPI.rejectWithValue("Some errror")
      }
    } catch (error) {
      console.log(error);
      return thankAPI.rejectWithValue(error);
    }
  }
);
