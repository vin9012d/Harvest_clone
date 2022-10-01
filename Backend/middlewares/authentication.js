const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.headers?.authentication?.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        return res.redirect("/login");
      } else {
        console.log(decoded);
        next();
      }
    });
  } else {
    return res.redirect("/login");
  }
};

module.exports = { authentication };
