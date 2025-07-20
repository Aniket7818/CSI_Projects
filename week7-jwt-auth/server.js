const express = require("express");
const app = express();
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
