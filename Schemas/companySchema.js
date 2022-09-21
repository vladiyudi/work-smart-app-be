const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    user: String,
    createdAt: String,
    rawData22: Object,
    rawData21: Object,
    calculatedData: Object,
})

module.exports = mongoose.model('Company', companySchema)