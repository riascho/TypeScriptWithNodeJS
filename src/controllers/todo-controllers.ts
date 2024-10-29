// import { Request, Response, NextFunction } from "express";

// export const createToDo = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

import { RequestHandler } from "express";
import { Todo } from "../models/todo-model";

const toDos: Todo[] = [{ id: "0", text: "Do Stuff" }];
let idCounter = 1;

export const createToDo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(idCounter.toString(), text);
  idCounter++;
  toDos.push(newTodo);
  res
    .status(201)
    .json({ message: "Successfully added new Todo!", newToDo: newTodo });
};

export const getToDos: RequestHandler = (req, res, next) => {
  res.status(400).json({ toDos: toDos });
};

export const updateToDo: RequestHandler<{ id: string }> = (req, res, next) => {
  const toDoId = req.params.id;
  const newText = (req.body as { text: string }).text;
  const toDoIndex = toDos.findIndex((item) => {
    return item.id == toDoId;
  });
  if (toDoIndex === -1) {
    res.status(500).json({ message: `Could not find ToDo with id ${toDoId}` });
    throw new Error(`Could not find ToDo with id ${toDoId}`);
  }
  const toDotoUpdate = toDos[toDoIndex];
  toDotoUpdate.text = newText;
  res
    .status(200)
    .json({ message: "Successfully updated!", updatedToDo: toDotoUpdate });
};

export const deleteToDo: RequestHandler<{ id: string }> = (req, res, next) => {
  const toDoId = req.params.id;
  const toDoIndex = toDos.findIndex((item) => {
    return item.id == toDoId;
  });
  if (toDoIndex === -1) {
    res.status(500).json({ message: `Could not find ToDo with id ${toDoId}` });
    throw new Error(`Could not find ToDo with id ${toDoId}`);
  }
  const toDotoDelete = toDos[toDoIndex];
  toDos.splice(toDoIndex, 1);
  res.status(200).json({ message: "Deleted!", updatedToDo: toDotoDelete });
};
