import { Router } from "express";
import { 
    createContactController,
    listContactController,
    updatedContactController,
    deleteContactController
} from "../controllers/contacts.controller";

import authTokenMiddleware from "../middleware/authToken.middleware";

const routes = Router();

const contactRoutes = () => {
  routes.post("/",authTokenMiddleware, createContactController);
  routes.patch("/:id",authTokenMiddleware, updatedContactController);
  routes.delete("/:id",authTokenMiddleware, deleteContactController);
  routes.get("/",authTokenMiddleware, listContactController);

  return routes;
};

export default contactRoutes;