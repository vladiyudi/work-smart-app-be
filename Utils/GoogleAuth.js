const passport = require('passport')
require('dotenv').config({path:"./.env"})
const userData = require('../Schemas/userSchema')


const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/api/user/google/callback"
  },
  
  async function(accessToken, refreshToken, profile, cb) {
    const user = await userData.findOne({email: profile.emails[0].value})
    if(user) return cb(null, user)

    else {
        const newUser = new userData({
            name: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value
        })
       const newU = await newUser.save()
        return cb(null, newU)
    }
  }
));

passport.serializeUser(function(user, cb){
cb(null, user)
})

passport.deserializeUser(function(user, cb){
cb(null, user)
})