const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    user: {type:String,unique:true},
    year:{type:String,unique:true},
    netsales: {type:Number},
    cogs:{type:Number},
    sga:{type:Number},
    depreciation:{type:Number},
    intexp:{type:Number},
    taxexp:{type:Number},
    rnd:{type: Number},
    fixedassets:{type:Number},
    debt: {type:Number},
    equity:{type:Number},
    inventories: {type:Number},
    receivables: {type:Number},
    cashnow:{type:Number},
    otherliquid:{type:Number},
    payable: {type:Number},
    overdraft: {type:Number},
    intpayable:{type: Number},
    otherpayable: {type:Number},
    divsnow:{type:Number}
},
{
    timestamps:true
   }
   )

const companyRecord=mongoose.model('companyRecord',companySchema)

module.exports = companyRecord