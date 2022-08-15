const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Children = new Schema({
    idNum: { type: Number, required: true },
    name: { type: String, required: true },
    Fname:{type:String , required:true},
    Mname:{type:String , required:true},
    Fnumber:{type:String , required:true},
    Mnumber:{type:String , required:true},
    birthdate: Date,
    
})

const Childrens = mongoose.model('Children', Children)
module.exports = Childrens




