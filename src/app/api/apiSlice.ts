import {BaseQueryApi, createApi, FetchArgs, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8000", // import.meta.env.VITE_API_URL https://proct.iitu.edu.kz
    credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //     const token = (getState() as RootState).auth.token
    //     if (token) {
    //         headers.set("authorization", `Bearer ${token}`)
    //     }
    //     return headers
    // }
})


export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({})
})
