const indexRouter = require("./routes/IndexRouter")
const express = require("express")
const path = require("path")
const app = express()

require('dotenv').config()
console.log(process.env.CONNECTION_URL)

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter)


app.listen(3000, (err) => {
  if (err)
    throw err

})