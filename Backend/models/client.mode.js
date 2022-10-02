const mongoose = require("mongoose");

const client_schema = mongoose.Schema({
    client_name: String,
    contacts:[{first_name:String,last_name:String}]
})

const client_address_schema=mongoose.Schema({})


const ClientModel = mongoose.model("clients", client_schema)

module.exports = {
    ClientModel,
    
}