import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Company, Params } from "./types";

export const companiesApi = createApi({
  reducerPath: "companiesApi",
  tagTypes: ["Companies"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://devapp.bonusmoney.pro/mobileapp/",
    prepareHeaders: (headers) => {
      headers.set("TOKEN", "123");

      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllCards: build.query<
      { companies: Company[]; limit: number; offset: number },
      Params
    >({
      query: (body) => ({
        url: "getAllCompanies",
        method: "POST",
        body,
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, response) => {
        const newCards = response.companies;
        currentCache.companies.push(...newCards);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.companies.map(({ company }) => ({
                type: "Companies" as const,
                id: company.companyId,
              })),
              { type: "Companies", id: "LIST" },
            ]
          : [{ type: "Companies", id: "LIST" }],
    }),
  }),
});

export const { useGetAllCardsQuery } = companiesApi;
