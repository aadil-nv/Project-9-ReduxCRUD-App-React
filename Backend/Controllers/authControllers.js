const User = require("../Model/userModel");
const bcrypt = require("bcryptjs");
const {errorHandler} = require('../Utils/error.js')




//todo---------------------------------------------------------------------------------


const signUp = async (req,res,next)=>{
    try {
        const {username , email, password} = req.body;
        const hashedPassword = bcrypt.hashSync(password,10);
        const newUser = new User({username,email,password:hashedPassword});
        await newUser.save();
        res.status(201).json({message:"User created succesfully ._."})
        
    } catch (error) {
        next(errorHandler(300,"somthing went wrong"))
        console.log("======SIGNUP=======",error.message);
    }
};



//todo---------------------------------------------------------------------------------

module.exports={
    signUp
}