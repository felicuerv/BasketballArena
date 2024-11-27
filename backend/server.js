require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Configurar Handlebars como motor de plantillas
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
app.use("/contact", contactRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
