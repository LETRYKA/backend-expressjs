import fs from "fs";

export const editUser = (req, res) => {
  const rawUserData = fs.readFileSync(`src/db/users.json`);
  const users = JSON.parse(rawUserData);

  users[0] = req.body;
  res.status(200).json({ message: "User edited successfully" });
};
