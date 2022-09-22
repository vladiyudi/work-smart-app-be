const mongoose = require('mongoose');

const compSchema = new mongoose.Schema({
    userid: {type:String},
    year:{type:Number},
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
})

module.exports = mongoose.model('QQQ', compSchema)