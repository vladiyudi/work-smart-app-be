const express = require("express");
require("dotenv").config({ path: "./.env" });
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE, {useNewUrlParser:true,useUnifiedTopology:true})
const companyData = require('./Schemas/companySchema')
const axios = require('axios')

const companyRoute = require("./Routes/companyRoute");
const userRoute = require("./Routes/userRoute");
require("./Utils/GoogleAuth");

app.use(express.json());
app.use(cors({ origin: process.env.BASE_URL, credentials: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/company", companyRoute);
app.use("/api/user", userRoute);

app.use('/api/company', companyRoute)
app.use('/api/user', userRoute)

const fetchDS = async ()=>{
    try{
        const res = await axios.post('http://52.29.103.127:8080/predict_bankrupt', {" Operating Gross Margin":0.5972700673," Realized Sales Gross Profit Growth Rate":0.0220745598," Regular Net Profit Growth Rate":0.6897305265," Gross Profit to Sales":0.5972658371," Cash Reinvestment %":0.3728717261," Research and development expense rate":1970000000.0," Interest Coverage Ratio (Interest expense to EBIT)":0.5658006002," Equity to Liability":0.0231989712," Retained Earnings to Total Assets":0.9441406142," Current Ratio":0.0080948265," Average Collection Days":0.0071233087," Quick Ratio":0.0058416418," Cash Flow to Sales":0.6715755129})
    console.log("data", res.data)
    } catch(err){
        console.log(err)
    }
    
}

fetchDS()


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
})
