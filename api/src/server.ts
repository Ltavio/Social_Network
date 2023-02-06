import "reflect-metadata";

import AppDataSource from "./data-source";
import app from "./app";

(async () => {
    await AppDataSource.initialize().catch((error) => {
      console.error("Error during Data Source initialization", error);
    });
  
    app.listen(process.env.PORT || 3333, () => {
      console.log("server running");
    });
})();