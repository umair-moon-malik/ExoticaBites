const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true,
    },
    buyer: {
        type: String,
        required: true,
    },
    transactionID: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Order", orderSchema);
