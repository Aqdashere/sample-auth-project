const { required, ref } = require("joi");
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  }
}, { timestamps: true })

module.exports = mongoose.model("post", postSchema)