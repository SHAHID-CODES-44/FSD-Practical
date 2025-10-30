// week9/RawQueries/index.js
const sequelize = require('../db');
const UserModel = require('./model/user'); // ensures model structure exists
const queries = require('./queries/userQueries');

(async () => {
  try {
    // create table if missing (no force)
    await sequelize.sync();
    console.log('✅ RawQueries - DB synced (no force)');

    // insert via raw SQL
    await queries.rawCreateUser({ name: 'RawShahid', email: 'rawshahid@example.com', age: 21 });
    await queries.rawCreateUser({ name: 'RawAzeez', email: 'rawazeez@example.com', age: 23 });

    console.log('Raw all users:', await queries.rawGetAllUsers());
    console.log('Raw find id=1:', await queries.rawFindUserById(1));

    await sequelize.close();
    console.log('Done.');
  } catch (err) {
    console.error('Error in RawQueries:', err);
    process.exit(1);
  }
})();
