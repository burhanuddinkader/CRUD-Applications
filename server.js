const express = require("express")
const app = express()
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyparser = require("body-parser");
const path = require('path');
const route = require("./server/routes/router")

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

// Log Requests
app.use(morgan('tiny'))

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))    

app.use("/",route)

app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})