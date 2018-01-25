const db = require('../database');

module.exports = {
  get: (req, res) => {
    res.send('hello /orders get');
  },
  post: (req, res) => {
    res.send('hello /orders post');
  }
};
