import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store/store";
import { IProduct } from "../../types/products";
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/products/`,
    // prepareHeaders: (headers, { getState }) => {
    //   // By default, if we have a token in the store, let's use that for authenticated requests
    //   const token = (getState() as RootState).appSlice.token;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (page = 1) => `/all?page=${page}`,
    }),
    getProductsByGroup: builder.query({
      query: (page = 1) => `/products_by_group?page=${page}`,
    }),
    getProductByName: builder.query({
      query: (name) => `product/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductByNameQuery,
  useGetAllProductsQuery,
  useGetProductsByGroupQuery,
} = productsApi;
