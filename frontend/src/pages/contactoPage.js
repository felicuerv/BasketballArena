import React, { useState } from "react";
import "../styles/components/pages/contactoPage.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setConfirmationMessage("¡Gracias por contactarnos! Te hemos enviado un correo de confirmación.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setConfirmationMessage("Hubo un error. Intenta nuevamente más tarde.");
      }
    } catch (error) {
      console.error(error);
      setConfirmationMessage("Hubo un error. Intenta nuevamente más tarde.");
    }
  };

  return (
    <div className="contact-us-page">
      <header className="homepage-header">
        <h1 className="homepage-title">Contáctanos</h1>
      </header>
      <main className="homepage-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

          <button type="submit" className="submit-btn">Enviar</button>
        </form>

        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
      </main>
    </div>
  );
};

export default ContactUs;
