import express from "express";
import ViteExpress from "vite-express";

import cors from "cors";
import mongoose from "mongoose";
import http from "http";

import authRouter from "./routes/auth.js";
import sellerRoute from "./routes/seller.js";
import materialRoute from "./routes/material.js";
import orderRoute from "./routes/order.js";
import buyerRoute from "./routes/buyer.js"

import { MONGO_URL, PORT, isDev } from "./constants.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose //
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error.message));

const server = http.createServer(app);

// Routes
app.use("/auth", authRouter);
app.use("/api", sellerRoute);
app.use("/api", materialRoute);
app.use("/order", orderRoute);
app.use("/buyer", buyerRoute);

// Start the server
if (!isDev) {
  ViteExpress.bind(app, server);
}

server.listen(PORT, () => console.log(`Running on port ${PORT}`));
app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});
