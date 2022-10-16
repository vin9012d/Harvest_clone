const { Router } = require("express");
const { authentication } = require("../middlewares/authentication");
const { ProjectModel } = require("../models/project.model");

const projectControl = Router();

projectControl.post("/",authentication, async(req, res) => {
    
    const payload = req.body;
    const new_data = new ProjectModel(payload)
    console.log(new_data, 'new_data')
    

    await new_data.save()
    
    res.json({message:"Reached to the project add data section"})

})


projectControl.get("/",authentication, async(req, res) => {
    
    const payload = req.body;
    const new_data = await ProjectModel.find()
    
    

   
    
    res.json(new_data)

})
projectControl.get("/",authentication, async(req, res) => {
    const payload = req.body;
    const new_data = await ProjectModel.find()
    res.json(new_data)
})

module.exports = {
    projectControl
}