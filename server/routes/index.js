const router = require('express').Router();
const controllers = require('./controllers');

router.get('/something', controllers.get)
  .post('/something', controllers.post);

module.exports = router;