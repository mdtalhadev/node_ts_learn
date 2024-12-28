import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import homeRouter from "./routes/router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/", homeRouter);


app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});