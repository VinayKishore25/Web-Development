
const express = require('express');
const userController = require('../controllers/adduser');
const Router = express.Router();

Router.get('/get-user', userController.AddUser);

module.exports = Router;