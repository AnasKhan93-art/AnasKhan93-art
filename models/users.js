var mongoose =require('mongoose')
var crypto =require('crypto-js')

var userschema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    }
})

const UserModel= mongoose.model('UserModel',userschema)