const companyData = require('../Schemas/companySchema')


exports.updateDB = async (req, res) => {
const {userid} = req.body
const {rawdata} = req.body
console.log(req.body)
res.send(req.body)
}