// Character model

module.exports = function(sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
        character_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        character_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        initiative_bonus: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        conditions: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Character;
};