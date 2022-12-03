const express = require("express");

const router = express.Router();
const { protect } = require("../middleware/auth");
const { getWeather } = require("../controllers/weatherApp.controllers");

router.route("/").get(getWeather);

module.exports = router;
