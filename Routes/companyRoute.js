const express = require('express');
const router = express.Router();
const companyData = require('../Schemas/companySchema')


router.post('/analizeCompany', 
(req, res) => {
    res.send('Hello World');
}
)

module.exports = router;