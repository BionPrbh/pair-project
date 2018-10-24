const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')

const projectRoutes = require('./routes/project.js')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', projectRoutes)
app.get('/', function(req, res) {
    res.send('welcome')
})

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
})