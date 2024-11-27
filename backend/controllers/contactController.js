const db = require("../db");
const nodemailer = require("nodemailer");

// Mostrar la página de contacto
exports.showContactForm = (req, res) => {
  res.render("contact", { title: "Contáctanos" });
};

// Procesar el envío del formulario
exports.submitContactForm = (req, res) => {
  const { name, email, message } = req.body;

  // Guardar datos en la base de datos
  const query = "INSERT INTO mensajes (name, email, message) VALUES (?, ?, ?)";
  db.execute(query, [name, email, message], (err) => {
    if (err) {
      console.error("Error al guardar en la base de datos:", err);
      return res.status(500).json({ message: "Error al procesar el formulario." });
    }

    // Configurar transporte de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Cambia esto según tu proveedor
      auth: {
        user: process.env.EMAIL, // Tu correo electrónico
        pass: process.env.EMAIL_PASSWORD, // Tu contraseña
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Confirmación de Contacto",
      text: `Hola ${name}, hemos recibido tu mensaje: "${message}". Gracias por contactarnos.`,
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error al enviar el correo:", err);
        return res.status(500).json({ message: "Error al enviar el correo." });
      }

      res.status(200).json({ message: "Formulario enviado y correo enviado con éxito." });
    });
  });
};
