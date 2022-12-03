const express = require("express");
const { register, login } = require("../controllers/auth.controllers");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.post("/register", protect, register);
router.post("/login", login);

module.exports = router;
