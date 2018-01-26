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
| ```customer_id=``` | null | number. used to filter by a particular customer_id |

__Example:__
 ```GET /api/v0/customers/orders?customer_id=1```

 ### Report of orders grouped by category:
 
 ```GET /api/v0/customers/categories```. Query strings are used to configure the output. Acceptable query strings: 

| Option | Default Value | Description |
| ------ | ----------- | ----------- |
| ```customer_id=``` | null | number. used to filter by a particular customer_id |

__Example:__
 ```GET /api/v0/customers/categories?customer_id=1```

 ### Report of all orders within a date range, by day, week, or month:
 
 ```GET /api/v0/orders```. Query strings are used to configure the output. Acceptable query strings: 

| Option | Default Value | Description |
| ------ | ----------- | ----------- |
| ```start=``` | '-infinity' | PostgreSQL datetimetz |
| ```end=``` | 'infinity' | PostgreSQL datetimetz |
| ```period=day / week / month``` | 'week' | string. Specify ```day```, ```week```, or ```month``` |
| ```output=true``` | false | boolean. if true, will write results of the query to report.csv (refer to example.report.csv file) and the server will respond with empty rows |

__Example:__
```GET /api/v0/orders?start='2017-11-14 23:00:00-07'&end='2017-11-15 23:00:00-07'&period=month&output=true```

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
