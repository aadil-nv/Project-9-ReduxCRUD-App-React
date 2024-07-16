const User = require("../Model/userModel.js");
const {errorHandler} = require('../Utils/error.js')
const bcrypt = require("bcryptjs");



//todo---------------------------------------------------------------------------------


const test = async (req,res)=>{
    try {
        res.json({message :"welcome to ooty nive to mmet you"})
        
    } catch (error) {
        console.log(error.message);
    }
};


const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "You can update only your account"));
    }

    try {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilepicture: req.body.profilePicture,
                }
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error); // Properly pass the error to the error handling middleware
    }
};





//todo---------------------------------------------------------------------------------

module.exports={
    test,updateUser
}