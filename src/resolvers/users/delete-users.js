import fs from "fs";

export const deleteUser = (req, res) => {
  const { id, password } = req.body;

  const rawUserData = fs.readFileSync(`src/db/users.json`);
  const users = JSON.parse(rawUserData);

  users.pop();
  res.status(200).json({ message: "Users deleted successfully" });
};
