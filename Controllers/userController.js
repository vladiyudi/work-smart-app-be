const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./.env" });
const userData = require("../Schemas/userSchema");

exports.authWithGoogle = (req, res) => {
  try {
    const { user } = req;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      //   sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      //   secure: process.env.NODE_ENV === 'production' ? true : false,
      maxAge: 15151252151251,
    });
    res.redirect(`${process.env.BASE_URL}/dashboard`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.validateUser = async (req, res, next) => {
  try {
    const { userid } = req.body;
    const user = await userData.find({ _id: userid });
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
