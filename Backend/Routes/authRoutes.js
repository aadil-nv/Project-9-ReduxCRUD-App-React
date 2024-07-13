const express = require("express");
const auth_router = express.Router();
const authController = require('../Controllers/authControllers')

//todo-------------------------------------------------------------------------------


auth_router.post('/sign-up',authController.signUp);







//todo---------------------------------------------------------------------------------
module.exports = auth_router;