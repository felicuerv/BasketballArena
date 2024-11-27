const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Ruta para mostrar el formulario de contacto
router.get("/", contactController.showContactForm);

// Ruta para procesar el formulario de contacto
router.post("/", contactController.submitContactForm);

module.exports = router;
