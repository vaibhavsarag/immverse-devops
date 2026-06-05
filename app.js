const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD version 3 Pipeline Running Successfully');
});

app.listen(3000, () => {
  console.log('Server running');
});
