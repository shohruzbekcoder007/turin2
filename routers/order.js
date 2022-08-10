const express = require('express');
const router = express.Router();

const { OrderClass } = require('./../classes/order_class');

const Order = new OrderClass();

router.get('/all', async (req,res) => {
    let result = await Order.elementsAll(req);
    res.send(result);
});

router.get('/element_all', async (req,res) => {
    let result = await Order.allElementsSelectOption();
    res.send(result);
});

router.post('/create', async (req,res) => {
    let result = await Order.createElement(req);
    res.send(result);
});

router.get('/find', async (req,res) => {
    let result = await Order.elementOne(req);
    res.send(result);
});

router.delete('/delete', async (req,res) => {
    let result = await Order.elementDelete(req);
    res.send(result);
});

router.put('/update', async (req,res) => {
    let result = await Order.elementUpdate(req);
    res.send(result);
});

module.exports = router;