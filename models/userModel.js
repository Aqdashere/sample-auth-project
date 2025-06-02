const { required } = require("joi")
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minimumLength: 5
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Email is required"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    select: false, //will not fetch password when getting data of user from database
  },
  verified: {
    type: Boolean,
    default: false
  },
  verificationCode: {
    type: Boolean,
    select: false,
  },
  verificationCodeValidation: {
    type: Boolean,
    select: false,
  },
  forgotPasswordCode: {
    type: String,
    select: false,
  },
  forgotPasswordCodeValidation: {
    type: String,
    select: false,
  }
}, {

  timestamps: true

});

module.exports = mongoose.model("user", userSchema)