const express = require("express");

const router = express.Router();

const {
  getSideProjects,
  createSideProject,
  getSideProject,
  updateSideProject,
  deleteSideProject,
} = require("../controllers/sideProjects.controllers");
const { protect } = require("../middleware/auth");

router.route("/").get(getSideProjects).post(protect, createSideProject);

router
  .route("/:id")
  .get(getSideProject)
  .put(protect, updateSideProject)
  .delete(protect, deleteSideProject);

module.exports = router;
