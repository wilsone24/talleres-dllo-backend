import { Request, Response } from "express";
import cors from "cors";
import express from "express";
import userRoutes from "../../v1/user.routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const SERVER_VERSION = process.env.SERVER_VERSION;

app.use(cors());
app.use(express.json());
app.use(SERVER_VERSION + "users", userRoutes);

function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: "Route wnot found.",
  });
}

app.use(routeNotFound);
app.listen(process.env.PORT, () => {
  console.log(`Server listening to port ${process.env.PORT}.`);
});
