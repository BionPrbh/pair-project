const models = require('../models/index.js')
class ProjectController {
    static displayData(req, res) {
        models.Project.findAll()
            .then(function(data) {
                res.send(data)
            })
            .catch(function(err) {
                res.send(err)
            })
    }
}
module.exports = ProjectController