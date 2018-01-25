const { Client } = require('pg');
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: null
});

client.connect();

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end();
});

module.exports = {
  categories: {
    getAll: (cb) => {
      client.query(`SELECT * FROM categories`, (err, res) => {
        console.log(err ? err.stack : res);
        cb(res);
        client.end();
      });
    },
    getName: (cb, name) => {
      client.query(`SELECT * FROM categories WHERE category_name=${name}`, (err, res) => {
        console.log(err ? err.stack : res);
        cb(res);
        client.end();
      });
    }
  },
  products: {

  },
  customers: {

  },
  orders: {

  }
};
