import fs from "fs";

export const deleteUser = (req, res) => {
  const { id } = req.body;

  const rawUserData = fs.readFileSync(`src/db/users.json`);
  const users = JSON.parse(rawUserData);

  const userDelete = users.filter((user) => user.id !== req.user.user);

  fs.writeFileSync("src/db/users.json", JSON.stringify(userDelete));
  res.status(200).json({ message: "Users deleted successfully" });
};
