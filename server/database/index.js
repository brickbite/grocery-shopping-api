const { Client } = require('pg');
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: null
});

client.connect();

module.exports = {
  categories: {
    get: (cb, name = null) => {
      let queryString = `SELECT * FROM categories${name === null ? ``: ` WHERE id = ${name}`};`;
      console.log(queryString);
        client.query(queryString, (err, res) => {
          // console.log(err ? err.stack : res);
          cb(err, res.rows);
        });

    }
  },
  products: {

  },
  customers: {
    getCustomerOrders: (cb, id = null) => {
      let queryString = `
        SELECT
          orders.id_customers,
          orders.id,
          orders.time_ordered,
          orders.total_amount,
          orders.currency,
          orders.order_status,
          orders_products.order_quantity,
          orders_products.unit_price,
          orders_products.unit_measure,
          orders_products.currency,
          products.product_name
        FROM orders
        LEFT OUTER JOIN customers
          ON orders.id_customers = customers.id
        LEFT OUTER JOIN orders_products
          ON orders_products.id_orders = orders.id
        LEFT OUTER JOIN products
          ON products.id = orders_products.id_products
        ${id === null ? `` : `WHERE orders.id_customers = ${id}`}
        ORDER BY orders.id_customers;
        `;

      client.query(queryString, (err, res) => {
        // console.log(err ? err.stack : res);
        cb(err, res.rows);
      });

    },
    getCustomerOrdersByCategory: (cb, id = null) => {
      let queryString = `
        SELECT
          orders.id_customers, customers.first_name,
          products_categories.id_categories, categories.category_name,
          COUNT(categories.id)
        FROM orders
        LEFT OUTER JOIN customers
          ON customers.id = orders.id_customers
        LEFT OUTER JOIN orders_products
          ON orders.id = orders_products.id_orders
        LEFT OUTER JOIN products
          ON products.id = orders_products.id_products
        LEFT OUTER JOIN products_categories
          ON products.id = products_categories.id_products
        LEFT OUTER JOIN categories
          ON categories.id = products_categories.id_categories
        ${id === null ? `` : `WHERE orders.id_customers = ${id}`}
        GROUP BY orders.id_customers, customers.first_name,
          products_categories.id_categories, categories.category_name
        ORDER BY orders.id_customers;
        `;
      console.log(queryString);

      client.query(queryString, (err, res) => {
        // console.log(err ? err.stack : res);
        cb(err, res.rows);
      });

    }
  },
  orders: {
    getOrdersByTime: (cb, start = `'-infinity'`, end = `'infinity'`, timePeriod = 'week', csvOutput = false) => {
      const timeOptions = {
        day: 'YYYY MM DD',
        week: 'YYYY WW',
        month: 'YYYY MM'
      };

      let queryString = `
        SELECT
          TO_CHAR(orders.time_ordered, '${timeOptions[timePeriod]}'),
          products.product_name,
          COUNT(TO_CHAR(orders.time_ordered, '${timeOptions[timePeriod]}'))
        FROM orders
        LEFT OUTER JOIN orders_products
          ON orders.id = orders_products.id_orders
        LEFT OUTER JOIN products
          ON orders_products.id_products = products.id
        WHERE orders.time_ordered BETWEEN ${start} AND ${end}
        GROUP BY TO_CHAR(time_ordered, '${timeOptions[timePeriod]}'),
          products.product_name
        ORDER BY TO_CHAR(time_ordered, '${timeOptions[timePeriod]}')
        `;

      csvOutput ? queryString = `COPY (${queryString}) TO '${__dirname}/report.csv' CSV;` : queryString += `;`;

      console.log(queryString);

      client.query(queryString, (err, res) => {
        // console.log(err ? err.stack : res);
        cb(err, res.rows);
      });

    }
  }
};
