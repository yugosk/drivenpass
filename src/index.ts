import express, { Express, json } from "express";
import cors from "cors";
import router from "./routers/router";

const app: Express = express();
app.use(cors());
app.use(json());
app.use(router);

const PORT: number = 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
