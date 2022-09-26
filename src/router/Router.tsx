import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/pages/LandingPage/LandingPage";
import Login from "../components/pages/Login/Login";
import NotFound from "../components/pages/NotFound/NotFound";
import SignUp from "../components/pages/SignUp/SignUp";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
