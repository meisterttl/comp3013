import express from "express";
import cors from "cors";
import database from "./database";

// Helper function to test "loading spinners" in React
const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/assignments", async (req, res) => {
  await sleep(2000);
  res.json(database.assignments);
});

app.post("/assignments", async (req, res) => {
  const { task } = req.body;
  console.log(req.body);
  const newAssigment = {
    id: Math.random() * 50000 + 5,
    task: task,
    completed: false,
  };

  database.assignments.push(newAssigment);
  res.status(200).json({ status: "success" });
});

app.post("/assignments/:id/delete", async (req, res) => {
  const id = Number(req.params.id);
  const assignment = database.assignments.findIndex((a) => a.id === id);
  database.assignments.splice(assignment, 1);
  res.status(200).json({ status: "success" });
});

app.post("/assignments/:id/toggle", async (req, res) => {
  const id = Number(req.params.id);
  const assignment = database.assignments.find((a) => a.id === id);
  if (assignment) {
    assignment.completed = !assignment.completed;
  }
  res.status(200).json({ status: "success" });
});

app.listen(8000, () => {
  console.log("Backend Web Server has started 🚀");
});
