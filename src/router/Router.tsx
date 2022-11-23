import { useCookies } from "react-cookie";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "../components/pages/Home/Home";
import LandingPage from "../components/pages/LandingPage/LandingPage";
import Login from "../components/pages/Login/Login";
import NotFound from "../components/pages/NotFound/NotFound";
import RequestNewPassword from "../components/pages/RequestNewPassword/RequestNewPassword";
import SignUp from "../components/pages/SignUp/SignUp";
import { routes } from "../config/RoutesMap";
import { store } from "./../redux/store";

const ProtectedRoutes = () => {
  const authToken = store.getState();
  const { user } = authToken;
  const [cookies] = useCookies(["auth-token"]);
  const storedToken = cookies["auth-token"];

  if (!user.token && !storedToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

const AuthFlow = () => {
  const [cookies] = useCookies(["auth-token"]);
  const storedToken = cookies["auth-token"];
  const authToken = store.getState();
  const { user } = authToken;

  if (user.token || storedToken) {
    return <Navigate to="/home/start" />;
  }

  return <Outlet />;
};

export default function Router() {
  const {
    home,
    landingPage,
    login,
    signUp,
    requestResetPassword,
    resetPassword,
    start,
  } = routes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<AuthFlow />}>
          <Route path={landingPage} element={<LandingPage />} />
          <Route path={login} element={<Login />} />
          <Route path={signUp} element={<SignUp />} />
          <Route path={requestResetPassword} element={<RequestNewPassword />} />
          <Route path={resetPassword} element={<RequestNewPassword />} />
        </Route>

        <Route path={home} element={<ProtectedRoutes />}>
          <Route path={start} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
