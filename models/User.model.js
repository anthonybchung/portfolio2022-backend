const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
  approved: {
    type: Boolean,
    default: false,
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

// Sign JWT and return.
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

//Match user entered password to hashed password in database.
UserSchema.methods.matchPassword = async function (enteredPassword) {
  const authPassword = await bcrypt.compare(enteredPassword, this.password);
  return authPassword && this.approved;
};

module.exports = mongoose.model("User", UserSchema);
