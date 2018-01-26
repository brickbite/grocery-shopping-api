# grocery-shopping-api

## API Features:
 - Report of orders with breakdown of products
 - Report of orders grouped by category
 - Report of all orders within a date range, by day, week, or month

## Setting Up:
1. Clone this repo, navigate to the directory, and ```yarn install``` to install dependencies
1. Set up database: this example uses a local postgresql database
1. Set up .env files (refer to example.env files)
1. ```yarn run dbreset``` to set up / clear out tables (NOTE: name of db used in package.json is 'groceryapi'. Replace with your db name as needed)
1. ```yarn run seed``` to populate empty tables with mock data
1. ```yarn start``` to start the server

## Usage:
 - Requests should start with ```/api/v0```
 - Report of orders with breakdown of products: ```GET /api/v0/customers/orders```. Query strings are used to configure the output. Acceptable query strings: 
 ```customer_id=``` (used to filter by a particular customer_id. default: null)
 - Report of orders grouped by category: ```GET /api/v0/customers/categories```. Query strings are used to configure the output. Acceptable query strings: 
 ```customer_id=``` (used to filter by a particular customer_id. default: null)
 - Report of all orders within a date range, by day, week, or month: ```GET /api/v0/orders```. Query strings are used to configure the output. Acceptable query strings: 
 ```start=``` (as PostgreSQL datetimetz. default: '-infinity')
 ```end=``` (as PostgreSQL datetimetz. default: 'infinity')
 ```period=day / week / month``` (as a string. default: week)
 ```output=true``` (if true, will write results of the query to report.csv (refer to example.report.csv file) and the server will respond with empty rows default: false)

## TODO:
 - Error handling
 - Status codes in response
 - Other Routes
 - Write tests
 - Write script for testing

## Tech Stack:
 - Node.JS (with Express)
 - PostgreSQL
 - dotenv

## Notes/Comments:
 - [ comments here ]
