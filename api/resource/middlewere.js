const Resources = require("./model");

const validatePost = (req, res, next) => {
  const name = req.body.resource_name;
  if (!name) {
    next({
      status: 406,
      message: "A new resource needs a name",
    });
  } else {
    Resources.getByName(name)
      .then((resource) => {
        if (resource) {
          next({
            status: 406,
            message: `The resource ${name} already exists`,
          });
        } else {
          next();
        }
      })
      .catch(next);
  }
};

module.exports = {
  validatePost,
};
