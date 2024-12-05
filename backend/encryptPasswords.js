const bcrypt = require('bcryptjs');
const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nbaarena', // Asegúrate de que este sea el nombre de tu base de datos
});

// Encriptar todas las contraseñas existentes
db.query('SELECT * FROM usuarios', (err, users) => {
  if (err) throw err;

  users.forEach((user) => {
    if (user.password.startsWith('$2b$')) {
      console.log(`Contraseña ya encriptada para el usuario ${user.mail}`);
      return; // Si ya está encriptada, la saltamos
    }

    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) throw err;

      db.query(
        'UPDATE usuarios SET password = ? WHERE user_id = ?',
        [hash, user.user_id],
        (err) => {
          if (err) throw err;
          console.log(`Contraseña encriptada para el usuario ${user.mail}`);
        }
      );
    });
  });
});
