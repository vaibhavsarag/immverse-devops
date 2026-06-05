const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD testing successfully done and webhooks are firing correctly for every push.');
});

app.listen(3000, () => {
  console.log('Server running');
});
