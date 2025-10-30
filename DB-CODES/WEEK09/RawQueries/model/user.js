// week9/RawQueries/model/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  age: { type: DataTypes.INTEGER, allowNull: true }
}, {
  freezeTableName: true,
  timestamps: true
});

module.exports = User;
