const User = require('./../models/userModel')
const CustomError = require('./../utils/customError')

exports.register = async (req, res, next)=>{
        const {name, email, phoneNumber, dob, password} = req.body;
        const newUserData = {
            name,
            email,
            phoneNumber,
            dob,
            password
        }
        const newUser = await User.create(newUserData);
        res.status(201).json(
            {
                status: "created",
                data: {
                    newUser
                }
            }
        )
}


exports.login = async (req, res, next)=>{
    const {name, password} = req.body;
    const foundUser = await User.findOne({name})
    if(!foundUser) return next(new CustomError('User not found', 404))
    
    res.status(200).json(
        {
            status: "success",
            message: "Login Successful",
            data: {
                user
            }
        }
    )
    
}

exports.forgotPassword = async(req, res, next)=>{
    const {name} = req.body;
    const foundUser = await User.findOne({name})
    if(!foundUser) return next(new CustomError('User not found', 404))
    res.status(200).json(
        {
            status: "success",
            message: "Login Successful",
            data: {
                user
            }
        }
    )
    
}


exports.resetPassword = async(req, res, next)=>{
    const {name} = req.body;
    const foundUser = await User.findOne({name})
    if(!foundUser) return next(new CustomError('User not found', 404))
    res.status(200).json(
        {
            status: "success",
            message: "Login Successful",
            data: {
                user
            }
        }
    )
    
}