const mongoose = require("mongoose");

const SideProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: [50, "No longer than 50 characters"],
    trim: true,
    unique: true,
    required: [true, "Please enter name"],
  },
  description: {
    type: String,
    maxlength: [200, "No longer than 200 characters"],
    trim: true,
  },
  keyPoints: [
    {
      type: String,
      maxlength: [200, "No longer than 200 characters"],
      trim: true,
    },
  ],
  category: {
    type: String,
    enum: [
      "Front End",
      "Back End",
      "Full Stack",
      "JavaScript",
      "Ruby on Rails",
    ],
    message: "Please enter: Front End, Back End, JavaScript, Ruby on Rails",
    required: [true, "Please enter category"],
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  urlLink: {
    type: String,
  },
});

module.exports = mongoose.model("SideProject", SideProjectSchema);
