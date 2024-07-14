import { Router } from "express";
import OrderConfirmationModel from "../models/Orderconfirmation.js";
import BuyerModels from "../models/BuyerModels.js";
import SellerModels from "../models/Sellermodels.js";

const router = Router();

router.put('/orderConfirmation' ,async(req, res) =>{
    const {orderId, status} = req.body;
    try {
        const orderStatus = await OrderConfirmationModel.findById(orderId);
        if (!orderStatus) {
            return res.status(404).json({ error: "Order not found" });
        }
        //Update order status
        orderStatus.status = status
        await orderStatus.save();

        // Find the buyer and seller associated with this order
        const buyer = await BuyerModels.findById(orderStatus.buyer);
        const seller = await SellerModels.findById(orderStatus.seller);

        if (!buyer || !seller) {
            return res.status(404).json({ error: "Buyer or Seller not found" });
        }

        res.status(200).json({ message: "Order status updated successfully", orderStatus });
    } catch (err) {
        console.error("Error updating order status:", err);
        res.status(500).json({ error: "Server error" });
    }
})

export default router;