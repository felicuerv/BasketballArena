import React from "react";
import "../../../src/styles/components/layout/Header.css";


const Header = () => {
    return (
        <header className="aesthetic-header">
            <div className="overlay"></div>
            <div className="header-content">
                <h1 className="header-title">
                    Bienvenidos a <span>Basketball Arena</span>
                </h1>
                <p className="header-subtitle">Tu sitio numero 1 para noticias de Basketball</p>
            </div>
        </header>
    );
};

export default Header;
