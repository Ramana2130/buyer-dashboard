import { Router } from "express";
import SellerModels from "../models/Sellermodels.js";

const router = Router();

router.post("/seller", async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber, address, coordinates } =
      req.body;

    const existingUser = await SellerModels.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .send({ error: true, message: "User already exists" });
    }

    const newUser = new SellerModels({
      fullName,
      email,
      password,
      phoneNumber,
      address,
      coordinates,
    });
    await newUser.save();
    res.status(201).send({ message: "User Registered Successfully" });
  } catch (error) {
    console.log("error in seller routes", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
