const express = require("express");
const Tasks = require("./model");

const router = express.Router();

//GET
router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((stuffs) => {
      stuffs.map((stuff) => {
        if (stuff.task_completed === 0) {
          stuff.task_completed = false;
        } else {
          stuff.task_completed = true;
        }
      });
      res.json(stuffs);
    })
    .catch(next);
});

//POST
router.post("/", (req, res, next) => {
  Tasks.addTasks(req.body)
    .then((stuff) => {
      if (stuff.task_completed === 0) {
        stuff.task_completed = false;
        res.json(stuff);
      } else {
        stuff.task_completed = true;
        res.json(stuff);
      }
    })
    .catch(next);
});

module.exports = router;
