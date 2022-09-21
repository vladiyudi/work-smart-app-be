const express = require('express');
const router = express.Router();
const passport = require('passport')
const {authWithGoogle}=require('../Controllers/userController')
const {subscribe} = require('../Utils/Stripe')


router.get('/', (req, res) => {
    res.send('Hello11 World');
})


router.get('/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/google/callback', passport.authenticate('google', { 
    successRedirect: '/api/user/success',
    failureRedirect: '/api/user/fail' }), 
    )

router.get('/success', authWithGoogle)

router.get('/fail', (req, res)=>{
    res.send('fail')
}   )

router.get('/logout', (req, res)=>{
        req.logout(err=>{
            if (err) res.send(err)
            res.send('logged out')
        })
    })

router.get('/subscribe', subscribe)

module.exports = router;