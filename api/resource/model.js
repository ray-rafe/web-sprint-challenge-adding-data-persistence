// build your `Resource` model here
const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};

const getById = (id) => {
  return db("resources")
    .select("resource_id", "resource_name", "resource_description")
    .where("resource_id", id)
    .first();
};

function getByName(name) {
  return db("resources").where({ resource_name: name }).first();
}

const add = async (resource) => {
  const [id] = await db("resources").insert(resource);
  return getById(id);
};

module.exports = {
  getAll,
  add,
  getByName,
};
