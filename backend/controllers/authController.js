const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {
  const { mail, password } = req.body;

  User.findByEmail(mail, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error.' });
    if (results.length === 0) return res.status(404).json({ error: 'User not found.' });

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: 'Encryption error.' });
      if (!isMatch) return res.status(401).json({ error: 'Invalid credentials.' });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
};

exports.register = (req, res) => {
  const { mail, password } = req.body;

  User.create({ mail, password }, (err) => {
    if (err) return res.status(500).json({ error: 'Database error.' });
    res.status(201).json({ message: 'User registered successfully.' });
  });
};
