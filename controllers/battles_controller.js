var express = require("express");

var router = express.Router();

// Import the models to use their database functions.
var character = require("../models/characters.js");
var game = require("../models/games.js");
var user = require("../models/users.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    battle.all(function(data) {
        var hbsObject = {
            battles: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    battle.create([
        "burger_name"
    ], [
        req.body.burger
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function() {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;