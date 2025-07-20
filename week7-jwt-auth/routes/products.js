const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

let products = [{ id: 1, name: "Laptop", price: 1200 }];

// Protected - Get All
router.get("/", authenticateToken, (req, res) => {
  res.json(products);
});

// Create
router.post("/", authenticateToken, (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
