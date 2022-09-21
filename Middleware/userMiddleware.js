const jwt = require('jsonwebtoken')
require("dotenv").config({ path: "./.env" })

exports.auth = (req, res, next) => {
    const { token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send("Unauthorized");
        return;
      }
      req.body.userid = decoded.id;
      next();
    }
    );
    // req.body.userid = "60a1b1b0b1b1b1b1b1b1b1b1"
 

    
  }