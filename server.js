const express = require("express");
require("dotenv").config({ path: "./.env" });
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const connectDB = require("./utils/connectDB");
// mongoose.connect(process.env.DATABASE, {useNewUrlParser:true,useUnifiedTopology:true})
const companyData = require("./Schemas/companySchema");

const companyRoute = require("./Routes/companyRoute");
const userRoute = require("./Routes/userRoute");
require("./Utils/GoogleAuth");

app.use(express.json());
app.use(cors({ origin: process.env.BASE_URL, credentials: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/company", companyRoute);
app.use("/api/user", userRoute);

connectDB((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  app.listen(process.env.PORT, () => {
    console.log(`👉 Server listening on ${process.env.PORT}.`);
  });
});
