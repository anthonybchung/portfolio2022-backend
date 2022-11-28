const mongoose = require("mongoose");
const bcrypt = reqwuire("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please enter user's name"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
});

// Encrypt password pre-save(before saving)
// Using bcrypt
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.name = this.name.toLowerCase();
});
