const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    return res.render('basic', {

    });
});

router.get('/reg', async (req,res) => {
    return res.render('sign_up', {

    });
});

router.get('/login', async (req,res) => {
    return res.render('login', {

    });
});


module.exports = router;