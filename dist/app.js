"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const todo_routes_1 = __importDefault(require("./routes/todo-routes"));
const app = (0, express_1.default)();
const PORT = "3030";
app.use((0, body_parser_1.json)());
app.use("/todos", todo_routes_1.default);
app.use((err, req, res, next) => {
    res.status(200).json({ message: err.message });
});
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`);
});
