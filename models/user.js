// User model

module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define("User", {
        username_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 32]
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    
    return User;
};