import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../styles/components/pages/loginPage.css";

const RegisterForm = ({ setAuthenticated }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Para redirigir al inicio

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Solicitud al endpoint de registro
      await axios.post("http://localhost:5000/api/auth/register", {
        mail,
        password,
      });

      setMessage("Usuario registrado con éxito.");
      setAuthenticated(true); // Actualizar estado de autenticación
      navigate("/"); // Redirigir al inicio
    } catch (err) {
      setMessage("Error al registrar usuario.");
    }
  };

  return (
    <div className="login-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterForm;
