const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: [250, "No loger than 250 characters"],
    trim: true,
    required: [true, "Please enter title"],
  },
  descriptions: [
    {
      type: String,
      maxlength: [500, "No longer than 500 characters"],
      trim: true,
      required: [true, "Please enter description"],
    },
  ],
  gitHub: {
    type: String,
    trim: true,
  },
  createdAtDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
