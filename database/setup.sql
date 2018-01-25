DROP TABLE products CASCADE;
DROP TABLE categories CASCADE;
DROP TABLE customers CASCADE;
DROP TABLE orders CASCADE;
DROP TABLE orders_products CASCADE;
DROP TABLE products_categories CASCADE;

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  product_name TEXT,
  unit_type TEXT,
  unit_price REAL,
  currency VARCHAR(10)
);

CREATE TABLE categories (
  id INTEGER PRIMARY KEY,
  category_name TEXT
);

CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  first_name TEXT
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  id_customers INTEGER,
  time_ordered TIMESTAMPTZ,
  total_amount REAL,
  currency VARCHAR(10),
  order_status TEXT
);

CREATE TABLE orders_products (
  id INTEGER PRIMARY KEY,
  id_products INTEGER,
  id_orders INTEGER,
  quantity REAL,
  unit_price REAL,
  unit_type TEXT,
  currency VARCHAR(10)
);

CREATE TABLE products_categories (
  id INTEGER PRIMARY KEY,
  id_products INTEGER,
  id_categories INTEGER
);

ALTER TABLE orders ADD FOREIGN KEY (id_customers) REFERENCES customers (id);
ALTER TABLE orders_products ADD FOREIGN KEY (id_products) REFERENCES products (id);
ALTER TABLE orders_products ADD FOREIGN KEY (id_orders) REFERENCES orders (id);
ALTER TABLE products_categories ADD FOREIGN KEY (id_products) REFERENCES products (id);
ALTER TABLE products_categories ADD FOREIGN KEY (id_categories) REFERENCES categories (id);
