const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD version 5 Pipeline Running Successfully, where is my offer letter, XD');
});

app.listen(3000, () => {
  console.log('Server running');
});
