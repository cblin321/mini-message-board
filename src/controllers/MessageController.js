const messages = require("../models/messages")
module.exports = {
    new: (req, res) => res.render("./form"),
    createNew: (req, res) => {
        const body = req.body
        messages.push({ 
            text: body.messageText,
            user: body.messageAuthor,
            added: new Date()
        })
        res.redirect("/")
    } ,
    get: (req, res) => {
        const msg = messages[req.params.index]
        res.render("./message", { msg })
    }

}