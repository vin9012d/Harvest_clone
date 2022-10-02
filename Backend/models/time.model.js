const mongoose = require("mongoose");

const timeSchema = mongoose.Schema({  
    
    project_name: String,
    client_name: String,
    week_number: String,
    emp_name: String,
    work:[{billable:Number,notbillable:Number,task:String,charge:Number}] 
    
})

const TimeModel = mongoose.model("time", timeSchema)

module.exports = {
    TimeModel
}