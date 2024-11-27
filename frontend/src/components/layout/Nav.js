import React from "react";
import { Link } from "react-router-dom";
import "../../../src/styles/components/layout/Nav.css";


const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">NBA News</h1>
                <ul className="navbar-links">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/login">Iniciar Sesion</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
