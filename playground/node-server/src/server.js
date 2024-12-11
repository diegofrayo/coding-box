import express from "express";

import env from "./modules/env.js";
import productsRouter from "./routes/products.js";

const app = express();

app.use(productsRouter.routerBasePath, productsRouter.router);

app.listen(env.PORT, () => {
  console.log(`Example app listening on port ${env.PORT}`);
});
