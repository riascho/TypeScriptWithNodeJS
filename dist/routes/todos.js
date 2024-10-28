"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toDoRouter = (0, express_1.Router)();
toDoRouter.get("/");
toDoRouter.post("/");
toDoRouter.patch("/:id");
toDoRouter.delete("/:id");
exports.default = toDoRouter;
