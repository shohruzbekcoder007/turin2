const express = require('express');
const router = express.Router();
const { User } = require('./../models/user');
const _ = require('lodash');

router.get('/', async (req,res) => {
    return res.render('basic', {
        user: {}
    });
});

router.get('/reg', async (req,res) => {
    return res.render('sign_up', {

    });
});

router.post('/new_reg', async (req,res) => {
    req.body.role = 1;
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
            user: _.pick(user, ['name', 'email', 'password', 'phone','role'])
        });
    }
});

router.get('/login', async (req,res) => {
    return res.render('login', {
        
    });
});

router.post('/login', async (req,res) => {
    let user = await User.findOne(req.body)
    console.log(user)
    if(!user){
        return res.render('login', {
        
        });
    } else {
        const token = user.generateAuthToken();
        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            // maxAge: 1000000,
            // signed: true
        })
        if(user.role == 3){
            return res.render('basic', {
                user: _.pick(user, ['name', 'email', 'password', 'phone','role'])
            });
        }
        if(user.role == 2){
            return res.render('basic_admin', {
                user: _.pick(user, ['name', 'email', 'password', 'phone','role'])
            });
        }
        if(user.role == 1){
            return res.render('basic_admin', {
                user: _.pick(user, ['name', 'email', 'password', 'phone','role'])
            });
        }
    }
    
});


module.exports = router;