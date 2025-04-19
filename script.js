const jwt = require('jsonwebtoken');

const encrypt = (payload, secret, expiresIn = '1h') => {
  try {
    return jwt.sign(payload, secret, { expiresIn });
  } catch (error) {
    console.error('Error generating JWT:', error);
    return null;
  }
};

const run = () => {
  const payload = { userId: 1, role: 'admin' };
  const secret = 'secret';
  const token = encrypt(payload, secret);
  console.log('Generated JWT:', token);
};

run();

module.exports = encrypt;