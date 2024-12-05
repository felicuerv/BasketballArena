import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../styles/components/pages/loginPage.css";

const LoginForm = ({ setAuthenticated }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Para redirigir al inicio

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Solicitud al endpoint de login
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        mail,
        password,
      });

      // Si el login es exitoso
      setMessage("Inicio de sesión exitoso.");
      localStorage.setItem("token", response.data.token); // Guardar token
      setAuthenticated(true); // Actualizar estado de autenticación
      navigate("/"); // Redirigir al inicio
    } catch (err) {
      setMessage("Error: Credenciales inválidas.");
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
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
        <button type="submit">Ingresar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;


