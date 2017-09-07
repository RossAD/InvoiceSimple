# Dependencies

- sqlite3
- node
- npm

# Getting Started

###### Install npm dependencies
`npm install`

###### Run the node server
`npm start`

###### Start the webpack file watcher
`npm run watch`

###### Viewing the application in your browser
`http://localhost:8000`


# Overview
A React environment and basic application scaffold is preconfigured for this project. The babel transformer will allow you to write JSX and ES2015 syntax.

We did not include other libraries but encourage you to use any number of the following: 
- React Router
- Redux
- ReactStrap (react bootstrap)


There is already basic app scaffold. 


# Schema

## Customers

- id (integer)
- name (string)
- address (string)
- phone (string)


## Products

- id (integer)
- name (string)
- price (decimal)

## Invoices

- id (integer)
- customer_id (integer)
- discount (decimal)
- total (decimal)

## InvoiceItems

- id (integer)
- invoice_id (integer)
- product_id (integer)
- quantity (decimal)


# Resources

## Customers
```
GET|POST          /api/customers
GET|PUT|DELETE    /api/customers/{id}
```

## Products
```
GET|POST          /api/products
GET|PUT|DELETE    /api/products/{id}
```
## Invoices
```
GET|POST          /api/invoices
GET|PUT|DELETE    /api/invoices/{id}
```

## InvoiceItems
```
GET|POST          /api/invoices/{id}/items
GET|PUT|DELETE    /api/invoices/{invoice_id}/items/{id}
```
