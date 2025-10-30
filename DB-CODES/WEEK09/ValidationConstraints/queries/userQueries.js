// week9/ValidationConstraints/queries/userQueries.js
const User = require('../model/user');

async function createUser(payload) {
  // Sequelize will perform validation & throw if invalid
  return await User.create(payload);
}

async function getAllUsers() {
  return await User.findAll();
}

module.exports = { createUser, getAllUsers };
