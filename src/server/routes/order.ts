import { Router } from "express";
import SellerModels from "../models/Sellermodels.js";
import BuyerModels from "../models/BuyerModels.js";
import MaterialModels from "../models/Materialmodels.js";

const router = Router();

router.post("/book", async (req, res) => {
  const { sellerId, buyerId, materialId } = req.body;
  try {
    const seller = await SellerModels.findById(sellerId);
    const buyer = await BuyerModels.findById(buyerId);
    const material = await MaterialModels.findById(materialId);

    if (!seller) {
      return res.status(404).send({ error: "Seller not found" });
    }
    if (!buyer) {
      return res.status(404).send({ error: "Buyer not found" });
    }
    if (!material) {
      return res.status(404).send({ error: "Material not found" });
    }

    buyer.sellerDetails = {
      sellerId: seller._id,
      fullName: seller.fullName,
      phoneNumber: seller.phoneNumber,
      address: seller.address,
      coordinates: seller.coordinates,
    };

    await buyer.save();
    res
      .status(200)
      .send({
        message: "Order booked successfully",
        sellerDetails: buyer.sellerDetails,
      });
  } catch (error) {
    console.error("Error booking material:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
