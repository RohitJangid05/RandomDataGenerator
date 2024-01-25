const mongoose=require('mongoose');

const employeeSchema =new mongoose.Schema({
    name: String,
    salary:Number,
    language:String,
    city:String
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports=Employee

