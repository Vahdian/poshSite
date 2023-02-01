import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactLogo from "../components/reactLogo/ReactLogo";
import Media from "../pages/gallery/Media";
//import Media from "../pages/gallery/Media";
import ThreeCardsComponent from "../pages/gallery/threeCardsComponent/ThreeCardsComponent";
import LandingPage from "../pages/landingPage/LandingPage";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/media" element={<ThreeCardsComponent />} />
        <Route path="/media/portraits" element={<Media />} />
        <Route path="/media/travel" element={<Media />} />
        <Route path="/media/bw" element={<Media />} />
        <Route path="/test" element={<ReactLogo />} />
      </Routes>
    </BrowserRouter>
  );
}
