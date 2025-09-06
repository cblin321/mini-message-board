const indexRouter = require("./routers/IndexRouter")
const messageRouter = require("./routers/MessageRouter")
const express = require("express")
const path = require("path")
const app = express()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter)
app.use("/messages", messageRouter)