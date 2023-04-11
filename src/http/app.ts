import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import axios from "axios";

export const getRestaurants = createAsyncThunk(
  "app/get/restaurants",
  async (formData, thankApi) => {
    try {
      const token = (thankApi.getState() as RootState).userSlice.token;
      const res: any = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/restaurant/g`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      return res.data;
    } catch (error) {
      return thankApi.rejectWithValue("err");
    }
  }
);
