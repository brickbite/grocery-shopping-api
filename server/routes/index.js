const router = require('express').Router();
const categoriesRouter = require('./categories');
const productsRouter = require('./products');

router.get('/categories', categoriesRouter)
  .post('/categories', categoriesRouter);

router.get('/products', productsRouter)
  .post('/products', productsRouter);

module.exports = router;