import fs from "fs";

export const getMovie = (req, res) => {
  const rawUserData = fs.readFileSync(`src/db/movies.json`);
  const movies = JSON.parse(rawUserData);
  res.send(movies);
};
