const axios = require('axios');

const registerUser = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      mail: 'felicuervo@gmail.com',
      password: 'nuevacontra123',
    });

    console.log('Respuesta del servidor:', response.data);
  } catch (err) {
    console.error('Error al registrar usuario:', err.response?.data || err.message);
  }
};

registerUser();
