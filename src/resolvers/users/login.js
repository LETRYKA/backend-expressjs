import fs from "fs";
import jwt from "jsonwebtoken";

export const Login = (req, res) => {
  const { id, password } = req.body;

  const rawUserData = fs.readFileSync(`src/db/users.json`);
  const users = JSON.parse(rawUserData);

  const user = users.find((user) => user.id === id);

  if (user) {
    if (password === user.password) {
      res.send("Authorized");
      var token = jwt.sign({ user: user.id }, process.env.SECRET_KEY);
      console.log(token);
    } else {
      res.send("Unauthorized");
    }
  } else {
    res.send("User not found");
  }
};
