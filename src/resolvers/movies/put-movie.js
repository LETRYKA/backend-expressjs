import fs from "fs";

export const editMovie = (req, res) => {
  const { id, title, poster_path, release_date } = req.body;
  const rawUserData = fs.readFileSync("src/db/movies.json");
  const movies = JSON.parse(rawUserData);

  const updatedMovies = movies.map((movie) => {
    if (id == movie.id) {
      return {
        ...movie,
        id: id !== undefined ? id : movie.id,
        title: title !== undefined ? title : movie.title,
        poster_path:
          poster_path !== undefined ? poster_path : movie.poster_path,
        release_date:
          release_date !== undefined ? release_date : movie.release_date,
      };
    }
    return movie;
  });

  fs.writeFileSync(
    "src/db/movies.json",
    JSON.stringify(updatedMovies, null, 2)
  );
  res.send("Movie edited successfully");
};
