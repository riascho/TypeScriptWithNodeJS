"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDo = exports.updateToDo = exports.getToDos = exports.createToDo = void 0;
const todo_model_1 = require("../models/todo-model");
const toDos = [{ id: "0", text: "Do Stuff" }];
let idCounter = 1;
const createToDo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_model_1.Todo(idCounter.toString(), text);
    idCounter++;
    toDos.push(newTodo);
    res
        .status(201)
        .json({ message: "Successfully added new Todo!", newToDo: newTodo });
};
exports.createToDo = createToDo;
const getToDos = (req, res, next) => {
    res.status(400).json({ toDos: toDos });
};
exports.getToDos = getToDos;
const updateToDo = (req, res, next) => {
    const toDoId = req.params.id;
    const newText = req.body.text;
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
exports.updateToDo = updateToDo;
const deleteToDo = (req, res, next) => {
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
exports.deleteToDo = deleteToDo;
