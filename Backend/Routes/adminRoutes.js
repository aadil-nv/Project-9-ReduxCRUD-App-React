const express = require("express");
const admin_router = express.Router();
const adminController = require('../Controllers/adminController')



admin_router.post('/admin-signin',adminController.adminSignUp);
admin_router.get('/users-data',adminController.usersData);

module.exports = admin_router;