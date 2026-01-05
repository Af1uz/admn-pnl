import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import './App.css'
import Login from "../components/Login/Login";
import Deshboard from "../Desh/Deshboard";
import AboutPage from "../components/AboutPage";
import User from "../components/User";
import HomePage from "../components/HomePage";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token && location.pathname !== "/login") {
      navigate("/login");
    }

    if (token && location.pathname === "/login") {
      navigate("/");
    }
  }, [token, location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Deshboard />}>
        <Route index element={<HomePage />} />
        <Route path="user" element={<User />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
