const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// Configuración de base de datos y rutas
const db = require("./models/db"); // Asegúrate de que tienes db.js en la carpeta models
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// **RUTAS DEL SISTEMA DE LOGIN**
app.use("/api/auth", authRoutes);

// **RUTA PARA ENVÍO DE CORREOS**
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configuración del transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Configurado en tu archivo .env
        pass: process.env.EMAIL_PASS, // Contraseña de App en tu archivo .env
      },
    });

    // Configuración del correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Gracias por contactarnos",
      html: `<p>Hola ${name},</p>
             <p>Hemos recibido tu mensaje:</p>
             <blockquote>${message}</blockquote>
             <p>Nos pondremos en contacto contigo lo antes posible.</p>
             <p>Saludos,</p>
             <p>El equipo de Basketball Arena</p>`,
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ message: "Error al enviar el correo" });
  }
});

// **INICIAR EL SERVIDOR**
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


