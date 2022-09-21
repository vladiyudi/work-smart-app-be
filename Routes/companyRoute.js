const express = require('express');
const router = express.Router();
const companyData = require('../Schemas/companySchema')
const {updateDB} = require('../Controllers/companyController')
const {auth} = require('../Middleware/userMiddleware')
const {getCalculations} = require('../Middleware/company')


router.post('/analize', auth, getCalculations, updateDB)

module.exports = router;