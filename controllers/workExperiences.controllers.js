const WorkExperience = require("../models/WorkExperience.model");
// GET: /api/v1/work-experiences/
// description: get all work experiences.
// by: Anthony Chung
exports.getWorkExperiences = async (req, res, next) => {
  try {
    const workExperiences = await WorkExperience.find();
    res.status(200).json(workExperiences);
  } catch (err) {
    next(err);
  }
};

// POST: /api/v1/work-experiences/
// description: create a work experience.
// attributes:
//  - period: string
//  -company: string
//  -address: string,
//  -profession: string
//  -responsibilities:
exports.createWorkExperience = async (req, res, next) => {
  const data = req.body;
  try {
    const workExperience = await WorkExperience.create(data);
    res.status(200).json(workExperience);
  } catch (err) {
    nex(err);
  }
};

// GET: /api/v1/work-experience/:id
// description: get one workexperience card.
exports.getWorkExperience = async (req, res, next) => {
  const data = req.body;
  try {
    const workExperience = await WorkExperience.findById(id);
    if (workExperience == null) {
      res.status(400).json({ message: "no such id" });
    }
  } catch (err) {
    next(err);
  }
};

// PUT: /api/v1/work-experience/:id
// description: update a workexperience card.
exports.updateWorkExperience = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  try {
    const workExperience = await WorkExperience.findByIdAndUpdate(id, data);
    if (workExperience == null) {
      res.status(400).json({ message: "no such id" });
    }
  } catch (err) {
    next(err);
  }
};

// DELETE: /api/v1/work-experience/:id
// description: delete a work experience card.
exports.deleteWorkExperience = async (req, res, next) => {
  const id = req.params.id;

  try {
    const workExperience = await WorkExperience.findByIdAndDelete(id);
    if (workExperience == null) {
      res.status(400).json({ message: "no such id" });
    }
  } catch (err) {
    next(err);
  }
};
