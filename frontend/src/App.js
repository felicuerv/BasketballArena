import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/layout/Header.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';

import ContactoPage from './pages/contactoPage.js';
import HomePage from './pages/homePage.js';
import NosotrosPage from './pages/nosotrosPage.js';
import Novedades from './pages/novedadesPage.js';
import LoginPage from './pages/loginPage.js'; // Importa el nuevo componente


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="novedades" element={<Novedades />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="login" element={<LoginPage />} /> {/* Nueva ruta */}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}


export default App;

