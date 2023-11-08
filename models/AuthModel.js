const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required :[true , "user name is required"],
    },
    password: {
        type: String,
        required : [ true , "user password requied"]
        
    }

})