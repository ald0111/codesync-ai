import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();


const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
    res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
