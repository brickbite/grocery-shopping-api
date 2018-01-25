require('dotenv').config()
const path = require('path');
const dataDirectory = path.join(__dirname, './data')
console.log(dataDirectory);

// const categoriesData = require('./data/categories.json');
// const productsData = require('./data/products.json');
// const customersData = require('./data/customers.json');
// const ordersData = require('./data/orders.json');
// const orders_productsData = require('./data/orders_products.json');
// const products_categoriesData = require('./data/products_categories.json');

const { Client } = require('pg');
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: null
});

client.connect()

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})
