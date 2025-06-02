const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const authRouter = require("./routers/authRouter")

const app = express()
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://Owais:owais@cluster0.wde1dec.mongodb.net/sampleProject?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use("/api/auth", authRouter)

app.get('/', (req, res) => {
  res.json({ message: "Hello world" })
})

app.listen("3004", () => {
  console.log('app started')
})