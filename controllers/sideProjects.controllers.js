const SideProject = require("../models/SideProject.model");
// GET: /api/v1/side-projects/
// description: get all side projects.
// by: Anthony Chung
exports.getSideProjects = async (req, res, next) => {
  try {
    const sideProjects = await SideProject.find();

    res.status(200).json(sideProjects);
  } catch (err) {
    next(err);
  }
};

// POST: /api/v1/side-projects/
// description: create a side project.
// attributes:
//  - name
//  - description
//  - category
//  -createDate
//  -urlLink
exports.createSideProject = async (req, res, next) => {
  const data = req.body;
  try {
    const sideProject = await SideProject.create(data);
    res.status(200).json(sideProject);
  } catch (err) {
    next(err);
  }
};

// GET: /api/v1/side-projects/:id
// description: get one side project.
exports.getSideProject = async (req, res, next) => {
  const id = req.params.id;
  try {
    const sideProject = await SideProject.findById(id);
    if (sideProject == null) {
      res.status(400).json({ message: "no such data" });
    }
    res.status(200).json(sideProject);
  } catch (err) {
    next(err);
  }
};

// PUT: /api/v1/side-project/:id
// description: update a side project data.
// attributes:
//  - name
//  - description
//  - category
//  -createDate
//  -urlLink
exports.updateSideProject = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const sideProject = await SideProject.findByIdAndUpdate(id, data);
    if (sideProject == null) {
      res.status(400).json({ message: "no such data" });
    }
    res.status(200).json({ message: `${sideProject._id} updated` });
  } catch (err) {
    next(err);
  }
};

// DELETE: /api/v1/side-project/:id
// description: delete a side project.
exports.deleteSideProject = async (req, res, next) => {
  const id = req.params.id;
  try {
    const sideProject = await SideProject.findByIdAndDelete(id);
    if (sideProject == null) {
      res.status(400).json({ message: "no such data" });
    }
    console.log(sideProject);
    res.status(200).json({ message: `${sideProject?._id} deleted` });
  } catch (err) {
    next(err);
  }
};
