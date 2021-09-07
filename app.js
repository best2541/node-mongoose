const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')

app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected')
})
//import routes
const postsRoute = require('./routes/post')

app.use('/posts', postsRoute)

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(3000, () => console.log('3000'))