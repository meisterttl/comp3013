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

  if (id) {
    const newAssignments = database.assignments.filter(
      (task: Task) => id != task.id
    );

    database.assignments.length = 0;
    database.assignments.push(...newAssignments);
  }
  res.json(database.assignments);
});

app.post("/assignments/:id/toggle", async (req, res) => {
  await sleep(3000);
  const id = req.params.id;
  const status = req.query.status;

  if (id && ("true" === status || "false" === status)) {
    const newAssignments = database.assignments.map((task: Task) => {
      return id == task.id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task;
    });

    database.assignments.length = 0;
    (database.assignments as Task[]).push(...newAssignments);
  }
  res.json(database.assignments);
});

app.listen(8000, () => {
  console.log("Backend Web Server has started 🚀");
});
