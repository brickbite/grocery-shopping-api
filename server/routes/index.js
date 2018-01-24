const router = require('express').Router();
const categoriesRouter = require('./categories');
const productsRouter = require('./products');
const customersRouter = require('./customers');
const ordersRouter = require('./orders');

router.route('/categories')
  .get(categoriesRouter)
  .post(categoriesRouter);

// ============
// TODO: products based on category id
// ============
// router.route('/products/:category_id')
//   .get(productsRouter)
//   .post(productsRouter);

router.route('/products')
  .get(productsRouter)
  .post(productsRouter);

router.route('/customers')
  .get(customersRouter)
  .post(customersRouter);

// ============
// TODO: orders based on customer id
// ============
// router.route('/orders/:customer_id')
//   .get(ordersRouter)
//   .post(ordersRouter);

// ============
// TODO: order summary based on time/date range
// ============
// router.route('/orders/summary/:timeinterval/:startdate/:enddate')
//   .get(ordersRouter)
//   .post(ordersRouter);

router.route('/orders')
  .get(ordersRouter)
  .post(ordersRouter);

module.exports = router;