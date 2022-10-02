const { Router } = require("express");
const { ProjectModel } = require("../models/project.model");

const projectControl = Router();

projectControl.post("/", async(req, res) => {
    
    const payload = req.body;
    const new_data = new ProjectModel(payload)
    console.log(new_data, 'new_data')
    

    await new_data.save()
    
    res.json({message:"Reached to the project add data section"})




})


module.exports = {
    projectControl
}