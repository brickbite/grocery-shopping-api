const router = require('express').Router();
const controllers = require('./controllers/');

router.get('/orders', controllers.orders.get)
  .post('/orders', controllers.orders.post);

module.exports = router;