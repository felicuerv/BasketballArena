const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Obtener el token del encabezado Authorization
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Adjuntar la información del usuario al request
    next(); // Pasar al siguiente middleware o función
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
