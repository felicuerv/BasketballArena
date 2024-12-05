const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');
const authController = require("../controllers/authController");
const verifyToken = require("../middleware/verifyToken"); // Middleware para verificar el token de autenticación


// Routes
router.post('/login', login);
router.post('/register', register);
router.get("/getMail", verifyToken, authController.getMail); // Ruta para obtener el mail
router.put("/updateMail", verifyToken, authController.updateMail); // Ruta para actualizar el mail
router.delete("/deleteAccount", verifyToken, authController.deleteAccount); // Ruta para eliminar la cuenta

module.exports = router;
