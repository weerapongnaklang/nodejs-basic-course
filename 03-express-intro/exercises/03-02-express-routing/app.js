import express from "express";
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  // 1. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
  const userID = req.query.id
  res.send(`User ID: ${userID}`)
});

app.post("/users", (req, res) => {
  // 2. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
  const id = req.body.id
  const name = req.body.name
  res.send(`POST products ID: ${id}, name: ${name}`);
});

app.get("/users/:userId", (req, res) => {
  // 3. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
  const userId = req.params.userId;
  res.send(`GET Params products ID: ${userId}`);
});

app.post("/users/:userId", (req, res) => {
  // 4. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
  const userId = req.params.userId;
  const name = req.body.name;
  res.send(`POST products ID: ${userId}, Name: ${name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
