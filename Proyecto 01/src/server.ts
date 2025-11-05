import express from "express";
import cors from "cors";
import taller01Routes from "./routes/taller-01.routes";
import taller02Routes from "./routes/taller-02.routes";
import taller03Routes from "./routes/taller-03.routes";
import routeNotFound from "./routes/fallback.routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const SERVER_VERSION = process.env.SERVER_VERSION;

app.use(cors());
app.use(express.json());
app.use(SERVER_VERSION + "taller-01", taller01Routes);
app.use(SERVER_VERSION + "taller-02", taller02Routes);
app.use(SERVER_VERSION + "taller-03", taller03Routes);
app.use(routeNotFound);

app.listen(process.env.PORT, () => {
  console.log(`Server listening to port ${process.env.PORT}.`);
});
