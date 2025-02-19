import fs from "fs";

export const editUser = (req, res) => {
  const { username, password } = req.body;
  const rawUserData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUserData);

  const updatedUsers = users.map((user) => {
    if (user.id === req.user.user) {
      return { ...user, username, password };
    }
    return user;
  });

  fs.writeFileSync("src/db/users.json", JSON.stringify(updatedUsers, null, 2));
  res.status(200).json({ message: "User edited successfully" });
};
