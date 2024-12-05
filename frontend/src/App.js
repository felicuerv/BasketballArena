import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/homePage";
import ContactoPage from "./pages/contactoPage";
import NosotrosPage from "./pages/nosotrosPage";
import NovedadesPage from "./pages/novedadesPage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Perfil from "./components/Perfil";

function App() {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem("token")); // Comprobar si el token existe

  return (
    <BrowserRouter>
      <Header />
      <Nav authenticated={authenticated} setAuthenticated={setAuthenticated} /> {/* Pasar las props correctamente */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/novedades" element={<NovedadesPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route
          path="/login"
          element={<LoginForm setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/register"
          element={<RegisterForm setAuthenticated={setAuthenticated} />}
        />
        <Route path="perfil" element={<Perfil setAuthenticated={setAuthenticated} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


