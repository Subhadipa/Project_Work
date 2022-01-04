const express = require('express');
const router = express.Router();


const JtoEController= require("../controllers/jsonToexcel")


router.post('/createExcel',JtoEController.createExcel);

module.exports = router;