// Game model

module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        game_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Game;
};