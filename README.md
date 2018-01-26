# grocery-shopping-api

## API Features:
 - Report of orders with breakdown of products
 - Report of orders grouped by category
 - Report of all orders within a date range, by day, week, or month

## Setting Up:
1. Clone this repo, navigate to the directory, and ```yarn install``` to install dependencies
1. Set up database: example uses a local postgresql database
1. Set up .env files (refer to examples)
1. ```psql -d database_name -a -f setup.sql``` to set up / clear out tables
1. ```yarn run seed``` to populate empty tables

## Usage:
 - [description of endpoints here]

## TODO:
 - Write scripts for start, test, seed db, reset db
 - Write tests

## Tech Stack:
 - Node.JS (with Express)
 - PostgreSQL
 - dotenv

## Notes/Comments:
 - [comments here]
