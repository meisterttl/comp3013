import express from "express";
import cors from "cors";
import database from "./database";

type Task = {
  id: number | string;
  task: string;
  completed: boolean;
};

// Helper function to test "loading spinners" in React
const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/assignments", async (req, res) => {
  await sleep(3000);
  res.json(database.assignments);
});

app.post("/assignments", async (req, res) => {
  await sleep(3000);
  const newTask = req.body;

  if (newTask.id && "" !== newTask.task) database.assignments.push(newTask);
  res.json(database.assignments);
});

app.post("/assignments/:id/delete", async (req, res) => {
  await sleep(3000);
  const id = req.params.id;

  let newAssignments = database.assignments;

  if (id) {
    newAssignments = newAssignments.filter((task: Task) => id != task.id);
    database.assignments.length = 0;
    database.assignments = newAssignments;
  }
  res.json(newAssignments);
});

app.post("/assignments/:id/toggle", async (req, res) => {
  await sleep(3000);
  const id = req.params.id;
  const status = req.query.status;

  let newAssignments: Task[] = database.assignments;

  if (id && ("true" === status || "false" === status)) {
    newAssignments = newAssignments.map((task: Task) => {
      return id == task.id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task;
    });
    database.assignments.length = 0;
    database.assignments = newAssignments; // TODO: Fix this typescript error
  }
  res.json(newAssignments);
});

app.listen(8000, () => {
  console.log("Backend Web Server has started 🚀");
});
