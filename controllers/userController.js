const models = require('../models/index.js')
class UserController {
    static displayData (req,res){
        models.User.findAll()
            .then(function(data){
                res.render('./users/display_users.ejs',{users:data})
            })
            .catch(function(req,res){
                res.send(err)
            })
    }
    static displayAddUsersForm (req,res) {
        res.render('./users/users.ejs')
    }
}