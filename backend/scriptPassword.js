const bcrypt = require('bcryptjs');

// Hash tomado de la base de datos
const hash = '$2a$10$8K2XlqxAlQ5dGz0lHKe/7uYJSjBGlMqxmWLFbFLAgWpt0WRKEIKe.';
// Contraseña que intentas verificar
const password = 'lore123';

bcrypt.compare(password, hash, (err, isMatch) => {
  if (err) throw err;
  console.log("¿Las contraseñas coinciden?", isMatch);
});
