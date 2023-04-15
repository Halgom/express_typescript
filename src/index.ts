import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import exampleRoutes from './routes/example.routes';
import exampleMiddleware from './middlewares/example.middleware';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  return res.send("Express with Typescript");
});

app.use("/example", exampleMiddleware, exampleRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
