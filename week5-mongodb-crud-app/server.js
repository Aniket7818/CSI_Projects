require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const itemRoutes = require("./routes/items");

// Middleware
app.use(express.json());

// Routes
app.use("/api/items", itemRoutes);

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () =>
      console.log("Server running on http://localhost:5000")
    );
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
