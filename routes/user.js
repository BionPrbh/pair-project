const express = require('express')
const app = express()
const Models = require('../models/index.js')
const userController = require('../controllers/userController.js')

app.get('/users')
app.get('/users/add')
app.post('/users')

app.get('/students/update/:id')
app.post('/students/update/:id')

app.get('/users/delete/:id')


module.exports = app