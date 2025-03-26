const mongoose = require("mongoose");

// making schema for the user accoridng to given requirements (name,mobile,gender, invite code is optional sowe are not using it )

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true }
});

module.exports = mongoose.model("User", UserSchema);
