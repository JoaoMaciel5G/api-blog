const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes/routes")

const PORT = process.env.PORT || 8000;
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use("/", routes)
app.listen(PORT)