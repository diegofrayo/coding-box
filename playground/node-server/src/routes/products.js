import express from "express";

const router = express.Router();

router.get("/", async (_, res) => {
	await new Promise((resolve) => setTimeout(resolve, 1000 * 2000));
	res.send([
		{ name: "Product 1", price: 1000 },
		{ name: "Product 2", price: 2000 },
	]);
});

export default {
	routerBasePath: "/products",
	router,
};
