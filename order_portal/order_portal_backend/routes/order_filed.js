const express = require("express");
const router = new express.Router();
const Order = require("../models/order_field");


router.get('/order', async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json(orders);
    } catch (e) {
        res.status(500).json("Error: " + e);
    }

})


router.post('/order/add', async (req, res) => {
    const order_id = req.body.order_id;
    const item_name = req.body.item_name;
    const quantity = Number(req.body.quantity);
    const total_amount = Number(req.body.total_amount);

    const newOrder = new Order({
        order_id,
        item_name,
        quantity,
        total_amount
    });
    try {
        await newOrder.save();
        res.json('order added');
    } catch (e) {
        res.status(500).json('Error: ' + e);
    }
})

router.patch('/order/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id);
        order.order_id = req.body.order_id;
        order.item_name = req.body.item_name;
        order.quantity = Number(req.body.quantity);
        order.total_amount = Number(req.body.total_amount);
        try {
            await order.save();
            res.json('order updated');
        } catch (e) {
            res.status(500).json("Error :" + e);
        }
    } catch (e) {
        res.status(500).json("Error :" + e);
    }
})

router.delete('/order/:id', async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.json("order deleted");
    } catch (e) {
        res.status(500).json("Error :" + e);
    }
})


module.exports = router;