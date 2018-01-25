const db = require('../database');

module.exports = {
  get: (req, res) => {
    console.log('hello /customers get');
    db.customers.getCustomerOrders((err, queryResult) => {
      err ? res.send(err) : res.send(queryResult);
    }, req.query.customer_id);
  },
  post: (req, res) => {
    res.send('hello /customers post');
  }
};
