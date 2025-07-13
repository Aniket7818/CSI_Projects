# RESTful API using Node.js & Express

## Description

This is a simple RESTful API project demonstrating basic CRUD operations on a `products` resource using:

- Node.js
- Express.js

The API supports:

- Create product
- Read product(s)
- Update product
- Delete product

---

## How to Run the Project

### Prerequisites

- [Node.js](https://nodejs.org/) must be installed.

### Steps

1. Clone or download this project:

   ```bash
   git clone <your-repo-url>
   cd restful-api-products
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Open Postman or browser and test the API.

---

## API Endpoints

Base URL: `http://localhost:3000/api/products`

### Create Product

- `POST /`
- Body:

```json
{
  "name": "Laptop",
  "price": 1200
}
```

### Get All Products

- `GET /`

### Get Product by ID

- `GET /:id`

### Update Product

- `PUT /:id`
- Body:

```json
{
  "name": "Gaming Laptop",
  "price": 1500
}
```

### Delete Product

- `DELETE /:id`
