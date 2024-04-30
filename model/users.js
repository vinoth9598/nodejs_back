const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:String,
    name:String,
    passwordHash:String,
    createAt:{
        type:Date,
        default:Date.now
    },
    updateAt:Date
})

const Users=mongoose.model('Users',userSchema,'users')

module.exports=Users