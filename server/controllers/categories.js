const db = require('../database');

module.exports = {
  get: (req, res) => {
    console.log('hello /categories get', req.query);
    db.categories.get((err, queryResult) => {
      err ? res.send(err) : res.send(queryResult);
    }, req.query.category_id);
  },
  post: (req, res) => {
    res.send('hello /categories post');
  }
};
