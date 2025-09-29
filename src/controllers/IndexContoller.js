const model = require("../models/messages")
module.exports = {
   index:  async (req, res) => {
      const messages = await model.getAllPosts()
      res.render("./", { "messages" : messages })
   }
}