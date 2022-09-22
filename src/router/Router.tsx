import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/pages/LandingPage/LandingPage";
import NotFound from "../components/pages/NotFound/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
