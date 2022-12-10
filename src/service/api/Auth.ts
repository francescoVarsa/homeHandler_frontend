import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { routes } from "../../config/RoutesMap";
interface RequestPayload {
  username: string;
  password: string;
}

interface SignUpPayload {
  name: string;
  last_name: string;
  email: string;
  password: string;
}

interface RequestResetPasswordPayload {
  username: string;
}

interface Response {
  token: null | string;
}

interface SendEmailResponse {
  message: string;
}

interface ResetPassword {
  new_password: string;
  token: string;
}

interface ResetPasswordResponse {
  message: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({ baseUrl: routes.api.baseUrl, mode: "cors" }),
  endpoints: (builder) => ({
    login: builder.mutation<Response, RequestPayload>({
      query: (body) => ({
        url: routes.api.signIn,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    signUp: builder.mutation<Response, SignUpPayload>({
      query: (body) => ({
        url: routes.api.signUp,
        method: "POST",
        body,
      }),
    }),
    sendResetPasswordEmail: builder.mutation<
      SendEmailResponse,
      RequestResetPasswordPayload
    >({
      query: (body) => ({
        url: routes.api.resetPassword,
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation<ResetPasswordResponse, ResetPassword>({
      query: (body) => ({
        url: routes.api.saveNewPassword,
        method: "POST",
        body,
      }),
    }),
  }),
});
