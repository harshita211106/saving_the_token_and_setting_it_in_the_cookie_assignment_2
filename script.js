const jwt = require('jsonwebtoken');
const encrypt = (payload, secret) => {
  // your code here and return token

  const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // token expires in 1 hour
  return token;
};




module.exports = encrypt;
