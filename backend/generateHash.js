const bcrypt = require('bcryptjs');

bcrypt.hash('jorge123', 10, (err, hash) => {
  if (err) throw err;
  console.log('Hash generado:', hash);
});

