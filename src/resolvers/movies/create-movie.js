import fs from "fs";

export const createMovie = (req, res) => {
  const { title, poster_path, release_date, id } = req.body;
  const rawUserData = fs.readFileSync(`src/db/movies.json`);
  const movies = JSON.parse(rawUserData);

  if (title && poster_path && release_date) {
    const movie = movies.find((movie) => movie.id === id);
    if (movie === undefined) {
      movies.push(req.body);
      fs.writeFileSync("src/db/movies.json", JSON.stringify(movies));
      res.send("Movie added successfully");
    } else {
      res.send("Movie with that id already exists");
    }
  } else {
    res.send("Please enter movie title, poster_path, release_date");
  }
};
