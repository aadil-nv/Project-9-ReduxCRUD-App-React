const express = require("express");
const user_router = express.Router();
const userController = require('../Controllers/userControllers')

//todo---------------------------------------------------------------------------------

user_router.get('/',userController.test);






//todo---------------------------------------------------------------------------------

module.exports = user_router;
