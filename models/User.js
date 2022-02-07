const {Sequelize, DataTypes, Model} = require('sequelize');
const config = require('../config/mysql.config');
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

class User extends Model {

}

User.init({
    // Model attributes are defined here
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vch: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
    },
    role:{
        type: DataTypes.STRING,
    },
    rank: {
        type: DataTypes.STRING,
    },
    isRegist: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'users', // We need to choose the model name
    tableName: 'users'
});

// the defined model is the class itself
(async () => {
    try {
        await User.sync({alter: true});
    } catch (e) {
        console.log(e);
    }
})();

// console.log(User === sequelize.models.User); // true
module.exports = User;