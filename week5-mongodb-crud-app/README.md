# Celebal Internship - Node.js Week 5 Project: MongoDB CRUD App

---

## Description

This project is a simple **CRUD (Create, Read, Update, Delete)** application built using:

- **Node.js**
- **Express.js**
- **MongoDB** (via **Mongoose**)

It provides API endpoints to manage `items` stored in a MongoDB database.

---

## Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for building REST APIs
- **MongoDB** – NoSQL database for storing items
- **Mongoose** – ODM to interact with MongoDB
- **dotenv** – To securely manage environment variables

---

## Prerequisites

- [Node.js](https://nodejs.org) installed
- [MongoDB](https://www.mongodb.com/try/download/community) running locally OR a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud database

---

## How to Run the Project

1.  Clone or download this project folder.

2.  Open your terminal and navigate to the project directory:

    ```bash
    cd week5-mongodb-crud-app
    ```

3.  Initialize `npm` and install dependencies:

    ```bash
    npm init -y
    npm install express mongoose dotenv
    ```

4.  **Create a `.env` file** in the root of your project and add your MongoDB connection URI:

    ```
    MONGO_URI=mongodb://localhost:27017/crud-demo
    ```

5.  Start the server:

    ```bash
    node server.js
    ```

---

---

## Test the API (Using Postman or any REST client)

**Base URL:** `http://localhost:5000/api/items`

### 1. Create Item

- **Method:** `POST`
- **URL:** `/api/items`
- **Body (JSON):**
  ```json
  {
    "name": "Notebook",
    "quantity": 3
  }
  ```

### 2. Get All Items

- **Method:** `GET`
- **URL:** `/api/items`

### 3. Update Item

- **Method:** `PUT`
- **URL:** `/api/items/<item_id>`
- **Body (JSON):**
  ```json
  {
    "name": "Updated Notebook",
    "quantity": 5
  }
  ```

### 4. Delete Item

- **Method:** `DELETE`
- **URL:** `/api/items/<item_id>`
