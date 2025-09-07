let { Router } = require("express")
const indexRouter = Router()

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

indexRouter.get("/", (req, res) => {
    res.render("./", { "messages" : messages })
})

indexRouter.get("/new", (req, res) => {
    res.render("./form")
})

indexRouter.post("/new", (req, res) => {
  const body = req.body
  messages.push({ 
    text: body.messageText,
    user: body.messageAuthor,
    added: new Date()
  })
  res.redirect("/")
})

indexRouter.get("/messages/:index", (req, res) => {
  const msg = messages[req.params.index]
  res.render("./message", { msg })
})


module.exports = indexRouter