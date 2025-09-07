let { Router } = require("express")
const indexRouter = Router()
const IndexContoller = require("../controllers/IndexContoller")
const MessageController = require("../controllers/MessageController")


indexRouter.get("/", IndexContoller.index)

indexRouter.get("/new", MessageController.new)

indexRouter.post("/new", MessageController.createNew)

indexRouter.get("/messages/:index", MessageController.get)


module.exports = indexRouter