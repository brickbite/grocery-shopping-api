DROP TABLE products CASCADE;
DROP TABLE categories CASCADE;
DROP TABLE customers CASCADE;
DROP TABLE orders CASCADE;
DROP TABLE orders_products CASCADE;
DROP TABLE products_categories CASCADE;

CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  currency VARCHAR(10) NOT NULL,
  unit_price REAL NOT NULL,
  unit_measure TEXT NOT NULL
);

CREATE TABLE categories (
  id BIGSERIAL PRIMARY KEY,
  category_name TEXT UNIQUE NOT NULL
);

CREATE TABLE customers (
  id BIGSERIAL PRIMARY KEY,
  first_name TEXT NOT NULL
);

CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  id_customers BIGSERIAL NOT NULL,
  time_ordered TIMESTAMPTZ NOT NULL,
  total_amount REAL NOT NULL,
  currency VARCHAR(10) NOT NULL,
  order_status TEXT NOT NULL
);

CREATE TABLE orders_products (
  id BIGSERIAL PRIMARY KEY,
  id_orders BIGSERIAL NOT NULL,
  id_products BIGSERIAL NOT NULL,
  order_quantity REAL NOT NULL,
  currency VARCHAR(10) NOT NULL,
  unit_price REAL NOT NULL,
  unit_measure TEXT NOT NULL
);

CREATE TABLE products_categories (
  id BIGSERIAL PRIMARY KEY,
  id_products BIGSERIAL NOT NULL,
  id_categories BIGSERIAL NOT NULL
);

ALTER TABLE orders ADD FOREIGN KEY (id_customers) REFERENCES customers (id) ON DELETE CASCADE;
ALTER TABLE orders_products ADD FOREIGN KEY (id_products) REFERENCES products (id) ON DELETE CASCADE;
ALTER TABLE orders_products ADD FOREIGN KEY (id_orders) REFERENCES orders (id) ON DELETE CASCADE;
ALTER TABLE products_categories ADD FOREIGN KEY (id_products) REFERENCES products (id) ON DELETE CASCADE;
ALTER TABLE products_categories ADD FOREIGN KEY (id_categories) REFERENCES categories (id) ON DELETE CASCADE;
