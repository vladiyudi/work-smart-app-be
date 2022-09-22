const express = require('express');
const router = express.Router();
const companyData = require('../Schemas/companySchema')
const {updateDB, calculateKPI} = require('../Controllers/companyController')
const {auth} = require('../Middleware/userMiddleware')
router.post('/submit', auth,updateDB)
router.get('/kpi', calculateKPI)
module.exports = router;