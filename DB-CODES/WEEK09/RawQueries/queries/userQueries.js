// week9/RawQueries/queries/userQueries.js
const sequelize = require('../../db');

async function rawCreateUser({ name, email, age }) {
  const sql = `INSERT INTO \`User\` (name, email, age, createdAt, updatedAt)
               VALUES (?, ?, ?, NOW(), NOW())`;
  const [result] = await sequelize.query(sql, { replacements: [name, email, age] });
  return result;
}

async function rawGetAllUsers() {
  const [rows] = await sequelize.query('SELECT * FROM `User`');
  return rows;
}

async function rawFindUserById(id) {
  const [rows] = await sequelize.query('SELECT * FROM `User` WHERE id = ?', { replacements: [id] });
  return rows[0];
}

module.exports = { rawCreateUser, rawGetAllUsers, rawFindUserById };
