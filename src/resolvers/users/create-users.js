import fs from "fs";

export const createUser = (req, res) => {
  const { id, username, password } = req.body;

  // Getting users from db
  const rawUserData = fs.readFileSync(`src/db/users.json`);
  const users = JSON.parse(rawUserData);

  if (id && username && password) {
    const user = users.find((user) => user.id === id);

    if (user === undefined) {
      users.push(req.body);

      // Writing user data to db
      fs.writeFileSync("src/db/users.json", JSON.stringify(users));
      res.status(201).json({ message: "User added successfully" });
    } else {
      res.send("User with that id already exists");
    }
  } else {
    res.send("Please include id, username, password");
  }
};
