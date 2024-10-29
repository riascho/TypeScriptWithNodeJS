"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controllers_1 = require("../controllers/todo-controllers");
const toDoRouter = (0, express_1.Router)();
toDoRouter.get("/", todo_controllers_1.getToDos);
toDoRouter.post("/", todo_controllers_1.createToDo);
toDoRouter.patch("/:id", todo_controllers_1.updateToDo);
toDoRouter.delete("/:id", todo_controllers_1.deleteToDo);
exports.default = toDoRouter;
