const db = require('../database');

module.exports = {
  get: (req, res) => {
    console.log('hello /orders get');
    db.orders.get((err, queryResult) => {
      err ? res.send(err) : res.send(queryResult);
    }, req.query.order_id);
  },
  post: (req, res) => {
    res.send('hello /orders post');
  }
};
