import fs from "fs";

export const deleteMovie = (req, res) => {
  const { id } = req.body;
  const rawUserData = fs.readFileSync("src/db/movies.json");
  const movies = JSON.parse(rawUserData);

  const movieDelete = movies.filter((movie) => movie.id !== id);

  fs.writeFileSync("src/db/movies.json", JSON.stringify(movieDelete));
  res.send("Movie deleted successfully");
};
