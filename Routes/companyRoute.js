const express = require('express');
const router = express.Router();
const companyData = require('../Schemas/companySchema')
const {updateDB} = require('../Controllers/companyController')
const {auth} = require('../Middleware/userMiddleware')
const {getCalculations} = require('../Middleware/company')


router.post('/submit', auth, updateDB)

module.exports = router;