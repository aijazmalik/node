const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Node.js! Aijaz Ahmed Malik DevOps Engineer in nawabshah');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
