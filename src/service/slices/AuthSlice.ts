import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "../api/Auth"

type UserState = {
    token: string | null
}

export const userSlice = createSlice({
    name: "user",
    initialState: { token: null } as UserState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, {payload}) => {
            state.token = payload.token
        })
        builder.addMatcher(authApi.endpoints.signUp.matchFulfilled, (state, {payload}) => {
            state.token = payload.token
        })
    }
})