import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";
import geminiRoutes from "./routes/gemini.routes";


const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.get("/test", (req: Request, res: Response) => {
//     res.send("Hello, TypeScript with Express!");
// });
// Mount the Gemini routes under the /api/v1 namespace

//input : {
//   "user_prompt": "Give me a simple Python function to check if a number is prime."
// }

//output : {
//     "response": "```python\ndef is_prime(n):\n  \"\"\"Checks if a number is prime.  Returns True if prime, False otherwise.\"\"\"\n  if n <= 1:\n    return False\n  for i in range(2, int(n**0.5) + 1):\n    if n % i == 0:\n      return False\n  return True\n```\n"
// }

//http://localhost:8000/api/v1/gemini/generate

app.use('/api/v1/gemini', geminiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
