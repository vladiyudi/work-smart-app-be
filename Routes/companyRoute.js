const express = require('express');
const router = express.Router();
const companyData = require('../Schemas/companySchema')
const {updateDB, calculateKPI, getDataScience} = require('../Controllers/companyController')
const {auth} = require('../Middleware/userMiddleware')
const {getCalculations} = require('../Middleware/company')
router.post('/submit', auth, updateDB)
router.get('/kpi', calculateKPI)



router.get('/result', calculateKPI, getDataScience)
module.exports = router;