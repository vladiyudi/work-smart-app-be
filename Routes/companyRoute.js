const express = require('express');
const router = express.Router();
const companyData = require('../Schemas/companySchema')
const {updateDB} = require('../Controllers/companyController')
const {auth} = require('../Middleware/userMiddleware')


router.post('/analize', auth, updateDB)

module.exports = router;