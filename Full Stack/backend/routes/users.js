var express = require('express');
var router = express.Router();
var userCont = require('../controllers/userControllers')
/* GET users listing. */
router.get("/userCollege" , userCont.getUser)
module.exports = router;
