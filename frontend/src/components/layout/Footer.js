import React from "react";
import "../../../src/styles/components/layout/Footer.css";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <p className="footer-text">
                    © 2024 Basketball Arena. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
