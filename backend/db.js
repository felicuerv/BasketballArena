const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "nbaarena", // Cambia por el nombre de tu base de datos
});

module.exports = db;
