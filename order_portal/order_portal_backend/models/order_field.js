const mongoose = require("mongoose");

const order_filed = new mongoose.Schema({
    order_id: {
        type: Number,
        required: true,
        trim: true
    },
    item_name: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true,
        trim: true,
    },
    total_amount: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = Order = mongoose.model('Order', order_filed);