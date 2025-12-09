import express from "express";
import cors from "cors";
import { sequelize } from "./models/index.js";
import productRoutes from "./routes/productRoutes.js";
import saleRoutes from "./routes/saleRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/sales", saleRoutes);

// Routes
app.use("/api/products", productRoutes);

// Start server
sequelize.sync().then(() => {
  app.listen(5000, () => console.log(" Server running on port 5000"));
});