const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models/db'); // Asegúrate de que la ruta sea correcta


exports.login = (req, res) => {
    const { mail, password } = req.body;
  
    // Mostrar los datos recibidos del frontend
    console.log("Datos recibidos del frontend:");
    console.log("Correo:", mail);
    console.log("Contraseña:", password);
  
    User.findByEmail(mail, (err, results) => {
      if (err) {
        console.error("Error al buscar en la base de datos:", err);
        return res.status(500).json({ error: 'Database error.' });
      }
  
      if (results.length === 0) {
        console.log("Usuario no encontrado.");
        return res.status(404).json({ error: 'User not found.' });
      }
  
      const user = results[0];
      console.log("Usuario encontrado en la base de datos:", user);
  
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.error("Error al comparar contraseñas:", err);
          return res.status(500).json({ error: 'Encryption error.' });
        }
  
        console.log("¿Las contraseñas coinciden?:", isMatch);
  
        if (!isMatch) {
          return res.status(401).json({ error: "Invalid Credentials." });
        }
  
        const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      });
    });
  };
  

exports.register = (req, res) => {
    const { mail, password } = req.body;
  
    // Encriptar la contraseña
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ error: 'Error encrypting password.' });
  
      // Guardar el usuario con la contraseña encriptada
      User.create({ mail, password: hashedPassword }, (err) => {
        if (err) return res.status(500).json({ error: 'Database error.' });
        res.status(201).json({ message: 'User registered successfully.' });
      });
    });
  };
  
// Endpoint para actualizar el mail del usuario
exports.updateMail = (req, res) => {
  const { mail } = req.body; // Nuevo mail enviado por el usuario
  const userId = req.user.id; // El ID del usuario viene del middleware de autenticación
  console.log("updateMail - User ID:", userId, "Nuevo Mail:", mail); // Log para verificar los datos

  const query = "UPDATE usuarios SET mail = ? WHERE user_id = ?";
  db.query(query, [mail, userId], (err, results) => {
    if (err) {
      console.error("updateMail - Error en la consulta:", err); // Log del error
      return res.status(500).json({ error: "Database error." });
    }

    console.log("updateMail - Resultados de la consulta:", results); // Log de los resultados de la consulta

    if (results.affectedRows === 0) {
      console.log("updateMail - Usuario no encontrado.");
      return res.status(404).json({ error: "User not found." });
    }

    console.log("updateMail - Mail actualizado exitosamente.");
    res.status(200).json({ message: "Mail actualizado exitosamente." });
  });
};

  
// Endpoint para eliminar la cuenta del usuario
exports.deleteAccount = (req, res) => {
  const userId = req.user.id; // El ID del usuario viene del middleware de autenticación
  console.log("deleteAccount - User ID:", userId); // Log para verificar el ID del usuario

  const query = "DELETE FROM usuarios WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("deleteAccount - Error en la consulta:", err); // Log del error
      return res.status(500).json({ error: "Database error." });
    }

    console.log("deleteAccount - Resultados de la consulta:", results); // Log de los resultados de la consulta

    if (results.affectedRows === 0) {
      console.log("deleteAccount - Usuario no encontrado.");
      return res.status(404).json({ error: "User not found." });
    }

    console.log("deleteAccount - Cuenta eliminada exitosamente.");
    res.status(200).json({ message: "Cuenta eliminada exitosamente." });
  });
};

  
  
// Endpoint para obtener el mail del usuario autenticado
exports.getMail = (req, res) => {
  const userId = req.user.id; // El ID del usuario viene del middleware de autenticación
  console.log("getMail - User ID:", userId); // Log para verificar que el ID está llegando correctamente

  const query = "SELECT mail FROM usuarios WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("getMail - Error en la consulta:", err); // Log del error
      return res.status(500).json({ error: "Database error." });
    }

    console.log("getMail - Resultados de la consulta:", results); // Log de los resultados de la consulta

    if (results.length === 0) {
      console.log("getMail - Usuario no encontrado.");
      return res.status(404).json({ error: "User not found." });
    }

    console.log("getMail - Mail encontrado:", results[0].mail);
    res.status(200).json({ mail: results[0].mail }); // Devolver el mail
  });
};

  