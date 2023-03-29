import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store/store";
import { IOrder } from "../../types/orders";
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/order",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).userSlice.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: (page = 1) => `/all?page=${page}`,
    }),
    getOrderByName: builder.query({
      query: (name) => `order/${name}`,
    }),
    addOrder: builder.mutation({
      query: (data)=> {
        return {
          url: '/',
          method: 'POST',
          body: data
        }
      }
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetOrderByNameQuery, useGetAllOrdersQuery, useAddOrderMutation } = ordersApi;
