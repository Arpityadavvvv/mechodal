const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");  // i used this because on deployment we have two diffrent ports 
const bodyParser = require("body-parser"); // used for parsing requested data 

const User = require("./models/User");  // getting user model

const app = express(); 
const PORT = process.env.PORT || 5000;


// now using middlewares here 

app.use(cors({
    origin: "https://mechodaltech.vercel.app", // Allow frontend requests
    methods: ["POST", "GET"], 
    credentials: true
  })); // for diffrent ports 
app.use(express.json()); // json parser it is 

// database connection 
mongoose.connect("mongodb+srv://arpity665:arpit47@cluster0.mgddyin.mongodb.net/", {})
  .then(() => console.log("Database connected succesfully"))
  .catch(err => console.log(err));


//1 main routes which handles anything , we can also use MVC model but for now i prefer direct here
app.post("/signup", async (req, res) => {
  try {
    console.log("Receiving Data from frontend :", req.body); 

    let { name, mobile, gender } = req.body;

    name = name.trim().toLowerCase();

    // validating
    if (!name || !mobile || !gender) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // if user exists
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res.status(400).json({ message: "This mobile number is already registered" });
    }

    // if not then 
    const newUser = new User({ name, mobile, gender });
    await newUser.save();

    console.log("New user created:", newUser);
    res.status(201).json({ message: "Signup successful", user: newUser });

  } catch (error) {
    console.error("❌ Signup Error:", error.message);
    res.status(500).json({ message: "Error in signup", error: error.message });
  }
});

// this is for , demo login only 
app.post("/login", async (req, res) => {
    try {
        
      let { name, mobile } = req.body;
      name = name.trim().toLowerCase();
      console.log("data is coming fro login frontend ",req.body);
  
      // Check if user exists
      const user = await User.findOne({ name, mobile });
      console.log("checking user ",user);
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      res.status(500).json({ message: "Login error", error: error.message });
    }
  });

// starting the server 
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });







  



