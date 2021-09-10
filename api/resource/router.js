// build your `/api/resources` router here
const { json } = require("express");
const express = require("express");
const Resource = require("./model");
const { validatePost } = require("./middlewere");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.status(200).json(resources);
  } catch (error) {
    next(error);
  }
});

router.post("/", validatePost, async (req, res, next) => {
  try {
    const obj = await Resource.add(req.body);
    res.status(201).json(obj);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
