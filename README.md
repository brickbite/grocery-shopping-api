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
 ### Report of orders with breakdown of products:
 
 ```GET /api/v0/customers/orders```. Query strings are used to configure the output. Acceptable query strings: 

| Option | Default Value | Description |
| ------ | ----------- | ----------- |
| ```customer_id=``` | null | number. used to filter by a particular customer_id. leaving as null will retrieve data for all customers |

__Example Request:__
 ```GET /api/v0/customers/orders?customer_id=2```

__Example Response:__
Note: ```"count"``` is the number of orders for that category
Note: ```"total_amount"``` doesn't add up in this example. (mock data is used)
 ```json
 [
    {
        "id_customers": "2",
        "id": "2",
        "time_ordered": "2017-10-11T15:10:25.000Z",
        "total_amount": 19.95,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 2,
        "unit_price": 3.99,
        "unit_measure": "gal",
        "product_name": "milk"
    },
    {
        "id_customers": "2",
        "id": "3",
        "time_ordered": "2017-10-12T15:10:25.000Z",
        "total_amount": 34.55,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 1,
        "unit_price": 5,
        "unit_measure": "bundle",
        "product_name": "roses"
    },
    {
        "id_customers": "2",
        "id": "7",
        "time_ordered": "2017-10-15T15:20:25.000Z",
        "total_amount": 19.95,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 2,
        "unit_price": 3.99,
        "unit_measure": "box",
        "product_name": "cereal"
    },
    {
        "id_customers": "2",
        "id": "7",
        "time_ordered": "2017-10-15T15:20:25.000Z",
        "total_amount": 19.95,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 5.15,
        "unit_price": 0.8,
        "unit_measure": "lb",
        "product_name": "banana"
    },
    {
        "id_customers": "2",
        "id": "7",
        "time_ordered": "2017-10-15T15:20:25.000Z",
        "total_amount": 19.95,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 1,
        "unit_price": 3.99,
        "unit_measure": "gal",
        "product_name": "milk"
    },
    {
        "id_customers": "2",
        "id": "8",
        "time_ordered": "2017-10-15T15:20:25.000Z",
        "total_amount": 34.55,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 2,
        "unit_price": 5,
        "unit_measure": "bundle",
        "product_name": "roses"
    },
    {
        "id_customers": "2",
        "id": "12",
        "time_ordered": "2017-10-19T15:20:25.000Z",
        "total_amount": 19.95,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 1,
        "unit_price": 3.99,
        "unit_measure": "box",
        "product_name": "cereal"
    },
    {
        "id_customers": "2",
        "id": "13",
        "time_ordered": "2017-10-20T15:20:25.000Z",
        "total_amount": 34.55,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 1,
        "unit_price": 0.8,
        "unit_measure": "lb",
        "product_name": "banana"
    },
    {
        "id_customers": "2",
        "id": "17",
        "time_ordered": "2017-11-13T01:10:25.000Z",
        "total_amount": 19.95,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 1,
        "unit_price": 5.99,
        "unit_measure": "jar",
        "product_name": "honey_(8_oz)"
    },
    {
        "id_customers": "2",
        "id": "18",
        "time_ordered": "2017-11-13T01:10:25.000Z",
        "total_amount": 34.55,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 1,
        "unit_price": 3.99,
        "unit_measure": "box",
        "product_name": "cereal"
    },
    {
        "id_customers": "2",
        "id": "22",
        "time_ordered": "2017-11-17T01:10:25.000Z",
        "total_amount": 19.95,
        "currency": "USD",
        "order_status": "DELIVERED",
        "order_quantity": 1,
        "unit_price": 5.99,
        "unit_measure": "jar",
        "product_name": "honey_(8_oz)"
    },
    {
        "id_customers": "2",
        "id": "23",
        "time_ordered": "2017-11-18T01:10:25.000Z",
        "total_amount": 34.55,
        "currency": "USD",
        "order_status": "PICKING_UP",
        "order_quantity": 1,
        "unit_price": 3.99,
        "unit_measure": "box",
        "product_name": "cereal"
    }
]
 ```

 ### Report of orders grouped by category:
 
 ```GET /api/v0/customers/categories```. Query strings are used to configure the output. Acceptable query strings: 

| Option | Default Value | Description |
| ------ | ----------- | ----------- |
| ```customer_id=``` | null | number. used to filter by a particular customer_id. leaving as null will retrieve data for all customers |

__Example Request:__
 ```GET /api/v0/customers/categories?customer_id=2```

__Example Response:__
Note: ```"count"``` is the number of orders for that category
 ```json
[
    {
        "id_customers": "2",
        "first_name": "Jimmy",
        "id_categories": "1",
        "category_name": "foodstuff",
        "count": "8"
    },
    {
        "id_customers": "2",
        "first_name": "Jimmy",
        "id_categories": "2",
        "category_name": "produce",
        "count": "2"
    },
    {
        "id_customers": "2",
        "first_name": "Jimmy",
        "id_categories": "3",
        "category_name": "condiments",
        "count": "2"
    },
    {
        "id_customers": "2",
        "first_name": "Jimmy",
        "id_categories": "4",
        "category_name": "flowers",
        "count": "2"
    }
]
 ```

 ### Report of all orders within a date range, by day, week, or month:
 
 ```GET /api/v0/orders```. Query strings are used to configure the output. Acceptable query strings: 

| Option | Default Value | Description |
| ------ | ----------- | ----------- |
| ```start=``` | '-infinity' | PostgreSQL datetimetz |
| ```end=``` | 'infinity' | PostgreSQL datetimetz |
| ```period=day / week / month``` | 'week' | string. Specify ```day```, ```week```, or ```month``` |
| ```output=``` | false | boolean. if used, will write results of the query to report.csv (refer to example.report.csv file) and the server will respond with empty rows |

__Example Request:__
```GET /api/v0/orders?start='2017-11-14 23:00:00-07'&end='2017-11-18 23:00:00-07'&period=day```

__Example Response (JSON):__
Note: ```"to_char"``` is the date in the format specified
Note: ```"count"``` is the number of orders for that product
``` json
[
    {
        "to_char": "2017 11 15",
        "product_name": "celery",
        "count": "1"
    },
    {
        "to_char": "2017 11 15",
        "product_name": "roses",
        "count": "1"
    },
    {
        "to_char": "2017 11 15",
        "product_name": "soap",
        "count": "1"
    },
    {
        "to_char": "2017 11 16",
        "product_name": "honey_(8_oz)",
        "count": "1"
    },
    {
        "to_char": "2017 11 17",
        "product_name": "cereal",
        "count": "1"
    },
    {
        "to_char": "2017 11 18",
        "product_name": "banana",
        "count": "1"
    }
]
```

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
