const express = require("express");
const { validateProject } = require("./middlewere");
const Projects = require("./model");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const item = await Projects.addProjects(req.body);
    if (item.project_completed === 0) {
      item.project_completed = false;
    } else {
      item.project_completed = true;
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.getProjects();
    projects.map((project) => {
      if (project.project_completed === 0) {
        project.project_completed = false;
      } else {
        project.project_completed = true;
      }
    });
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
