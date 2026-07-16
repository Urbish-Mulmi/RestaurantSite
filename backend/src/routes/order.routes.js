// order.routes.js
import express from "express";
import { createOrder, getAllOrders, getOrderById, success, updateOrderStatus } from "../controllers/order.controller.js";
import { isAdmin, verifyToken } from "../middlewares/auth.middlewares.js";

const orderRoutes = express.Router();

orderRoutes.route("/create").post(verifyToken, createOrder);
orderRoutes.route("/success").get(success);
orderRoutes.route("/").get(verifyToken, isAdmin, getAllOrders);
orderRoutes.route("/:id/status").patch(verifyToken, isAdmin, updateOrderStatus);
orderRoutes.route("/:id").get(getOrderById);

export default orderRoutes;