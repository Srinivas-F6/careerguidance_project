import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log(BACKEND_URL);

export const authSlice = createApi({
    reducerPath: 'authenticationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BACKEND_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (login) => ({
                url: '/login',
                method: 'POST',
                body: login
            })
        }),

        register: builder.mutation({
            query: (register) => ({
                url: '/register',
                method: 'POST',
                body: register
            })
        })
    })

})

export const { useRegisterMutation, useLoginMutation } = authSlice;