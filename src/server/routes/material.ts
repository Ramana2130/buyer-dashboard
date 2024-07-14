import { Router } from "express";
import MaterialModels from "../models/Materialmodels.js";

const router = Router()

router.post("/material", async (req, res) => {
    try {
        const {productName, price, description, address, city, state, pincode, image, phoneNumber, quantity} = req.body;
        const existingProduct = await MaterialModels.findOne({productName})
        if(existingProduct) {
            return res.status(400).send({error: true, message: "Product already added"})

        }
        const newMaterial = new MaterialModels({productName, price, description, address, city, state, pincode, image, phoneNumber, quantity})
        await newMaterial.save();
        res.status(201).send({message: "product added Successfully"})
    } catch (error) {
        console.log("error in material routes", error);
        res.status(500).json({ error: "Internal server error" }); 
    }
})

export default router;