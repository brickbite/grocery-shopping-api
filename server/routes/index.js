const router = require('express').Router();
const categoriesRouter = require('./categories');
const productsRouter = require('./products');
const customersRouter = require('./customers');
const ordersRouter = require('./orders');

router.route('/categories')
  .get(categoriesRouter)
  .post(categoriesRouter);

router.route('/products')
  .get(productsRouter)
  .post(productsRouter);

router.route('/customers')
  .get(customersRouter)
  .post(customersRouter);

router.route('/orders')
  .get(ordersRouter)
  .post(ordersRouter);

module.exports = router;