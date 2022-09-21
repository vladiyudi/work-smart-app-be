const express = require('express');
const router = express.Router();
const passport = require('passport')
const {authWithGoogle}=require('../Controllers/userController')


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

module.exports = router;