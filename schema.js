const mongoose=require('mongoose');
require('dotenv').config();


module.exports={
    connect:()=>{
        mongoose.connect(process.env.DB_URL,{useNewUrlParser:true})
        .then(()=>{
            console.log("Connected to db");
        })
        .catch(err=>{
            console.log(err);
            console.log("Connection to db failed");
        })
    },

    registerModel:()=>{
        let schema=new mongoose.Schema({
            eventName:{type:String,required:true},
            email:{type:String,required:true},
            name:{type:String,required:true},
            mobile:{type:String},
            timestamp:{type:Date,default:Date.now()},
            teamName:{type:String}
        })

        return mongoose.model('registrations',schema);
    },

    contactsModel:()=>{
        let schema=new mongoose.Schema({
            email:{type:String,required:true},
            name:{type:String,required:true},
            mobile:{type:String},
            timestamp:{type:Date,default:Date.now()},
            message:{type:String,required:true}
        })

        return mongoose.model('contacts',schema);
    }
}