import express from "express";
import { usersRouter } from "./routes/users-router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use("/user", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
