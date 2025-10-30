const Users = require('../model/users');

async function createUser(payload) { return await Users.create(payload); }
async function getAllUsers() { return await Users.findAll(); }
async function findUserById(id) { return await Users.findByPk(id); }
async function findUsersByName(name) { return await Users.findAll({ where: { name } }); }
async function updateUser(id, payload) {
  const [updated] = await Users.update(payload, { where: { id } });
  return updated;
}
async function deleteUser(id) { return await Users.destroy({ where: { id } }); }

module.exports = { createUser, getAllUsers, findUserById, findUsersByName, updateUser, deleteUser };
