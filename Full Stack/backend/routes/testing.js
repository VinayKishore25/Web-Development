const express = require('express');
const router = express.Router();
const testingController = require('../controllers/testing');
// const { testing } = require('../controllers/testing')

// router.post("/testing",testingController.testing);
// router.get("/getting/:userType",testingController.getting);
router.post("/upload",testingController.uploading);

module.exports = router
