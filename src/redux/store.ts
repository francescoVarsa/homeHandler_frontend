import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../service/api/Auth";
import { userSlice } from "../service/slices/AuthSlice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        user: userSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})

setupListeners(store.dispatch)