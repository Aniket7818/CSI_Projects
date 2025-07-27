const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = "your_openweather_api_key";

router.get("/:city", async (req, res, next) => {
  try {
    const { city } = req.params;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    next(err); // forward error to middleware
  }
});

module.exports = router;
