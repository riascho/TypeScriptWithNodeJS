import { Router } from "express";
// const Router = require("express");

const toDoRouter = Router();

toDoRouter.get("/");
toDoRouter.post("/");
toDoRouter.patch("/:id"); // PUT requests
toDoRouter.delete("/:id");

export default toDoRouter;
