const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    user: String,
    year: Number,
    netsales: Number,
    cogs:Number,
    sga:Number,
    depreciation:Number,
    intexp:Number,
    taxexp:Number,
    rnd: Number,
    fixedassets:Number,
    debt: Number,
    equity:Number,
    inventories: Number,
    receivables: Number,
    cashnow:Number,
    otherliquid: Number,
    payable: Number,
    overdraft: Number,
    intpayable: Number,
    otherpayable: Number,
    divsnow:Number,
})

module.exports = mongoose.model('Company', companySchema)