const { Router } = require("express");
const { authentication } = require("../middlewares/authentication");
const { ClientModel } = require("../models/client.mode");
const clientControl = Router();

clientControl.post("/", authentication,  async(req, res) => {
    
    const payload = req.body;
    const new_data = new ClientModel(payload);
    await new_data.save()
    console.log(new_data,'new_data')
    res.json({message:"Reached"})

})
clientControl.get("/",authentication, async(req, res) => {
    // const { edit_id } = req.params;
    const new_data1 = await ClientModel.find();
    console.log(new_data1)
    
    res.json(new_data1)

    // const payload = req.body;
    // const new_data = new ClientModel(payload);
    // await new_data.save()
    // console.log(new_data,'new_data')
    // res.json({message:"Reached"})

})


clientControl.patch("/edit/:edit_id",authentication, async(req, res) => {
    const { edit_id } = req.params;


    const new_data1 = await ClientModel.updateOne({_id:edit_id},{...req.body});
    console.log(new_data1)
    
    res.json(new_data1)

    // const payload = req.body;
    // const new_data = new ClientModel(payload);
    // await new_data.save()
    // console.log(new_data,'new_data')
    // res.json({message:"Reached"})

})

clientControl.delete("/delete/:delete_id",authentication, async(req, res) => {
    const { delete_id } = req.params;
    console.log(delete_id,'deletid')

    const new_data1 = await ClientModel.deleteOne({_id:delete_id});
    console.log(new_data1)
    
    res.json({message:"data deleted"})

    // const payload = req.body;
    // const new_data = new ClientModel(payload);
    // await new_data.save()
    // console.log(new_data,'new_data')
    // res.json({message:"Reached"})

})

clientControl.post("/contact",authentication, async(req, res) => {
    
    const payload = req.body;
    const new_data = await ClientModel.updateOne({ _id: "63380eafd7b98b0b98107a8c" },  {
        $push: {
            contacts: payload
        }
    });
    let vin = new_data.contacts;
    
    console.log(new_data.contacts,'contacts')
    console.log(new_data,'new_data')

res.json({message:"Reached"})

})



clientControl.delete("/contact",authentication, async(req, res) => {
    
    const payload = req.body;
    const new_data = await ClientModel.updateOne({ _id: "63380eafd7b98b0b98107a8c" },  {
        $pull: {
            contacts: {_id}
        }
    });
    let vin = new_data.contacts;
    
    console.log(new_data.contacts,'contacts')
    console.log(new_data,'new_data')


    res.json({message:"Reached"})

})

module.exports = {
    clientControl
}