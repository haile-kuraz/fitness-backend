const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String },
});
const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
