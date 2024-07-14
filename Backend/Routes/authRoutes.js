const express = require("express");
const auth_router = express.Router();
const authController = require('../Controllers/authControllers')

//todo-------------------------------------------------------------------------------


auth_router.post('/sign-up',authController.signUp);
auth_router.post('/sign-in',authController.signIn);







//todo---------------------------------------------------------------------------------
module.exports = auth_router;