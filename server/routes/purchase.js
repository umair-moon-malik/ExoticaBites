const express = require('express')
const router = express.Router()
const Order = require('../models/Order.js')

router.post('/confirm', async (req, res) => {
   try {
    const data = {
        itemName: req.body.name,
        itemPrice: req.body.price,
        buyer: req.cookies.username,
        transactionID: req.body.transactionID
    }
    const newOrder = new Order(data);
    await newOrder.save()
    res.status(200).json({message: "Order Created. Payment will be verified within next 24 hours", newOrder})
   } catch (error) {
    console.log("Error occured");
    console.log(error);
    
    res.status(500).json({message: "Something went wrong"})
   }
})

router.get('/user-orders', async (req, res) => {
    try {
      const buyer = req.cookies.username; 
      if (!buyer) {
        return res.status(400).json({ message: "User not authenticated" });
      }
  
      const orders = await Order.find({ buyer });
      res.status(200).json({ message: "Orders fetched successfully", orders });
    } catch (error) {
      console.log("Error fetching orders:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  });
  

module.exports = router