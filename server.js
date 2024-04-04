const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const User = require("./module/user.js");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/vroom-rental");
  } catch (err) {
    console.error(err);
  }
};
connectDB();
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get("/", (req,res) =>{
    console.log("hitn")
    return res.json({firstname:"leeja"})
})

// app.get("/endpoint2", (req,res) =>{
//     console.log("hitn2")
//     User.create({
//         username:"leeja",
//         password:"123",
//         phonenumber:"9841000000",
//         email:"ahdklasdak"

//     })
//     return res.json({firstname2:"leeja2"})
// })

// app.get("/getUsers", async (req, res) => {
//     try {
//       const users = await User.find();
//       return res.json(users);
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Internal Server Error" });
//     }
//   });

app.post("/register",  async (req,res) =>{
    console.log("hitn")
    const {name,pwd,phn,eml}=req.body;
    const Result = await User.create({
        username:name,
        password:pwd,
        email:eml,
        phonenumber:phn

    })
        // console.log("res",Result);
    return res.json({firstname:"leeja"})
})

app.get("/checkEmail", (req, res) => {
  const email = "ahdklasdak"; // Email to check
  const password = "123"; // Password to check

  User.findOne({ email, password })
    .then(user => {
      if (user) {
        // const { email, password, username, phonenumb*
        res.status(200).json({success: true, message: "User can log in" })
      } else {
        res.status(400).json({success: false, message: "Email or password is incorrect" });
      }
    });
});

mongoose.connection.once("open", () => {
    console.log("connected to mongodb")
    app.listen(3500, () => console.log("Server runnung import 3500"))
})
