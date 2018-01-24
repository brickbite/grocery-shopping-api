const routes = require('express').Router();
const controllers = require('./controllers');

routes.get('/something', controllers.get)
  .post('/something', controllers.post);

module.exports = routes;