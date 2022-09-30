const { Router } = require("express");
const { UserModel } = require("../models/user.model");
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
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  const hash = user?.password;

  bcrypt.compare(password, hash, function (err, results) {
    if (err) {
      return res.status(500).send({ message: "Invalid Credentials" });
    }

    var token = jwt.sign({ email }, process.env.SECRET_KEY);
    res
      .status(200)
      .send({ message: "Login Successfully", token, status: status });
  });
});

module.exports = router;
