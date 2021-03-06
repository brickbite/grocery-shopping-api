require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env | 3000;


const routes = require('./routes');


app.use((req, res, next) => {
  console.log(`===== REQUEST: ${req.method} to ${req.url}. req.query: ${JSON.stringify(req.query)}`);
  next();
});

app.use('/api/v0', routes);




app.listen(port, () => console.log(`server: listening on ${port}`));
