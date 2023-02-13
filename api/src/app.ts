import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { AppRoutes } from "./routes";
import handleErrorMidleware from "./middleware/handleError.middleware";
let cors = require('cors')


const app = express();
app.use(express.json());

AppRoutes(app);

app.use(handleErrorMidleware);

app.use(cors())

export default app;