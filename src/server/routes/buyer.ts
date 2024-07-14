import { Router } from "express";
import BuyerModels from "../models/BuyerModels.js";

const router = Router();

router.post("/buyerdetails", async(req, res) => {
    try {
        const {shopName, ShopOwnerName, shopAddress, phoneNumber} = req.body;
        const existingShop = await BuyerModels.findOne({shopName})

        if(existingShop) {
            return res.status(400).send({error: true, message: "shop already exists"})

        }
        const newShop = new BuyerModels({shopName, ShopOwnerName, shopAddress, phoneNumber})
        await newShop.save();
        res.status(201).send({message: "shop added Successfully"});

    } catch (error) {
        console.log("error in buyer routes", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default router;