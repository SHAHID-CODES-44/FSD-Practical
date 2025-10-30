const Sequelize = require('sequelize');
const sequelize = require('./db');
const defineUser = require('./models/userModel');

const User = defineUser(sequelize, Sequelize.DataTypes);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('D-B Connected.');

        await sequelize.sync({ force: true });
        console.log("User table created successfully.");

        await sequelize.close();
    } catch (err) {
        console.error('Error:', err);
    }
})();
