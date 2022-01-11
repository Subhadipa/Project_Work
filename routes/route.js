const express = require('express');
const router = express.Router();


const JtoEController= require("../controllers/jsonToexcel")


router.post('/getExcel',JtoEController.getSheet);

module.exports = router;