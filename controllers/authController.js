const userSchema = require("../models/userModel")

exports.getUser = async (req, res) => {
  const { email } = req.params
  console.log(email)
  const user = await userSchema.findOne({ email })

  res.json({
    user
  })
}

exports.signup = async (req, res) => {
  const { name, email, password } = req.body

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
