import express from "express";
import { usersRouter } from "./routes/users-router.js";
import { moviesRouter } from "./routes/movies-router.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use("/user", usersRouter);
app.use("/movie", moviesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
