const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('everyting is running fine');
});

app.listen(3000, () => {
  console.log('Server running');
});
