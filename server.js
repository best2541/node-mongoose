require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true,useNewUrlParser: true })
const db =  mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.log('connect DB'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('run on 3000'))