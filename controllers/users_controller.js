// Users Controller
var sdb = require("../models");
var exports = module.exports = {}

// Post route to insert a user into the user table
// POST to /users/create is done in passport

exports.allUsers = function(req, res) {
    sdb.User.findAll({})
        .then(function(data) {
            res.json(data);
        }).catch(function(err) {
            res.json(err);
        })
};