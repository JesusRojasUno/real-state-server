const mongoose = require('mongoose');

//propiedades de modelo
const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true   
    },
    LastName:{
        type: String,
        required: true
    },
    UserName:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    ProfileImage:{
        type: String,
        required: false

        },
});
 
const User = mongoose.model('User',UserSchema);

module.exports = {
    User

}
