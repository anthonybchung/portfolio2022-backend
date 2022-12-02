const Blog = require("../models/Blog.model");

//Get: /api/v1/blogs/
//description: get all blogs.
//by:Anthony Chung
exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};

// POST: /api/v1/blogs/
// description: create a blog.
// attributes:
// -title
// -descriptions[]
// -github link
// -createdAtDate
exports.createBlog = async (req, res, next) => {
  const data = req.body;
  try {
    const blog = await Blog.create(data);
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

// GET: /api/v1/blogs/:id
// description: get one blog
exports.getBlog = async (req, res, next) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    if (blog == null) {
      res.status(400).json({ message: "no such data" });
    }
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

//PUT: /api/v1/blogs/:id
// description: update one blog
exports.updateBlog = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(id, data);
    if (blog == null) {
      res.status(400).json({ message: "no such data" });
    }
    res.status(200).json({ message: `${blog._id} updated` });
  } catch (err) {
    next(err);
  }
};

// DELETE: /api/v1/blogs/:id
// description: delete one blog.
exports.deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (blog == null) {
      res.status(400).json({ message: "no such data" });
    }

    res.status(200).json({ message: `${id} deleted` });
  } catch (err) {
    next(err);
  }
};
