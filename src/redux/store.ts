import { configureStore, createSlice } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../service/api/Auth";

type UserState = {
    token: string | null
}

const userSlice = createSlice({
    name: "user",
    initialState: { token: null } as UserState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, {payload}) => {
            state.token = payload.token
        })
    }

})

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        user: userSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})

setupListeners(store.dispatch)