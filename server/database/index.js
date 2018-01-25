const { Client } = require('pg');
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: null
});

client.connect();

// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) // Hello World!
//   client.end();
// });

module.exports = {
  categories: {
    get: (cb, name = null) => {
      const queryString = name === null ? `SELECT * FROM categories` : `SELECT * FROM categories WHERE id = ${name}`;
      console.log(queryString);
      // client.connect((err) => {
        client.query(queryString, (err, res) => {
          console.log(err ? err.stack : res);
          cb(err, res);
          // client.end();
        });

        // query.on('end', () => {

        // });
      // });
    }
  },
  products: {

  },
  customers: {
    getCustomerOrders: (cb, id) => {
      const queryString = `SELECT * FROM orders WHERE id_customers = ${id}`;
      console.log(queryString);

      client.query(queryString, (err, res) => {
        console.log(err ? err.stack : res);
        cb(err, res);
      });

    }
  },
  orders: {
    getOrdersByTime: (cb, id) => {
      // TODO: const queryString = `SELECT * FROM orders WHERE id_customers = ${id}`; 
      console.log(queryString);

      client.query(queryString, (err, res) => {
        console.log(err ? err.stack : res);
        cb(err, res);
      });

    }
  }
};
