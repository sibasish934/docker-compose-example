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

app.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
