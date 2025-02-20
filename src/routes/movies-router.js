import express from "express";
import { createMovie } from "../resolvers/movies/create-movie.js";
import { deleteMovie } from "../resolvers/movies/delete-movie.js";
import { getMovie } from "../resolvers/movies/get-movie.js";
import { editMovie } from "../resolvers/movies/put-movie.js";

import { authorizationMW } from "../middleware/authorizationMW.js";
export const moviesRouter = express.Router();

moviesRouter.get("/", authorizationMW, getMovie);
moviesRouter.put("/", authorizationMW, editMovie);
moviesRouter.delete("/", authorizationMW, deleteMovie);
moviesRouter.post("/", authorizationMW, createMovie);
