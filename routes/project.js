const express = require('express')
const app = express()
const Models = require('../models/index.js')
const projectController = require('../controllers/projectController.js')

app.get('/projects', projectController.displayData)

module.exports = app