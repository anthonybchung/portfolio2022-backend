const mongoose = require("mongoose");

const WorkExperienceSchema = new mongoose.Schema({
  period: {
    type: String,
    maxlength: [50, "No longer than 50 characters"],
    trim: true,
  },
  company: String,
  address: { type: String, maxlength: [100, "No longer than 100 characters"] },
  profession: {
    type: String,
    maxlength: [100, "No longer than 100 characters"],
  },
  responsibility: [String],
});

module.exports = mongoose.model("WorkExperience", WorkExperienceSchema);
