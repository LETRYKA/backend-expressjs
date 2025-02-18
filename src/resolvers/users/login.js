import fs from "fs";

export const Login = (req, res) => {
  const { id, password } = req.body;

  const rawUserData = fs.readFileSync(`src/db/users.json`);
  const users = JSON.parse(rawUserData);

  const user = users.find((user) => user.id === id);

  if (user) {
    if (password === user.password) {
      res.send("Authorized");
    } else {
      res.send("Unauthorized");
    }
  } else {
    res.send("User not found");
  }
};
