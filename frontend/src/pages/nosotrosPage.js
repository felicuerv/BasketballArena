import React from "react";
import "../styles/components/pages/nosotrosPage.css";

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="about-banner">
                <h1>Sobre Nosotros</h1>
                <p>"Donde el baloncesto se convierte en pasión"</p>
            </section>
            <section className="about-content">
                <div className="about-mission">
                    <h2>Nuestra Misión</h2>
                    <p>
                        En <span>Basketball Arena</span>, vivimos y respiramos baloncesto. 
                        Nuestra misión es proporcionar noticias actualizadas, análisis profundos y contenido exclusivo que conecte a los fanáticos con el deporte que aman.
                    </p>
                </div>
                <div className="about-vision">
                    <h2>Nuestra Visión</h2>
                    <p>
                        Aspiramos a ser la fuente principal de información para todos los apasionados por el baloncesto, 
                        desde las grandes estrellas de la NBA hasta los talentos emergentes que sueñan con llegar a la cima.
                    </p>
                </div>
            </section>
            <section className="about-highlight">
                <h2>¿Qué nos hace diferentes?</h2>
                <ul>
                    <li><strong>Cobertura Global:</strong> Seguimos el baloncesto alrededor del mundo.</li>
                    <li><strong>Análisis Experto:</strong> Contamos con un equipo de analistas y periodistas especializados.</li>
                    <li><strong>Conexión con los Fans:</strong> Creamos contenido interactivo, encuestas y eventos para ti.</li>
                </ul>
            </section>
            <section className="about-cta">
                <h2>¿Eres un verdadero fan?</h2>
                <p>
                    Únete a nuestra comunidad y no te pierdas ninguna jugada. ¡Sigue conectado con nosotros y vive el baloncesto como nunca antes!
                </p>
                <button onClick={() => alert("¡Gracias por unirte!")}>Unirme Ahora</button>
            </section>
        </div>
    );
};

export default AboutUs;
