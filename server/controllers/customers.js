const db = require('../database');

module.exports = {
  get: (req, res) => {
    // dummy response for unmatched routes
    console.log('hello /customers get');
    res.send('hello /customers get');
  },
  getOrders: (req, res) => {
    console.log('hello /customers/orders get');
    db.customers.getCustomerOrders((err, queryResult) => {
      err ? res.send(err) : res.send(queryResult);
    }, req.query.customer_id);
  },
  getCategories: (req, res) => {
    console.log('hello /customers/categories get');
    db.customers.getCustomerOrdersByCategory((err, queryResult) => {
      err ? res.send(err) : res.send(queryResult);
    }, req.query.customer_id);
  },
  post: (req, res) => {
    res.send('hello /customers post');
  }
};
