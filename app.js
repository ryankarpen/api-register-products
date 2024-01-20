const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

const conn = require("./db/conn")
conn()


const routes = require("./routes/router")

app.use("/api", routes)

app.listen(3000, function(){
    console.log("Servidor online")
})