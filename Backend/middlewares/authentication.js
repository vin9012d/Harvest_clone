var jwt = require('jsonwebtoken');
require("dotenv").config();
const authentication = (req, res, next) => {
 
    console.log(req.body)
    
    console.log(req.headers.authorization)
    if (!req.headers.authorization) {
    res.send("Please login again")
}
    const token = req.headers?.authorization?.split(" ")[1]    
    
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        return res.redirect("/login")
          
        } else {
            
            next()
        }
    });
      
}


module.exports = {
    authentication
}