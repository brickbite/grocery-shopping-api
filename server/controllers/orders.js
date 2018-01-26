const db = require('../database');

module.exports = {
  get: (req, res) => {
    console.log('hello /orders get');
    db.orders.getOrdersByTime((err, queryResult) => {
      err ? res.send(err) : res.send(queryResult);
    }, req.query.start, req.query.end, req.query.period, req.query.output);
  },
  post: (req, res) => {
    res.send('hello /orders post');
  }
};
