const router = require('express').Router();
const controllers = require('./controllers/');

router.get('/categories', controllers.categories.get)
  .post('/categories', controllers.categories.post);

module.exports = router;