const express = require("express");
const router = express.Router();

const {
  getWorkExperiences,
  createWorkExperience,
  getWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
} = require("../controllers/workExperiences.controllers");

const { protect } = require("../middleware/auth");
router.route("/").get(getWorkExperiences).post(protect, createWorkExperience);

router
  .route("/:id")
  .get(getWorkExperience)
  .put(protect, updateWorkExperience)
  .delete(protect, deleteWorkExperience);

module.exports = router;
