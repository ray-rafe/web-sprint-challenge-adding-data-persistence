const projects = require("./model");

function validateProject(req, res, next) {
  const { project_name } = req.body;
  if (project_name === undefined) {
    next({ status: 400, message: "please provide a name for the project" });
  } else {
    if (res.project_completed === 0) {
      res.project_completed = false;
      next();
    } else {
      res.project_completed = true;
      next();
    }
  }
}

module.exports = { validateProject };
