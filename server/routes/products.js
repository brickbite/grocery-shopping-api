const router = require('express').Router();
const controllers = require('./controllers/');

router.get('/products', controllers.products.get)
  .post('/products', controllers.products.post);

module.exports = router;