import { Router } from "express";
// const Router = require("express");
import {
  getToDos,
  createToDo,
  updateToDo,
  deleteToDo,
} from "../controllers/todo-controllers";

const toDoRouter = Router();

toDoRouter.get("/", getToDos);
toDoRouter.post("/", createToDo);
toDoRouter.patch("/:id", updateToDo);
toDoRouter.delete("/:id", deleteToDo);

export default toDoRouter;
