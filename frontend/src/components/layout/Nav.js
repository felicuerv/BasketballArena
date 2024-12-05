import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avatarImage from "../../assets/img/img_avatar.png"; // Cambia por tu logo o avatar
import "../../../src/styles/components/layout/Nav.css";

const Nav = ({ authenticated, setAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Limpiar token de autenticación
    setAuthenticated(false); // Actualizar el estado de autenticación
    navigate("/"); // Redirigir al inicio
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">NBA NEWS</h1>
        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/novedades">Novedades</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          {!authenticated ? (
            <>
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
              <li>
                <Link to="/register">Registrarse</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <img
                  src={avatarImage}
                  alt="Avatar"
                  className="navbar-avatar"
                  onClick={() => navigate("/perfil")}
                />
              </li>
              <li>
                <button className="navbar-logout" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;


