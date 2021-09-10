const db = require("./../../data/dbConfig");
//GET
function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "project_description"
    );
}

//POST
async function addTasks(newTask) {
  const [task_id] = await db("tasks").insert(newTask);
  return db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "task_id",
      "task_description",
      "task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    )
    .where({ task_id })
    .first();
}

module.exports = { getTasks, addTasks };
