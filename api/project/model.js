// build your `Project` model here
const db = require("./../../data/dbConfig");

//GET
function getProjects() {
  return db("projects");
}

//POST
async function addProjects(newProjects) {
  const [project_id] = await db("projects").insert(newProjects);
  return db("projects").where({ project_id }).first();
}

module.exports = { getProjects, addProjects };
