import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "../components/pages/LandingPage/LandingPage";
import Login from "../components/pages/Login/Login";
import NotFound from "../components/pages/NotFound/NotFound";
import SignUp from "../components/pages/SignUp/SignUp";
import { routes } from "../config/RoutesMap";
import { store } from "./../redux/store";

const ProtectedRoutes = () => {
  const authToken = store.getState();
  const { user } = authToken;

  if (!user.token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

const AuthFlow = () => {
  const authToken = store.getState();
  const { user } = authToken;

  if (user.token) {
    return <Navigate to="/home/dashboard" />;
  }

  return <Outlet />;
};

export default function Router() {
  const {
    home,
    home_dashboard,
    landingPage,
    login,
    signUp,
    requestResetPassword,
  } = routes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<AuthFlow />}>
          <Route path={landingPage} element={<LandingPage />} />
          <Route path={login} element={<Login />} />
          <Route path={signUp} element={<SignUp />} />
        </Route>
        <Route path={home} element={<ProtectedRoutes />}>
          <Route path={home_dashboard} element={<Dashboard />} />
        </Route>
        <Route path={requestResetPassword} element={<div>reset</div>} />
      </Routes>
    </BrowserRouter>
  );
}

const Dashboard = () => {
  return <div>This is dashboard</div>;
};
