const { db, DataTypes, Model } = require('../../db/connection');

// extend the Sequlize builder Model
class User extends Model {}

// structure the table with datatypes
// also sequlize connection and model name
User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'User',
})

module.exports = User;
// this runs to create the database
db.sync();

// this defines a table inside our database