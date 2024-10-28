import express from "express";
// import express, {Request, Response, NextFunction} from "express"; // if we wanted to shorten the types
import toDoRouter from "./routes/todos";

const app = express();
const PORT = "3030";

// for endpoint
app.use("/todos", toDoRouter);

// for everything else - error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(200).json({ message: err.message });
  }
);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
