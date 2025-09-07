const messages = require("../models/messages")
module.exports = {
   index:  (req, res) => res.render("./", { "messages" : messages }),
}