const userSchema = require("../models/userModel")

exports.getUser = async (req, res) => {
  res.json({
    name: "Aqdas",
    email: "aqdas@yopmail.com"
  })
}

exports.signup = async (req, res) => {
  const {name, email, password} = req.body

  const user = new userSchema({
    name,
    email,
    password
  })

  await user.save()

  res.json({
    message: "sign up successful."
  })
}

exports.login = async (req, res) => {


  res.json({
    message: "login successful."
  })
}
