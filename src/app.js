import express from "express";
import { usersRouter } from "./routes/users-router.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/user", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
