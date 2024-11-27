import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/components/pages/novedadesPage.css'; 

const Novedades = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios
      .get("https://nba-latest-news.p.rapidapi.com/articles", {
        headers: {
          "x-rapidapi-host": "nba-latest-news.p.rapidapi.com",
          "x-rapidapi-key": "498cf6ba00msh9929b514e5e74bap1ce728jsnfd7bfbe536df"
        }
      })
      .then((response) => {
        setNews(response.data); 
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError("No se pudieron cargar las noticias.");
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div className="loading">Cargando noticias...</div>; 
  }

  if (error) {
    return <div className="error">{error}</div>; 
  }

  return (
    <div className="novedades-container">
      <h1 className="title">Últimas Novedades de la NBA</h1>
      <div className="news-list">
        {news.map((article, index) => (
          <div className="news-card" key={index}>
            <h2>{article.title}</h2>
            <p>Fuente: {article.source}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Leer más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novedades;



