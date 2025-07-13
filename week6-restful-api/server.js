const express = require("express");
const app = express();
const productRoutes = require("./routes/products");

app.use(express.json()); // Middleware to parse JSON
app.use("/api/products", productRoutes); // Use the routes

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
