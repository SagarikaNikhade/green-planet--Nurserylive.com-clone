const express = require("express");
const cors = require("cors");
require('dotenv').config();
const { connection } = require("./config/database");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");
const adminRoutes = require("./routes/admin");

const port = process.env.PORT;


const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);

app.listen(port, async () => {
  try {
    await connection;
    console.log(`✅ Server is running at port ${port}`);
    console.log("✅ Connected to DB");
  } catch (error) {
    console.log("❌ DB connection failed:", error.message);
  }
});
