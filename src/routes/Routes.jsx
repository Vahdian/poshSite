import { BrowserRouter, Routes, Route } from "react-router-dom";
import Media from "../pages/gallery/Media";
import LandingPage from "../pages/landingPage/LandingPage";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}
