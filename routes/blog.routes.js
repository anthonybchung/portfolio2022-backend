const express = require("express");
const {
  getBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controllers");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(getBlogs).post(protect, createBlog);

router
  .route("/:id")
  .get(getBlog)
  .put(protect, updateBlog)
  .delete(protect, deleteBlog);

module.exports = router;
