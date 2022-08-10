const express = require('express');
const router = express.Router();

const { ScheduleClass } = require('./../classes/schedule_class');

const Schedule = new ScheduleClass();

router.get('/all', async (req,res) => {
    let result = await Schedule.elementsAll(req);
    res.send(result);
});

router.get('/element_all', async (req,res) => {
    let result = await Schedule.allElementsSelectOption();
    res.send(result);
});

router.post('/create', async (req,res) => {
    let result = await Schedule.createElement(req);
    res.send(result);
});

router.get('/find', async (req,res) => {
    let result = await Schedule.elementOne(req);
    res.send(result);
});

router.delete('/delete', async (req,res) => {
    let result = await Schedule.elementDelete(req);
    res.send(result);
});

router.put('/update', async (req,res) => {
    let result = await Schedule.elementUpdate(req);
    res.send(result);
});

module.exports = router;