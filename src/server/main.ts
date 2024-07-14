import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import sellerRoute from './routes/seller.js';
import materialRoute from './routes/material.js';
const app = express();
app.use(express.json());
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL ?? '')
.then(() => console.log("Database connected Successfully"))
.catch((error) => console.log("Database not connected " , error))

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

app.use('/api', sellerRoute);
app.use('/api', materialRoute);


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
