import {apiSlice} from "@/app/api/apiSlice.ts";


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login/',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/microsoft/logout/',
                method: 'POST',
                body: {}
            })
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation
} = authApiSlice
