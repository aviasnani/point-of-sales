import express from "express";
import { createSale, getAllSales } from "../controllers/saleControllers.js";

const router = express.Router();

router.post("/", recordSale);
router.get("/", getAllSales);

export default router;