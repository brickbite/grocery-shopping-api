require('dotenv').config()
const path = require('path');
const dataDirectory = path.join(__dirname, './data/csv')
console.log(dataDirectory);

const { Client } = require('pg');
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: null
});

client.connect();

let tablesSeeded = 0;

client.query(`COPY categories FROM '${dataDirectory}/categories.csv' DELIMITER ',' CSV;`, (err, res) => {
  console.log(err ? err.stack : res);
  tablesSeeded++;
  tablesSeeded === 6 ? client.end() : null;
});

client.query(`COPY products FROM '${dataDirectory}/products.csv' DELIMITER ',' CSV;`, (err, res) => {
  console.log(err ? err.stack : res);
  tablesSeeded++;
  tablesSeeded === 6 ? client.end() : null;
});

client.query(`COPY customers FROM '${dataDirectory}/customers.csv' DELIMITER ',' CSV;`, (err, res) => {
  console.log(err ? err.stack : res);
  tablesSeeded++;
  tablesSeeded === 6 ? client.end() : null;
});

client.query(`COPY orders FROM '${dataDirectory}/orders.csv' DELIMITER ',' CSV;`, (err, res) => {
  console.log(err ? err.stack : res);
  tablesSeeded++;
  tablesSeeded === 6 ? client.end() : null;
});

client.query(`COPY products_categories FROM '${dataDirectory}/products_categories.csv' DELIMITER ',' CSV;`, (err, res) => {
  console.log(err ? err.stack : res);
  tablesSeeded++;
  tablesSeeded === 6 ? client.end() : null;
});

client.query(`COPY orders_products FROM '${dataDirectory}/orders_products.csv' DELIMITER ',' CSV;`, (err, res) => {
  console.log(err ? err.stack : res);
  tablesSeeded++;
  tablesSeeded === 6 ? client.end() : null;
});
