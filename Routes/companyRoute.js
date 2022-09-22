const express = require('express');
const router = express.Router();
const companyData = require('../Schemas/companySchema')
const {updateDB, calculateKPI} = require('../Controllers/companyController')
const {auth} = require('../Middleware/userMiddleware')
const {getCalculations} = require('../Middleware/company')
router.post('/submit', auth, updateDB)
router.post('/kpi', calculateKPI)



router.get('/result', auth)
module.exports = router;