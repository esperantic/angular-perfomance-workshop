const express = require('express')
const usersMock = require('./users');
const app = express();

const port = 8080;

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/users', (req, res) => {
  res.json(usersMock);
})

app.get('/user/:id', (req, res) => {
  const user = usersMock.results.find((user) => user.login.uuid === req.params.id);
  res.json(user);
});


app.listen(port, () => {
  console.log(`mock server is listening at http://localhost:${port}`);
})
