const mongoose = require("mongoose")
const timeSchema = mongoose.Schema({
    billable:{type:String,default:0},
    not_billable: { type: String, default: 0 }
   
  });

const project_schema = mongoose.Schema({
    client_name: String,
    project_name: String,
    budget: String,
    date: String,
    task:[{task_name:String}],
    end_date:String,
  team: [{ emp_name: String, charge: Number }]
})

const ProjectModel = mongoose.model("project", project_schema)

module.exports = {
  ProjectModel
}