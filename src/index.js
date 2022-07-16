const express = require('express');
const app = express();
const routes = require('./routes');
require('express-async-errors');

app.use(express.json());
app.use(routes);
//Error Handler (Middleware express) --> Após definição das rotas.
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
