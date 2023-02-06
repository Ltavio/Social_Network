import { Express } from "express";

import clientRoutes from "./client.routes";
import contactRoutes from "./contact.routes";
import sessionRoutes from "./session.routes";

export const AppRoutes = (app: Express) => {
    app.use("/clients", clientRoutes());
    app.use("/login", sessionRoutes());
    app.use("/contacts", contactRoutes());
}