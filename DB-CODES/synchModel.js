const { sequelize } = require('./models'); // adjust path if needed

(async () => {
  try {
    await sequelize.sync();
    console.log('All models were synched successfully.');
  } catch (error) {
    console.error('Error synching models:', error);
  } finally {
    await sequelize.close();
  }
})();
