const mongoose = require('mongoose');

const companyFinancials = new mongoose.Schema({
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
},
{
    timestamps:true
   })

   const kpiSchema = new mongoose.Schema({
    user: {type:String,unique:false},
    year:{type:String,unique:false},
    operatingMargin: {type:Number,default:0},
    grossMarginGrowthRate:{type:Number,default:0},
    snetProfitGrowthRatega:{type:Number,default:0},
    grossProfitSalesRatio:{type:Number,default:0},
    cashReinvestmentRatio:{type:Number,default:0},
    rndExpenseRatio:{type:Number,default:0},
    intCovRatio:{type: Number,default:0},
    retainedEarningsTotalAssetsRatio:{type:Number,default:0},
    currentRatio: {type:Number,default:0},
    quickRatio:{type:Number,default:0},
    cashFlowNetSalesRatio: {type:Number,default:0},
},
{
    timestamps:true
   })


const companySchema=mongoose.model('companyRecord',companyFinancials)
const kpiRecord=mongoose.model('kpiRecord',kpiSchema)

module.exports = {companySchema,kpiRecord}