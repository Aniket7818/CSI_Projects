# Week 7: JWT Authentication API using Node.js, Express, and MongoDB (In-Memory)

This is a simple RESTful API built with Node.js and Express that demonstrates **JWT Authentication**. It includes basic **CRUD operations** on a resource and protects routes using **JSON Web Tokens**.

---

## Features

- User Registration and Login
- Password hashing with bcrypt
- JWT-based Authentication
- Protected CRUD API routes (Products)
- Express Middleware for verifying tokens

---

## Folder Structure

```
week7-jwt-auth-api/
├── routes/
│   └── products.js
│   └── auth.js
├── middleware/
│   └── authMiddleware.js
├── server.js
├── package.json
├── .gitignore
└── README.md
```

---

## Installation & Setup

### 1. Clone the repository or extract the zip

```bash
git clone https://github.com/Aniket7818/CSI_Projects/tree/main/week7-jwt-auth
cd week7-jwt-auth-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node server.js
```

Server will run at: `http://localhost:3000`

---

## 🛠 API Endpoints

### Authentication

#### `POST /api/auth/register`

Registers a new user.

- Body:

```json
{
  "username": "john",
  "password": "123456"
}
```

#### `POST /api/auth/login`

Logs in the user and returns a token.

- Body:

```json
{
  "username": "john",
  "password": "123456"
}
```

- Response:

```json
{
  "token": "your-jwt-token"
}
```

---

### Product Routes (Protected)

**All routes below require JWT token in the header:**

```
Authorization: Bearer <token>
```

#### `GET /api/products`

Get all products.

#### `POST /api/products`

Create a new product.

- Body:

```json
{
  "name": "Laptop",
  "price": 999
}
```

---

## Testing

Use **Postman** or **Thunder Client**:

1. Register a user
2. Login to get the token
3. Copy the token and use in `Authorization` header
4. Test protected endpoints (`/api/products`)

---

## Notes

- This project does not use a real database (uses in-memory arrays).
- For production, replace user and product arrays with MongoDB + Mongoose.
- Token is valid for 1 hour.

---

## Technologies Used

- Node.js
- Express.js
- JSON Web Token (JWT)
- bcryptjs
