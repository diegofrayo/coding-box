import express from "express";

const router = express.Router();

router.get("/", (_, res) => {
  res.send([
    { name: "Product 1", price: 1000 },
    { name: "Product 2", price: 2000 },
  ]);
});

export default {
  routerBasePath: "/products",
  router,
};
