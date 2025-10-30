'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    freezeTableName: true, // table name will be exactly "Users"
    timestamps: false      // optional: removes createdAt/updatedAt
  });

  return Users;
};
