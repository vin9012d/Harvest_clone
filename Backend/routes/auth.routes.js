const { Router } = require("express");
const { UserModel } = require("../models/user.model");
var bcrypt = require("bcryptjs");
const router = Router();

router.post("/signup", (req, res) => {
  const { firstName, lastName, company, email, password } = req.body;

  bcrypt.hash("bacon", 8, async function (err, hash) {
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
          return res.status(500).send({ message: err.message });
        }

        return res
          .status(201)
          .send({ message: "Signup successful!", ...success["_doc"] });
      });
    }
  });
});

router.post("/login", async (req, res) => {
  res.send();
});

module.exports = router;
