import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importamos el hook para redirigir
import "./../styles/components/pages/Perfil.css";

const Perfil = ({ setAuthenticated }) => {
  const [mail, setMail] = useState(""); // Estado para el mail
  const [newMail, setNewMail] = useState(""); // Estado para el nuevo mail
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook para la navegación

  // Obtener el mail del usuario cuando el componente se monta
  useEffect(() => {
    const fetchMail = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/getMail", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Usamos el token para autenticar la solicitud
          },
        });
        setMail(response.data.mail); // Asignamos el mail al estado
      } catch (err) {
        setError("No se pudo cargar el correo electrónico.");
        console.error(err); // Ver el error en la consola
      }
    };
    fetchMail();
  }, []);

  // Función para actualizar el mail
  const handleMailChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5000/api/auth/updateMail",
        { mail: newMail },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Enviar el token para autenticar la solicitud
          },
        }
      );
      setMessage(response.data.message);
    } catch (err) {
      setError("Hubo un error al actualizar el mail.");
      console.error(err); // Ver el error en la consola
    }
  };

  // Función para eliminar la cuenta y cerrar sesión
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar tu cuenta?");
    if (confirmDelete) {
      try {
        const response = await axios.delete("http://localhost:5000/api/auth/deleteAccount", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Usamos el token para autenticar la solicitud
          },
        });
        setMessage(response.data.message);
        
        // Eliminar el token de localStorage
        localStorage.removeItem("token");

        // Actualizar el estado de autenticación en el frontend
        setAuthenticated(false); // Cambiar el estado de autenticación a 'false'

        // Redirigir al inicio
        navigate("/"); // Redirigir a la página de inicio
      } catch (err) {
        setError("Hubo un error al eliminar la cuenta.");
        console.error(err); // Ver el error en la consola
      }
    }
  };

  return (
    <div className="perfil-container">
      <h1>Mi Perfil</h1>
      <div>
        <p>Correo electrónico actual: {mail}</p> {/* Mostrar el mail actual */}
      </div>

      {/* Formulario para modificar el mail */}
      <form onSubmit={handleMailChange}>
        <input
          type="email"
          placeholder="Nuevo correo electrónico"
          value={newMail}
          onChange={(e) => setNewMail(e.target.value)}
          required
        />
        <button type="submit">Actualizar Mail</button>
      </form>

      {/* Botón para eliminar cuenta */}
      <button onClick={handleDeleteAccount} className="delete-account-btn">
        Eliminar Cuenta
      </button>

      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Perfil;





