/**
 * These are all app routes
 */
export const routes = {
  landingPage: "/",
  login: "/login",
  signUp: "/signUp",
  home: "/home",
  home_dashboard: "/home/dashboard",
  start: "/home/start",
  requestResetPassword: "requestResetPassword",
  resetPassword: "/passwordReset/:token",
  foodPlan: "/home/foodPlan",

  api: {
    baseUrl: process.env.NODE_ENV === "development" ? "/v1/" : "/service/v1/",
    signIn: "signIn",
    signUp: "signUp",
    saveNewPassword: "saveNewPassword",
    resetPassword: "resetPassword",
  },
};
