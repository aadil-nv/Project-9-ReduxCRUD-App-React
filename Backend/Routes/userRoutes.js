const express = require("express");
const user_router = express.Router();
const userController = require('../Controllers/userControllers');
const { verifyToken } = require("../Utils/verifyUser");

//todo---------------------------------------------------------------------------------

user_router.get('/',userController.test);
user_router.post('/update/:id',verifyToken,userController.updateUser);






//todo---------------------------------------------------------------------------------

module.exports = user_router;
