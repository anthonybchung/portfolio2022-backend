const express = require("express");

const router = express.Router();

const { getWeather } = require("../controllers/weatherApp.controllers");

router.route("/").get(getWeather);

module.exports = router;
