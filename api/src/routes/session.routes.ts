import { Router } from "express";
import clientSessionController from "../controllers/session.controller";

const routes = Router();

const sessionRoutes = () => {
  routes.post("/", clientSessionController);
  return routes;
};

export default sessionRoutes;