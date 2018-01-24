const router = require('express').Router();
const controllers = require('../controllers');

router.get('/customers', controllers.customers.get)
  .post('/customers', controllers.customers.post);

module.exports = router;