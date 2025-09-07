const indexRouter = require("./routers/IndexRouter")
const express = require("express")
const path = require("path")
const app = express()


app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter)


app.listen(3000, (err) => {
  if (err)
    throw err

  console.log("listening on 3000")
})