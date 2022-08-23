import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CONVERT_KEY, CONVERT_URL } from "../store/constants";
import { IConvert } from "../models/IConvert";

export const convertAPI = createApi({
  reducerPath: "convertAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: CONVERT_URL,
  }),
  endpoints: (build) => ({
    convertCurrency: build.query<IConvert, {from: string, to: string, amount: number}>({
      query: ({to, from, amount}) => ({
        url: "/convert",
        params: {
          to, from, amount
        },
        headers: {
          "apikey": CONVERT_KEY
        },
        redirect: 'follow'
      })
    }),
  }),
});