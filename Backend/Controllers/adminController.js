const User = require("../Model/userModel");
const Admin = require("../Model/adminModel");
const bcrypt = require("bcryptjs");
const { errorHandler } = require('../Utils/error');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const adminSignUp = async (req, res, next) => {
    
    try {
        const { adminemail, password } = req.body;
        const validAdmin = await Admin.findOne({adminemail});
        if(!validAdmin) return next(errorHandler(404,"User not found"));
        const validPassword = bcrypt.compareSync(password,validAdmin.password)
        if(!validPassword) return next(errorHandler(401,"Invalid Credentials"));
        const token = jwt.sign({id:validAdmin._id },process.env.JWT_SECRET);
        const {password:hashedPassword,...rest}=validAdmin._doc
        const expiryDate = new Date(Date.now()+3600000);
        res.cookie('access_token',token , {httpOnly : true,expier:expiryDate}).status(200).json(rest)
    } catch (error) {
        console.log("-----signin-------", error.message);
        next(errorHandler(300, "Something went wrong"));
    }
};


const usersData = async (req, res, next) => {
    console.log("calling here");
    try {
    
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(errorHandler(500, "Something went wrong"));
        console.log("======USER DATA ERROR=======", error.message);
    }
};

module.exports = {
    adminSignUp,usersData
};
