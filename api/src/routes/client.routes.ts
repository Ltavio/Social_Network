import { Router } from "express";
import { 
    createClientController,
    listClientsController,
    updateClientController,
    deleteClientController,
} from "../controllers/clients.controller";

import authTokenMiddleware from "../middleware/authToken.middleware";

const routes = Router();

const clientRoutes = () => {
  routes.post("/", createClientController);
  routes.patch("/:id",authTokenMiddleware, updateClientController);
  routes.delete("/:id",authTokenMiddleware, deleteClientController);
  routes.get("/",authTokenMiddleware, listClientsController);

  return routes;
};

export default clientRoutes;