import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
interface RequestPayload {
    username: string,
    password: string,
}

interface Response {
    token: null | string
}

export const authApi = createApi({
    reducerPath: "authApi",
    tagTypes: ["Auth"],
    baseQuery: fetchBaseQuery({baseUrl:"/v1/", mode: "cors"}),
    endpoints: (builder) => ({
        login: builder.mutation<Response, RequestPayload>({
            query: (body) => ({
                url: "signIn",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Auth"]
        })
    })
})