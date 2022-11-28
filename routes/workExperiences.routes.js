const express = require("express");
const router = express.Router();

const {
  getWorkExperiences,
  createWorkExperience,
  getWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
} = require("../controllers/workExperiences.controllers");

router.route("/").get(getWorkExperiences).post(createWorkExperience);

router
  .route("/:id")
  .get(getWorkExperience)
  .put(updateWorkExperience)
  .delete(deleteWorkExperience);

module.exports = router;
