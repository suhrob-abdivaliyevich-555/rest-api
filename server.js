const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

//settings
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(helmet())
app.listen(8080 , ()=> {
    console.log(`SERVER READY`)
})