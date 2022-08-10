const express = require('express');
const router = express.Router();
const { User } = require('./../models/user');
const _ = require('lodash');

router.get('/', async (req,res) => {
    return res.render('basic', {

    });
});

router.get('/reg', async (req,res) => {
    return res.render('sign_up', {

    });
});

router.post('/new_reg', async (req,res) => {
    req.body.role = '3';
    let user = new User(_.pick(req.body, ['name', 'email', 'password', 'phone','role']));
    const seve_user = await user.save();
    if(seve_user){
        const token = user.generateAuthToken();
        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            // maxAge: 1000000,
            // signed: true
        })
        return res.render('basic', {

        });
    }
});

router.get('/login', async (req,res) => {
    return res.render('login', {

    });
});


module.exports = router;