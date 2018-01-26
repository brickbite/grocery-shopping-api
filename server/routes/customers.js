const router = require('express').Router({mergeParams: true});
const controllers = require('../controllers');

router.use((req, res, next) => {
  console.log(`customers router: url: ${req.url} params: ${JSON.stringify(req.params)} query: ${JSON.stringify(req.query)}`);
  next();
})

router.get('/customers/orders', controllers.customers.getOrders)
  .get('/customers/categories', controllers.customers.getCategories)
  .get('/customers/*', controllers.customers.get)
  .post('/customers', controllers.customers.post);

module.exports = router;