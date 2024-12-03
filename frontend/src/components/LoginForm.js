import React, { useState } from "react";
import axios from "axios";
import "./../styles/components/pages/loginPage.css";

const LoginForm = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation (optional):
    if (!validateEmail(mail)) {
      setMessage("Dirección de correo electrónico inválida.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        mail,
        password,
      });

      setMessage("¡Inicio de sesión exitoso!");
      localStorage.setItem("token", response.data.token); // Assuming response.data contains a token

      // Handle successful login (optional):
      // - Redirect to a different page
      // - Store user information in state
    } catch (err) {
      setMessage("Error: Credenciales inválidas o error del servidor."); // More specific error handling
    }
  };

  const validateEmail = (mail) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
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
