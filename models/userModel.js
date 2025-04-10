const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchmea = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name is required']
        },
        email: {
            type: String,
        },
        phoneNumber: {
            type: String
        },
        dob: {
            type: Date
        },
        password: {
            type: String,
        }
    }
)

const User = new mongoose.model('User', userSchmea) ;

module.exports = User;  
