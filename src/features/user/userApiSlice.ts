import {apiSlice} from "@/app/api/apiSlice.ts";


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserInfo: builder.mutation({
            query: () => ({
                url: '/api/user/',
                method: 'GET'
            })
        })
    })
})

export const {
    useGetUserInfoMutation
} = userApiSlice
