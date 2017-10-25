const authController = require("../controllers/authcontroller.js");
const boardsController = require("../controllers/boards_controller.js");
const charactersController = require("../controllers/characters_controller.js");
const gamesController = require("../controllers/games_controller.js");
const usersController = require("../controllers/users_controller.js");

module.exports = function(app, passport) {
    // Waits for a get request on /signup
    // app.get("/", authController.index);
    app.get("/signup", authController.signup);

    // ADD isLoggedIn TO ALL OF THESE ROUTES
    // Board related post and get routes
    app.post("/board/create", boardsController.createBoard);
    app.get("/board/all", boardsController.populateBoard);
    app.post("/character/create", charactersController.createCharacter);
    app.get("/character/all", charactersController.allCharacters);
    app.post("/game/create", gamesController.createGame);
    app.get("/game/all", gamesController.allGames);
    app.get("/user/all", usersController.allUsers);
    // END OF isLoggedIn ADDITION

    // Looks for a post request on /signup then runs through passport
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "/signup"
    }));

    // Looks for a post request on /signin then runs passport
    app.post("/signin", passport.authenticate("local-signin", {
        successRedirect: "/user",
        failureRedirect: "/signup"
    }));

    // Waits for a get request for /user
    app.get("/user", isLoggedIn, authController.user);

    // Waits for a get request on /logout
    app.get("/logout", authController.logout);

    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) return next();
        res.redirect("/signup");
    }
}