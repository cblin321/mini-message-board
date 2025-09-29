let { Router } = require("express")
const indexRouter = Router()
const IndexContoller = require("../controllers/IndexContoller")
const MessageController = require("../controllers/MessageController")


indexRouter.get("/", async (req, res) => await IndexContoller.index(req, res))

indexRouter.get("/new", MessageController.new)

indexRouter.post("/new", async (req, res) => await MessageController.createNew(req, res))

indexRouter.get("/messages/:id", async (req, res) => await MessageController.get(req, res))


module.exports = indexRouter