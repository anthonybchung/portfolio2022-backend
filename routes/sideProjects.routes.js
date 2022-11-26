const express = require("express");

const router = express.Router();

const {
  getSideProjects,
  createSideProject,
  getSideProject,
  updateSideProject,
  deleteSideProject,
} = require("../controllers/sideProjects.controllers");

router.route("/").get(getSideProjects).post(createSideProject);

router
  .route("/:id")
  .get(getSideProject)
  .put(updateSideProject)
  .delete(deleteSideProject);

module.exports = router;
