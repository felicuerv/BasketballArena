const db = require("../models/db");
const bcrypt = require("bcryptjs");

const User = {
  findByEmail: (mail, callback) => {
    const query = "SELECT * FROM usuarios WHERE mail = ?";
    db.query(query, [mail], callback);
  },

  create: (user, callback) => {
    const { mail, password } = user;
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return callback(err);
      const query = "INSERT INTO usuarios (mail, password) VALUES (?, ?)";
      db.query(query, [mail, hash], callback);
    });
  },
};

module.exports = User;
