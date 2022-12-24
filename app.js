const express = require('express')
const expressFileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routers/index.router');
require('dotenv').config()

const {PORT, SERVER_URI} = process.env

const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(expressFileUpload())

// load routers
routes(app);

app.listen((PORT),(err)=>{
    if(err){
        console.log('Something went wrong', err)
    }
    console.log(`Server runnig at port ${PORT}`)
})