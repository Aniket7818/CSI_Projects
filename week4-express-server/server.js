const express = require("express");
const app = express();
const PORT = 3000;

// Middleware: Log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware: Parse JSON body (for POST)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Express.js server!");
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

// Route 3: POST request to /data (to demonstrate JSON body parsing)
app.post("/data", (req, res) => {
  const received = req.body;
  res.json({
    message: "Data received successfully",
    yourData: received,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
