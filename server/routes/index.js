const router = require('express').Router();
const categoriesRouter = require('./categories');
const productsRouter = require('./products');
const customersRouter = require('./customers');

router.get('/categories', categoriesRouter)
  .post('/categories', categoriesRouter);

router.get('/products', productsRouter)
  .post('/products', productsRouter);

router.get('/customers', customersRouter)
  .post('/customers', customersRouter);

module.exports = router;