import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { createUser } from "../resolvers/users/create-users.js";
import { editUser } from "../resolvers/users/put-user.js";
import { deleteUser } from "../resolvers/users/delete-users.js";
import { Login } from "../resolvers/users/login.js";

export const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.get("/sign-in", Login);
usersRouter.post("/", createUser);
usersRouter.put("/", editUser);
usersRouter.delete("/", deleteUser);
