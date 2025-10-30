// week9/ValidationConstraints/model/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: { min: 0 }
  }
}, {
  freezeTableName: true,
  timestamps: true
});

module.exports = User;
