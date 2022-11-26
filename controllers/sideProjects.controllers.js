// GET: /api/v1/side-projects/
// description: get all side projects.
// by: Anthony Chung
exports.getSideProjects = async (req, res, next) => {
  res.status(200).json({ data: "all side projects" });
};

exports.createSideProject = async (req, res, next) => {
  res.status(200).json({ data: "create side project" });
};

exports.getSideProject = async (req, res, next) => {
  res.status(200).json({ data: "get one side project" + req.params.id });
};

exports.updateSideProject = async (req, res, next) => {
  res.status(200).json({ data: "update one side project" + req.params.id });
};

exports.deleteSideProject = async (req, res, next) => {
  res.status(200).json({ data: "delete one side project" + req.params.id });
};
