const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
let users = [
  {
    username: "admin",
    password: "admin",
  },
];

app.get("/user", (req, res) => {
  res.send(users);
});

app.post("/user", (req, res) => {
  users.push(req.body);
  res.status(201).json({ message: "User added successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
