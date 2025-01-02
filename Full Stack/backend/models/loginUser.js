const mongoose = require('mongoose');

const loginUser = new mongoose.Schema({
    userName:{
        type: String,
        required : true
    },
    password:{
        type:String,
        required:true
    }

})

// export default loginUser;
module.exports = mongoose.model('loginUser' , loginUser)


