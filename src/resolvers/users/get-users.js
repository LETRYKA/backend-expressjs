import fs from "fs";
import jwt from "jsonwebtoken";

export const getUsers = (req, res) => {
  const rawUserData = fs.readFileSync(`src/db/users.json`);
  const users = JSON.parse(rawUserData);
  const token = req.headers.authorization.split(" ")[1];

  try {
    const user = users.find((user) => user.id === req.user.user);
    res.send(user);
  } catch {
    res.send("Something went wrong");
  }
};
