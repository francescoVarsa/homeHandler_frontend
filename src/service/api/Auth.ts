import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
interface Payload {
    username: string,
    password: string,
}

export const authApi = createApi({
    reducerPath: "authApi",
    tagTypes: ["Auth"],
    baseQuery: fetchBaseQuery({baseUrl:"/v1/", mode: "cors"}),
    endpoints: (builder) => ({
        login: builder.mutation<Payload, Partial<Payload>>({
            query: (body) => ({
                url: "signIn",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Auth"]
        })
    })
})