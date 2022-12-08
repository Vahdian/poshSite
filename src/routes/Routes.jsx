import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/loginPage/registerPage/RegisterPage";
import MainPage from "../pages/mainPage/MainPage";
import NewMonthlyExpense from "../pages/new-monthly-expense/NewMonthlyExpense";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/new-monthly-expense/:id"
          element={<NewMonthlyExpense />}
        />
        <Route path="/costs/:id" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
