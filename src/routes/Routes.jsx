import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
