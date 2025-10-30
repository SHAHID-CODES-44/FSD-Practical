// week9/ValidationConstraints/index.js
const sequelize = require('../db');
const User = require('./model/user');
const queries = require('./queries/userQueries');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('✅ ValidationConstraints - DB synced (force:true)');

    // valid
    await queries.createUser({ name: 'Good User', email: 'good@example.com', age: 25 });
    console.log('Created valid user.');

    // invalid (will throw because email format invalid)
    try {
      await queries.createUser({ name: 'Bad User', email: 'not-an-email', age: 30 });
    } catch (err) {
      console.error('Validation error (expected):', err.message);
    }

    console.log('All users:', (await queries.getAllUsers()).map(u => u.toJSON()));

    await sequelize.close();
    console.log('Done.');
  } catch (err) {
    console.error('Error in ValidationConstraints:', err);
    process.exit(1);
  }
})();
