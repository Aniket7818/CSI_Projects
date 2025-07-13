const express = require("express");
const router = express.Router();

let products = []; // In-memory "database"
let idCounter = 1;

// Create Product
router.post("/", (req, res) => {
  const product = { id: idCounter++, ...req.body };
  products.push(product);
  res.status(201).json(product);
});

// Get All Products
router.get("/", (req, res) => {
  res.json(products);
});

// Get One Product
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
});

// Update Product
router.put("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });

  Object.assign(product, req.body);
  res.json(product);
});

// Delete Product
router.delete("/:id", (req, res) => {
  products = products.filter((p) => p.id != req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
