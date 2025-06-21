const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TodoSchema = new mongoose.Schema({ task: String });
const Todo = mongoose.model("Todo", TodoSchema);

// Insert sample data if collection is empty
async function insertSampleTodos() {
  const count = await Todo.countDocuments();
  if (count === 0) {
    await Todo.insertMany([
      { task: "Learn Docker Compose" },
      { task: "Write API for ToDo app" },
      { task: "Test Traefik reverse proxy" }
    ]);
    console.log("✅ Sample todos inserted");
  } else {
    console.log("ℹ️ Sample todos already exist");
  }
}

app.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.listen(port, async () => {
  console.log(`🚀 Backend running at http://localhost:${port}`);
  await insertSampleTodos(); // Seed data when server starts
});
