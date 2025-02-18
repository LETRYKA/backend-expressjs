import fs from "fs";

export const getUsers = (req, res) => {
  fs.readFile("src/db/users.json", (err, data) => {
    res.send(JSON.parse(data));
  });
};
