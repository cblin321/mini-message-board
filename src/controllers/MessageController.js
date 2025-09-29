const messages = require("../models/messages")
module.exports = {
    new: (req, res) => res.render("./form"),
    createNew: async (req, res) => {
        await messages.createUserPost(req, res)
        res.redirect("/")
    } ,
    get: async (req, res) => {
        const msg = (await messages.getMessage(req, res))[0]
        res.render("./message", { msg })
    }

}