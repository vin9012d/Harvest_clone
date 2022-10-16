const { Router } = require("express");
const { UserModel } = require("../models/user.model");
require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/signup", async (req, res) => {
  const { firstName, lastName, company, email, password } = req.body;

  const isExist = await UserModel.find({ email });

  if (isExist.length > 0) {
    return res.json({
      message: "User Already Exist! Please login",
      status: false,
    });
  }

  bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong! Please try again later" });
    } else {
      const user = await UserModel({
        firstName,
        lastName,
        company,
        email,
        password: hash,
      });

      user.save((err, success) => {
        if (err) {
          return res.status(500).send({ message: err.message, status: false });
        }

        return res.status(201).send({
          message: "Signup successful!",
          ...success["_doc"],
          status: true,
        });
      });
    }
  });
});

router.post("/login", async (req, res) => {
console.log("login come baba a")
  const { email, password } = req.body;
  
  console.log(email, password, 'email password')
  console.log("vinod1")

  const user = await UserModel.find({ email });
  console.log(user,'user')
  const hash = user[0]?.password;
  console.log(hash,'hash', user.length)

  if (user.length === 1) {
 
   bcrypt.compare(password, hash, function (err, results) {
      if (err) {
        console.log(err,'results')
        return res.status(400).send({ message: "Invalid Credentials" });
      } else if (results) {
        console.log(results,'results')
        var token= jwt.sign({ email }, process.env.SECRET_KEY, {
          expiresIn: "2d",
        });
       
        
        return res
          .status(200)
          .send({ message: "Login Successfully", status: results, token });
      }
    });
  } else {
    
    res
    .status(401)
    .send({ message: "Login Successfully"});
  }

  console.log("before return failure;")

  
  });




module.exports = router;
