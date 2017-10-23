// Board model

module.exports = function(sequelize, DataTypes) {
    var Board = sequelize.define("Board", {
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        character_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Board;
};