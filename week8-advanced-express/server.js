const express = require("express");
const app = express();
const uploadRoute = require("./routes/upload");
const weatherRoute = require("./routes/weather");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use("/api/upload", uploadRoute);
app.use("/api/weather", weatherRoute);
app.use(errorHandler); // should be last

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
