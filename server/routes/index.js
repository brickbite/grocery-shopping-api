const router = require('express').Router();
const categoriesRouter = require('./categories');

router.get('/categories', categoriesRouter)
  .post('/categories', categoriesRouter);

module.exports = router;