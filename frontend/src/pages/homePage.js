import React from "react";
import "../styles/components/pages/homePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    const handleCardClick = () => {
      navigate("/novedades");
    };

    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1 className="homepage-title">Basketball News</h1>
            </header>
            <main className="homepage-content">
                <section className="latest-news">
                    <h2>Ultimas Noticias</h2>
                    <div className="news-card" onClick={handleCardClick}>Ultimas Noticias acerca de la NBA...</div>
                    <div className="news-card" onClick={handleCardClick}>Estadisticas y jugadas de los jugadores...</div>
                </section>
                <section className="featured-section">
                    <h2>Partidos</h2>
                    <div className="match-card">Lakers vs Warriors - 7:00 PM EST</div>
                    <div className="match-card">Celtics vs Nets - 9:00 PM EST</div>
                    <div className="match-card">Bulls vs Suns - 9:00 PM EST</div>
                    <div className="match-card">Bucks vs Timberwolves - 9:00 PM EST</div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
