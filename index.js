const express = require('express');
const encrypt = require('./script'); // your encrypt function
const app = express();
const PORT = 3000;

app.get('/generate-token', (req, res) => {
  const payload = { userId: 101, name: "Harshita" };
  const secret = 'mysecretkey';
  const token = encrypt(payload, secret);
  res.send({ token });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
